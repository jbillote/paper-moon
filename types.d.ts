declare namespace JSX {
  interface HtmlTag {
    // AJAX
    'hx-get'?: ExtractRoutes<'get'>
    'hx-post'?: ExtractRoutes<'post'>
    'hx-put'?: ExtractRoutes<'put'>
    'hx-patch'?: ExtractRoutes<'patch'>
    'hx-delete'?: ExtractRoutes<'delete'>
    // Core
    'hx-boost'?: string
    'hx-push-url'?: string
    'hx-select'?: string
    'hx-select-oob'?: string
    'hx-swap'?: string
    'hx-swap-oob'?: string
    'hx-target'?: string
    'hx-trigger'?: string
    'hx-vals'?: string
    // Additional
    'hx-confirm'?: string
    'hx-disable'?: boolean
    'hx-disinherit'?: string
    'hx-encoding'?: string
    'hx-ext'?: string
    'hx-headers'?: string
    'hx-history'?: 'false'
    'hx-history-elt'?: boolean
    'hx-include'?: string
    'hx-indicator'?: string
    'hx-params'?: string
    'hx-preserve'?: boolean
    'hx-prompt'?: string
    'hx-replace-url'?: string
    'hx-request'?: string
    'sse-connect'?: string
    'sse-swap'?: string
    'hx-sync'?: string
    'hx-validate'?: boolean
    'hx-vars'?: string
    'ws-connect'?: string
    'ws-send'?: string

    // Custom, used for hx-include selection
    param?
  }
}
