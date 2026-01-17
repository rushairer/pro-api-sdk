# SYS_ClientUrl

## 概述

系统 / 外部请求类

## 备注

> 向外部服务器发起安全的 cURL 请求

## 方法列表

| 方法名                | 说明         |
| --------------------- | ------------ |
| [`request`](#request) | 发起即时请求 |

---

## 方法详情

### request

发起即时请求
请注意，需要在被请求的站点上允许跨源资源共享（CORS），否则接口将始终返回错误结果。
更多信息，请查阅 {@link https://developer.mozilla.org/docs/Web/HTTP/CORS | 跨源资源共享 (CORS) - MDN}。
注意：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`

**方法签名:**

```typescript
request(url: string, method?: 'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'PATCH', data?: string | Blob | FormData | URLSearchParams, options?: { headers?: { [header: string]: any
```

**参数:**

| 参数名        | 类型 | 描述                                                                                               |
| ------------- | ---- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| url           |      | 请求地址                                                                                           |
| method        |      | 请求方法                                                                                           |
| data          |      | 请求发送的数据，可以是直接数据或 {@link https://developer.mozilla.org/docs/Web/API/URLSearchParams | URLSearchParams} 对象，如果 method 为 `HEAD` 或 `GET`，本参数将被忽略 |
| options       |      | 请求参数                                                                                           |
| succeedCallFn |      | 请求成功后回调的函数                                                                               |

**返回值:**

Fetch 的返回结果
