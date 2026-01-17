/**
 * 扣子AI插件前端UI层
 * 职责: 仅负责UI渲染、用户交互、消息通信
 * 不直接调用任何EDA API或业务逻辑,所有业务请求通过消息总线发送到后端
 */

// UI状态管理 (仅UI相关状态,不包含业务数据)
const state = {
	isConnected: false,
	isProcessing: false,
};

// DOM元素引用
const elements = {
	chatMessages: null,
	messageInput: null,
	sendBtn: null,
	settingsBtn: null,
	clearBtn: null,
	statusIndicator: null,
	statusDot: null,
	statusText: null,
	settingsModal: null,
	closeSettings: null,
	saveSettings: null,
	resetSettings: null,
	apiEndpoint: null,
	apiToken: null,
	botId: null,
	maxHistorySize: null,
};

// 初始化
document.addEventListener('DOMContentLoaded', () => {
	initializeElements();
	loadConfig();
	loadConversation();
	setupEventListeners();
	updateStatus('offline');
});

// 初始化DOM元素引用
function initializeElements() {
	elements.chatMessages = document.getElementById('chatMessages');
	elements.messageInput = document.getElementById('messageInput');
	elements.sendBtn = document.getElementById('sendBtn');
	elements.settingsBtn = document.getElementById('settingsBtn');
	elements.clearBtn = document.getElementById('clearBtn');
	elements.statusIndicator = document.getElementById('statusIndicator');
	elements.statusDot = elements.statusIndicator.querySelector('.status-dot');
	elements.statusText = elements.statusIndicator.querySelector('.status-text');
	elements.settingsModal = document.getElementById('settingsModal');
	elements.closeSettings = document.getElementById('closeSettings');
	elements.saveSettings = document.getElementById('saveSettings');
	elements.resetSettings = document.getElementById('resetSettings');
	elements.apiEndpoint = document.getElementById('apiEndpoint');
	elements.apiToken = document.getElementById('apiToken');
	elements.botId = document.getElementById('botId');
	elements.maxHistorySize = document.getElementById('maxHistorySize');
}

// 加载配置
function loadConfig() {
	sendMessageToPlugin({
		type: 'get_config',
	});
}

// 加载对话历史
function loadConversation() {
	sendMessageToPlugin({
		type: 'get_history',
	});
}

// 设置事件监听器
function setupEventListeners() {
	// 发送按钮
	elements.sendBtn.addEventListener('click', handleSend);

	// 输入框
	elements.messageInput.addEventListener('input', handleInputChange);
	elements.messageInput.addEventListener('keydown', handleKeyDown);

	// 设置按钮
	elements.settingsBtn.addEventListener('click', openSettings);

	// 清除按钮
	elements.clearBtn.addEventListener('click', handleClear);

	// 设置弹窗
	elements.closeSettings.addEventListener('click', closeSettings);
	elements.saveSettings.addEventListener('click', saveSettings);
	elements.resetSettings.addEventListener('click', resetSettings);

	// 设置消息总线监听 (接收后端推送的消息)
	try {
		if (window.eda && window.eda.sys_MessageBus) {
			window.eda.sys_MessageBus.subscribePublic('coze_ai_iframe_message', handlePluginMessageFromBus);
			console.log('[IFrame] Using message bus for communication');
		} else {
			// 备用方案：使用postMessage
			window.addEventListener('message', handlePluginMessage);
			console.log('[IFrame] Using postMessage for communication');
		}
	} catch (error) {
		console.warn('[IFrame] Failed to setup message bus, using postMessage:', error);
		window.addEventListener('message', handlePluginMessage);
	}
}

// 处理来自消息总线的消息
function handlePluginMessageFromBus(message) {
	// 消息总线直接传递消息对象，不需要event.data
	handlePluginMessage({ data: message });
}

// 处理输入变化
function handleInputChange() {
	const hasContent = elements.messageInput.value.trim().length > 0;
	elements.sendBtn.disabled = !hasContent;
}

// 处理键盘事件
function handleKeyDown(event) {
	if (event.key === 'Enter' && !event.shiftKey) {
		event.preventDefault();
		handleSend();
	}
}

// 处理发送 (收集用户输入并发送到后端)
async function handleSend() {
	const message = elements.messageInput.value.trim();
	if (!message || state.isProcessing) return;

	// 禁用发送按钮
	elements.sendBtn.disabled = true;
	elements.messageInput.value = '';
	state.isProcessing = true;

	// 立即显示用户消息在UI上(乐观更新)
	addMessageToUI({
		id: generateMessageId(),
		role: 'user',
		content_type: 'text',
		content: message,
		timestamp: Date.now(),
	});

	// 发送到后端处理 (后端会保存消息、调用AI API、执行命令等)
	sendMessageToPlugin({
		type: 'send_message',
		data: { message: message },
	});
}

// 处理清除对话
function handleClear() {
	if (confirm('确定要清空所有对话历史吗?')) {
		sendMessageToPlugin({
			type: 'clear_history',
		});

		// 清空界面
		elements.chatMessages.innerHTML = '';

		// 重新添加欢迎消息
		addWelcomeMessage();
	}
}

// 打开设置
function openSettings() {
	sendMessageToPlugin({
		type: 'get_config',
	});
	elements.settingsModal.classList.add('active');
}

// 关闭设置
function closeSettings() {
	elements.settingsModal.classList.remove('active');
}

// 保存设置 (收集UI输入并发送到后端保存)
function saveSettings() {
	const config = {
		apiEndpoint: elements.apiEndpoint.value.trim(),
		apiToken: elements.apiToken.value.trim(),
		botId: elements.botId.value.trim(),
		maxHistorySize: parseInt(elements.maxHistorySize.value) || 50,
	};

	// 发送到后端保存 (后端会调用StorageService保存并更新服务配置)
	sendMessageToPlugin({
		type: 'save_config',
		data: config,
	});

	closeSettings();
}

// 重置设置
function resetSettings() {
	elements.apiEndpoint.value = 'https://api.coze.cn';
	elements.apiToken.value = '';
	elements.botId.value = '';
	elements.maxHistorySize.value = 50;
}

/**
 * 处理来自后端的消息
 * 这是前端接收后端响应的统一入口
 * @param {Object} event - 消息事件,包含type和data字段
 */
function handlePluginMessage(event) {
	const { type, data } = event.data;
	console.log('[IFrame] Received message from plugin:', type);

	switch (type) {
		case 'config_loaded':
			handleConfigLoaded(data);
			break;
		case 'history_loaded':
			handleHistoryLoaded(data);
			break;
		case 'ai_response':
			handleAIResponse(data);
			break;
		case 'command_executing':
			handleCommandExecuting(data);
			break;
		case 'command_result':
			handleCommandResult(data);
			break;
		case 'connection_status':
			updateStatus(data.status);
			break;
		case 'error':
			handleError(data);
			break;
		default:
			console.warn('[IFrame] Unknown message type:', type);
	}
}

// 处理配置加载 (从后端接收配置数据并显示)
function handleConfigLoaded(config) {
	// 直接使用后端返回的配置填充UI,不在前端维护state
	elements.apiEndpoint.value = config.apiEndpoint || 'https://api.coze.cn';
	elements.apiToken.value = config.apiToken || '';
	elements.botId.value = config.botId || '';
	elements.maxHistorySize.value = config.maxHistorySize || 50;

	// 检查是否已配置
	if (config.apiToken && config.botId) {
		updateStatus('online');
	}
}

// 处理历史加载 (从后端接收历史数据并渲染)
function handleHistoryLoaded(history) {
	const messages = history.messages || [];

	// 清空现有消息
	elements.chatMessages.innerHTML = '';

	// 添加欢迎消息(如果历史为空)
	if (messages.length === 0) {
		addWelcomeMessage();
	} else {
		// 渲染历史消息 (不保存到前端state,数据由后端管理)
		messages.forEach((msg) => addMessageToUI(msg, false));
	}

	// 滚动到底部
	scrollToBottom();
}

// 处理AI响应
function handleAIResponse(response) {
	const message = {
		id: generateMessageId(),
		role: 'assistant',
		content_type: 'text',
		content: response.message,
		timestamp: Date.now(),
	};

	// 如果有命令,添加命令信息
	if (response.command) {
		message.command = response.command;
		message.command_id = response.command.command_id;
	}

	addMessageToUI(message);
}

// 处理命令执行中
function handleCommandExecuting(data) {
	// 显示加载动画
	const loadingElement = createLoadingElement();
	elements.chatMessages.appendChild(loadingElement);
	scrollToBottom();
}

// 处理命令执行结果
function handleCommandResult(result) {
	// 移除所有加载动画
	const loadingElements = elements.chatMessages.querySelectorAll('.loading-message');
	loadingElements.forEach((el) => el.remove());

	// 添加结果消息
	const resultMessage = {
		id: generateMessageId(),
		role: 'system',
		content_type: result.success ? 'result' : 'error',
		content: result.success
			? `[命令 ${result.command_id} 执行成功]\n数据: ${JSON.stringify(result.data, null, 2)}`
			: `[命令 ${result.command_id} 执行失败]\n错误: ${result.error}`,
		timestamp: Date.now(),
		command_id: result.command_id,
		result: result.data,
		error: result.error,
	};

	addMessageToUI(resultMessage);

	// 恢复发送按钮
	state.isProcessing = false;
	elements.sendBtn.disabled = elements.messageInput.value.trim().length === 0;
}

// 处理错误
function handleError(error) {
	console.error('[IFrame] Error:', error);

	// 显示错误提示
	const errorElement = document.createElement('div');
	errorElement.className = 'error-notification';
	errorElement.textContent = `错误: ${error.message || '未知错误'}`;
	errorElement.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--error-color);
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        box-shadow: var(--shadow);
        z-index: 1000;
        animation: fadeIn 0.3s ease;
    `;
	document.body.appendChild(errorElement);

	// 3秒后自动消失
	setTimeout(() => {
		errorElement.remove();
	}, 3000);
}

// 添加消息到UI (仅UI渲染,不维护前端数据状态)
function addMessageToUI(message, shouldScroll = true) {
	const messageElement = createMessageElement(message);
	elements.chatMessages.appendChild(messageElement);

	if (shouldScroll) {
		scrollToBottom();
	}

	// 注意: 消息数据由后端管理,前端不维护conversation state
}

// 创建消息元素
function createMessageElement(message) {
	const container = document.createElement('div');
	container.className = `message message-${message.role}`;

	// 创建头像
	const avatar = document.createElement('div');
	avatar.className = 'message-avatar';

	if (message.role === 'assistant') {
		avatar.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12C22 6.48 22 12C22 6.48 17.52 2 12C17.52 2 12 2ZM12 4C15.31 4 18 6.69 18 10H14V6H10V10H4V14H10V18H6.69C4 18 4 15.31 4 12C4 8.69 4 12 12 17.52 4 20 6.69 20 10H16V14H10V20H14C14 20 14 20 14V14H10V20H6.69C4 20 4 17.52 4 12ZM3 6H5V4H7V6H9V4H11V6H13V4H15V6H17V4H19V6H21V4H23V6H23V8H21V6H19V8H21V10H19V12H17V14H15V16H13V18H11V20H9V18H7V16H5V14H3V12H5V10H7V8H9V6H3V4H1V6H3V8H1V10H3V12H5V14H7V16H9V18H11V20H13V18H15V16H17V14H19V12H21V10H19V8H21V6H19V4H17V2H15V4H13V2H11V4H9V2H7V4H5V2H3V4H1V6H3V8H1V10H3V12H5V14H7V16H9V18H11V20H13V18H15V16H17V14H19V12H21V10H19V8H21V6H19V4H17V2Z" fill="currentColor"/>
            </svg>
        `;
	}

	// 创建内容
	const contentDiv = document.createElement('div');
	contentDiv.className = 'message-content';

	// 创建文本
	const textDiv = document.createElement('div');
	textDiv.className = 'message-text';
	textDiv.innerHTML = formatMessageContent(message.content);

	// 如果是system消息,显示不同的样式
	if (message.role === 'system') {
		if (message.content_type === 'error') {
			textDiv.classList.add('text-error');
		} else if (message.content_type === 'result') {
			textDiv.classList.add('text-success');
		}
		textDiv.style.whiteSpace = 'pre-wrap';
		textDiv.style.fontFamily = 'monospace';
		textDiv.style.fontSize = '12px';
	}

	contentDiv.appendChild(textDiv);

	// 添加时间戳
	const timestamp = document.createElement('div');
	timestamp.className = 'message-timestamp';
	timestamp.textContent = formatTimestamp(message.timestamp);
	contentDiv.appendChild(timestamp);

	container.appendChild(avatar);
	container.appendChild(contentDiv);

	return container;
}

// 创建加载元素
function createLoadingElement() {
	const container = document.createElement('div');
	container.className = 'message message-assistant loading-message';

	const avatar = document.createElement('div');
	avatar.className = 'message-avatar';
	avatar.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12C22 6.48 22 12C22 6.48 17.52 2 12C17.52 2 12 2ZM12 4C15.31 4 18 6.69 18 10H14V6H10V10H4V14H10V18H6.69C4 18 4 15.31 4 12C4 8.69 4 12 12 17.52 4 20 6.69 20 10H16V14H10V20H14C14 20 14 20 14V14H10V20H6.69C4 20 4 17.52 4 12ZM3 6H5V4H7V6H9V4H11V6H13V4H15V6H17V4H19V6H21V4H23V6H23V8H21V6H19V8H21V10H19V12H17V14H15V16H13V18H11V20H9V18H7V16H5V14H3V12H5V10H7V8H9V6H3V4H1V6H3V8H1V10H3V12H5V14H7V16H9V18H11V20H13V18H15V16H17V14H19V12H21V10H19V8H21V6H19V4H17V2H15V4H13V2H11V4H9V2H7V4H5V2H3V4H1V6H3V8H1V10H3V12H5V14H7V16H9V18H11V20H13V18H15V16H17V14H19V12H21V10H19V8H21V6H19V4H17V2Z" fill="currentColor"/>
        </svg>
    `;

	const contentDiv = document.createElement('div');
	contentDiv.className = 'message-content';

	const loadingDiv = document.createElement('div');
	loadingDiv.className = 'loading';
	loadingDiv.innerHTML = `
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
    `;

	contentDiv.appendChild(loadingDiv);
	container.appendChild(avatar);
	container.appendChild(contentDiv);

	return container;
}

// 格式化消息内容
function formatMessageContent(content) {
	// 转换换行
	let formatted = content.replace(/\n/g, '<br>');

	// 高亮JSON代码块
	formatted = formatted.replace(
		/```json\n([\s\S]*?)\n```/g,
		'<pre style="background: rgba(0,0,0,0.3); padding: 8px; border-radius: 4px; overflow-x: auto;"><code>$1</code></pre>',
	);

	return formatted;
}

// 格式化时间戳
function formatTimestamp(timestamp) {
	const date = new Date(timestamp);
	const hours = date.getHours().toString().padStart(2, '0');
	const minutes = date.getMinutes().toString().padStart(2, '0');
	return `${hours}:${minutes}`;
}

// 生成消息ID
function generateMessageId() {
	return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// 滚动到底部
function scrollToBottom() {
	elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
}

// 更新连接状态
function updateStatus(status) {
	const statusMap = {
		online: { class: 'online', text: '已连接' },
		offline: { class: 'offline', text: '未连接' },
		error: { class: 'error', text: '连接错误' },
	};

	const statusInfo = statusMap[status] || statusMap.offline;

	elements.statusDot.className = `status-dot ${statusInfo.class}`;
	elements.statusText.textContent = statusInfo.text;
	state.isConnected = status === 'online';
}

/**
 * 发送消息到后端插件
 * 这是前端与后端通信的唯一入口
 * @param {Object} message - 消息对象,格式: {type: string, data?: any}
 */
function sendMessageToPlugin(message) {
	console.log('[IFrame] Sending message to plugin:', message.type);

	// 尝试使用消息总线发送消息
	try {
		if (window.eda && window.eda.sys_MessageBus) {
			console.log('[IFrame] Using message bus');
			let r = window.eda.sys_MessageBus.publishPublic('coze_ai_plugin_message', message);
			console.log('[IFrame] publishPublic result', r);
			return;
		}
	} catch (error) {
		console.warn('[IFrame] Failed to use message bus, using postMessage:', error);
	}

	// 备用方案：发送到父窗口(插件主进程)
	console.log('[IFrame] 备用方案：发送到父窗口');
	window.parent.postMessage(message, '*');
}

// 添加欢迎消息
function addWelcomeMessage() {
	const welcomeMessage = {
		id: generateMessageId(),
		role: 'assistant',
		content_type: 'text',
		content: '你好!我是扣子AI电路设计助手。我可以帮您通过自然语言在嘉立创EDA中完成电路设计任务。',
		timestamp: Date.now(),
	};

	addMessageToUI(welcomeMessage);

	// 添加建议按钮
	const suggestionsElement = document.createElement('div');
	suggestionsElement.className = 'message-suggestions';
	suggestionsElement.innerHTML = `
        <div class="suggestion-item" onclick="handleSuggestion('create_project')">📝 创建新项目</div>
        <div class="suggestion-item" onclick="handleSuggestion('search_device')">🔍 搜索器件</div>
        <div class="suggestion-item" onclick="handleSuggestion('add_component')">⚡ 添加器件</div>
    `;

	const lastMessage = elements.chatMessages.lastElementChild;
	if (lastMessage) {
		const contentDiv = lastMessage.querySelector('.message-content');
		if (contentDiv) {
			contentDiv.appendChild(suggestionsElement);
		}
	}
}

// 处理建议点击
window.handleSuggestion = function (type) {
	const suggestions = {
		create_project: '帮我创建一个新项目',
		search_device: '帮我搜索Arduino主控芯片',
		add_component: '帮我添加一个ATmega328P器件',
	};

	elements.messageInput.value = suggestions[type];
	handleInputChange();
	elements.messageInput.focus();
};
