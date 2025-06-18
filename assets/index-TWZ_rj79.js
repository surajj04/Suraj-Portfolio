;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
  new MutationObserver(i => {
    for (const o of i)
      if (o.type === 'childList')
        for (const s of o.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s)
  }).observe(document, { childList: !0, subtree: !0 })
  function n (i) {
    const o = {}
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    )
  }
  function r (i) {
    if (i.ep) return
    i.ep = !0
    const o = n(i)
    fetch(i.href, o)
  }
})()
var Md = { exports: {} },
  yo = {},
  Ld = { exports: {} },
  R = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gr = Symbol.for('react.element'),
  xm = Symbol.for('react.portal'),
  wm = Symbol.for('react.fragment'),
  Sm = Symbol.for('react.strict_mode'),
  km = Symbol.for('react.profiler'),
  Pm = Symbol.for('react.provider'),
  Tm = Symbol.for('react.context'),
  Cm = Symbol.for('react.forward_ref'),
  Em = Symbol.for('react.suspense'),
  Am = Symbol.for('react.memo'),
  Vm = Symbol.for('react.lazy'),
  iu = Symbol.iterator
function Nm (e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (iu && e[iu]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var Dd = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  jd = Object.assign,
  Rd = {}
function Gn (e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Rd),
    (this.updater = n || Dd)
}
Gn.prototype.isReactComponent = {}
Gn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
Gn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function _d () {}
_d.prototype = Gn.prototype
function jl (e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Rd),
    (this.updater = n || Dd)
}
var Rl = (jl.prototype = new _d())
Rl.constructor = jl
jd(Rl, Gn.prototype)
Rl.isPureReactComponent = !0
var ou = Array.isArray,
  Fd = Object.prototype.hasOwnProperty,
  _l = { current: null },
  Od = { key: !0, ref: !0, __self: !0, __source: !0 }
function Id (e, t, n) {
  var r,
    i = {},
    o = null,
    s = null
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      Fd.call(t, r) && !Od.hasOwnProperty(r) && (i[r] = t[r])
  var l = arguments.length - 2
  if (l === 1) i.children = n
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2]
    i.children = a
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r])
  return { $$typeof: Gr, type: e, key: o, ref: s, props: i, _owner: _l.current }
}
function Mm (e, t) {
  return {
    $$typeof: Gr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  }
}
function Fl (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Gr
}
function Lm (e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var su = /\/+/g
function Bo (e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Lm('' + e.key)
    : t.toString(36)
}
function Ti (e, t, n, r, i) {
  var o = typeof e
  ;(o === 'undefined' || o === 'boolean') && (e = null)
  var s = !1
  if (e === null) s = !0
  else
    switch (o) {
      case 'string':
      case 'number':
        s = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case Gr:
          case xm:
            s = !0
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === '' ? '.' + Bo(s, 0) : r),
      ou(i)
        ? ((n = ''),
          e != null && (n = e.replace(su, '$&/') + '/'),
          Ti(i, t, n, '', function (u) {
            return u
          }))
        : i != null &&
          (Fl(i) &&
            (i = Mm(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ''
                  : ('' + i.key).replace(su, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    )
  if (((s = 0), (r = r === '' ? '.' : r + ':'), ou(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l]
      var a = r + Bo(o, l)
      s += Ti(o, t, n, a, i)
    }
  else if (((a = Nm(e)), typeof a == 'function'))
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Bo(o, l++)), (s += Ti(o, t, n, a, i))
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return s
}
function ri (e, t, n) {
  if (e == null) return e
  var r = [],
    i = 0
  return (
    Ti(e, r, '', '', function (o) {
      return t.call(n, o, i++)
    }),
    r
  )
}
function Dm (e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n))
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var xe = { current: null },
  Ci = { transition: null },
  jm = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: Ci,
    ReactCurrentOwner: _l
  }
function zd () {
  throw Error('act(...) is not supported in production builds of React.')
}
R.Children = {
  map: ri,
  forEach: function (e, t, n) {
    ri(
      e,
      function () {
        t.apply(this, arguments)
      },
      n
    )
  },
  count: function (e) {
    var t = 0
    return (
      ri(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      ri(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Fl(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return e
  }
}
R.Component = Gn
R.Fragment = wm
R.Profiler = km
R.PureComponent = jl
R.StrictMode = Sm
R.Suspense = Em
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jm
R.act = zd
R.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    )
  var r = jd({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = _l.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps
    for (a in t)
      Fd.call(t, a) &&
        !Od.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
  }
  var a = arguments.length - 2
  if (a === 1) r.children = n
  else if (1 < a) {
    l = Array(a)
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2]
    r.children = l
  }
  return { $$typeof: Gr, type: e.type, key: i, ref: o, props: r, _owner: s }
}
R.createContext = function (e) {
  return (
    (e = {
      $$typeof: Tm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }),
    (e.Provider = { $$typeof: Pm, _context: e }),
    (e.Consumer = e)
  )
}
R.createElement = Id
R.createFactory = function (e) {
  var t = Id.bind(null, e)
  return (t.type = e), t
}
R.createRef = function () {
  return { current: null }
}
R.forwardRef = function (e) {
  return { $$typeof: Cm, render: e }
}
R.isValidElement = Fl
R.lazy = function (e) {
  return { $$typeof: Vm, _payload: { _status: -1, _result: e }, _init: Dm }
}
R.memo = function (e, t) {
  return { $$typeof: Am, type: e, compare: t === void 0 ? null : t }
}
R.startTransition = function (e) {
  var t = Ci.transition
  Ci.transition = {}
  try {
    e()
  } finally {
    Ci.transition = t
  }
}
R.unstable_act = zd
R.useCallback = function (e, t) {
  return xe.current.useCallback(e, t)
}
R.useContext = function (e) {
  return xe.current.useContext(e)
}
R.useDebugValue = function () {}
R.useDeferredValue = function (e) {
  return xe.current.useDeferredValue(e)
}
R.useEffect = function (e, t) {
  return xe.current.useEffect(e, t)
}
R.useId = function () {
  return xe.current.useId()
}
R.useImperativeHandle = function (e, t, n) {
  return xe.current.useImperativeHandle(e, t, n)
}
R.useInsertionEffect = function (e, t) {
  return xe.current.useInsertionEffect(e, t)
}
R.useLayoutEffect = function (e, t) {
  return xe.current.useLayoutEffect(e, t)
}
R.useMemo = function (e, t) {
  return xe.current.useMemo(e, t)
}
R.useReducer = function (e, t, n) {
  return xe.current.useReducer(e, t, n)
}
R.useRef = function (e) {
  return xe.current.useRef(e)
}
R.useState = function (e) {
  return xe.current.useState(e)
}
R.useSyncExternalStore = function (e, t, n) {
  return xe.current.useSyncExternalStore(e, t, n)
}
R.useTransition = function () {
  return xe.current.useTransition()
}
R.version = '18.3.1'
Ld.exports = R
var D = Ld.exports
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rm = D,
  _m = Symbol.for('react.element'),
  Fm = Symbol.for('react.fragment'),
  Om = Object.prototype.hasOwnProperty,
  Im = Rm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  zm = { key: !0, ref: !0, __self: !0, __source: !0 }
function Bd (e, t, n) {
  var r,
    i = {},
    o = null,
    s = null
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (s = t.ref)
  for (r in t) Om.call(t, r) && !zm.hasOwnProperty(r) && (i[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r])
  return { $$typeof: _m, type: e, key: o, ref: s, props: i, _owner: Im.current }
}
yo.Fragment = Fm
yo.jsx = Bd
yo.jsxs = Bd
Md.exports = yo
var w = Md.exports,
  Ud = { exports: {} },
  Le = {},
  $d = { exports: {} },
  Wd = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t (E, L) {
    var j = E.length
    E.push(L)
    e: for (; 0 < j; ) {
      var Y = (j - 1) >>> 1,
        re = E[Y]
      if (0 < i(re, L)) (E[Y] = L), (E[j] = re), (j = Y)
      else break e
    }
  }
  function n (E) {
    return E.length === 0 ? null : E[0]
  }
  function r (E) {
    if (E.length === 0) return null
    var L = E[0],
      j = E.pop()
    if (j !== L) {
      E[0] = j
      e: for (var Y = 0, re = E.length, ti = re >>> 1; Y < ti; ) {
        var Ht = 2 * (Y + 1) - 1,
          zo = E[Ht],
          Kt = Ht + 1,
          ni = E[Kt]
        if (0 > i(zo, j))
          Kt < re && 0 > i(ni, zo)
            ? ((E[Y] = ni), (E[Kt] = j), (Y = Kt))
            : ((E[Y] = zo), (E[Ht] = j), (Y = Ht))
        else if (Kt < re && 0 > i(ni, j)) (E[Y] = ni), (E[Kt] = j), (Y = Kt)
        else break e
      }
    }
    return L
  }
  function i (E, L) {
    var j = E.sortIndex - L.sortIndex
    return j !== 0 ? j : E.id - L.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance
    e.unstable_now = function () {
      return o.now()
    }
  } else {
    var s = Date,
      l = s.now()
    e.unstable_now = function () {
      return s.now() - l
    }
  }
  var a = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    g = !1,
    y = !1,
    v = !1,
    P = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function m (E) {
    for (var L = n(u); L !== null; ) {
      if (L.callback === null) r(u)
      else if (L.startTime <= E) r(u), (L.sortIndex = L.expirationTime), t(a, L)
      else break
      L = n(u)
    }
  }
  function x (E) {
    if (((v = !1), m(E), !y))
      if (n(a) !== null) (y = !0), ei(S)
      else {
        var L = n(u)
        L !== null && q(x, L.startTime - E)
      }
  }
  function S (E, L) {
    ;(y = !1), v && ((v = !1), p(T), (T = -1)), (g = !0)
    var j = f
    try {
      for (
        m(L), d = n(a);
        d !== null && (!(d.expirationTime > L) || (E && !ne()));

      ) {
        var Y = d.callback
        if (typeof Y == 'function') {
          ;(d.callback = null), (f = d.priorityLevel)
          var re = Y(d.expirationTime <= L)
          ;(L = e.unstable_now()),
            typeof re == 'function' ? (d.callback = re) : d === n(a) && r(a),
            m(L)
        } else r(a)
        d = n(a)
      }
      if (d !== null) var ti = !0
      else {
        var Ht = n(u)
        Ht !== null && q(x, Ht.startTime - L), (ti = !1)
      }
      return ti
    } finally {
      ;(d = null), (f = j), (g = !1)
    }
  }
  var C = !1,
    A = null,
    T = -1,
    _ = 5,
    M = -1
  function ne () {
    return !(e.unstable_now() - M < _)
  }
  function gt () {
    if (A !== null) {
      var E = e.unstable_now()
      M = E
      var L = !0
      try {
        L = A(!0, E)
      } finally {
        L ? Wt() : ((C = !1), (A = null))
      }
    } else C = !1
  }
  var Wt
  if (typeof h == 'function')
    Wt = function () {
      h(gt)
    }
  else if (typeof MessageChannel < 'u') {
    var Xn = new MessageChannel(),
      ru = Xn.port2
    ;(Xn.port1.onmessage = gt),
      (Wt = function () {
        ru.postMessage(null)
      })
  } else
    Wt = function () {
      P(gt, 0)
    }
  function ei (E) {
    ;(A = E), C || ((C = !0), Wt())
  }
  function q (E, L) {
    T = P(function () {
      E(e.unstable_now())
    }, L)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), ei(S))
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (_ = 0 < E ? Math.floor(1e3 / E) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a)
    }),
    (e.unstable_next = function (E) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var L = 3
          break
        default:
          L = f
      }
      var j = f
      f = L
      try {
        return E()
      } finally {
        f = j
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, L) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          E = 3
      }
      var j = f
      f = E
      try {
        return L()
      } finally {
        f = j
      }
    }),
    (e.unstable_scheduleCallback = function (E, L, j) {
      var Y = e.unstable_now()
      switch (
        (typeof j == 'object' && j !== null
          ? ((j = j.delay), (j = typeof j == 'number' && 0 < j ? Y + j : Y))
          : (j = Y),
        E)
      ) {
        case 1:
          var re = -1
          break
        case 2:
          re = 250
          break
        case 5:
          re = 1073741823
          break
        case 4:
          re = 1e4
          break
        default:
          re = 5e3
      }
      return (
        (re = j + re),
        (E = {
          id: c++,
          callback: L,
          priorityLevel: E,
          startTime: j,
          expirationTime: re,
          sortIndex: -1
        }),
        j > Y
          ? ((E.sortIndex = j),
            t(u, E),
            n(a) === null &&
              E === n(u) &&
              (v ? (p(T), (T = -1)) : (v = !0), q(x, j - Y)))
          : ((E.sortIndex = re), t(a, E), y || g || ((y = !0), ei(S))),
        E
      )
    }),
    (e.unstable_shouldYield = ne),
    (e.unstable_wrapCallback = function (E) {
      var L = f
      return function () {
        var j = f
        f = L
        try {
          return E.apply(this, arguments)
        } finally {
          f = j
        }
      }
    })
})(Wd)
$d.exports = Wd
var Bm = $d.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Um = D,
  Ne = Bm
function k (e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var Hd = new Set(),
  Tr = {}
function cn (e, t) {
  Fn(e, t), Fn(e + 'Capture', t)
}
function Fn (e, t) {
  for (Tr[e] = t, e = 0; e < t.length; e++) Hd.add(t[e])
}
var dt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Cs = Object.prototype.hasOwnProperty,
  $m =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  lu = {},
  au = {}
function Wm (e) {
  return Cs.call(au, e)
    ? !0
    : Cs.call(lu, e)
    ? !1
    : $m.test(e)
    ? (au[e] = !0)
    : ((lu[e] = !0), !1)
}
function Hm (e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function Km (e, t, n, r) {
  if (t === null || typeof t > 'u' || Hm(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function we (e, t, n, r, i, o, s) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s)
}
var ue = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    ue[e] = new we(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv']
].forEach(function (e) {
  var t = e[0]
  ue[t] = new we(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  ue[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha'
].forEach(function (e) {
  ue[e] = new we(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    ue[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  ue[e] = new we(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  ue[e] = new we(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  ue[e] = new we(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  ue[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Ol = /[\-:]([a-z])/g
function Il (e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ol, Il)
    ue[t] = new we(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ol, Il)
    ue[t] = new we(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Ol, Il)
  ue[t] = new we(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  ue[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
ue.xlinkHref = new we(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  ue[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function zl (e, t, n, r) {
  var i = ue.hasOwnProperty(t) ? ue[t] : null
  ;(i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Km(t, n, i, r) && (n = null),
    r || i === null
      ? Wm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var mt = Um.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ii = Symbol.for('react.element'),
  hn = Symbol.for('react.portal'),
  pn = Symbol.for('react.fragment'),
  Bl = Symbol.for('react.strict_mode'),
  Es = Symbol.for('react.profiler'),
  Kd = Symbol.for('react.provider'),
  Gd = Symbol.for('react.context'),
  Ul = Symbol.for('react.forward_ref'),
  As = Symbol.for('react.suspense'),
  Vs = Symbol.for('react.suspense_list'),
  $l = Symbol.for('react.memo'),
  xt = Symbol.for('react.lazy'),
  bd = Symbol.for('react.offscreen'),
  uu = Symbol.iterator
function Zn (e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (uu && e[uu]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var b = Object.assign,
  Uo
function sr (e) {
  if (Uo === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      Uo = (t && t[1]) || ''
    }
  return (
    `
` +
    Uo +
    e
  )
}
var $o = !1
function Wo (e, t) {
  if (!e || $o) return ''
  $o = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          }
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var r = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          r = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      e()
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var a =
                  `
` + i[s].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                )
              }
            while (1 <= s && 0 <= l)
          break
        }
    }
  } finally {
    ;($o = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? sr(e) : ''
}
function Gm (e) {
  switch (e.tag) {
    case 5:
      return sr(e.type)
    case 16:
      return sr('Lazy')
    case 13:
      return sr('Suspense')
    case 19:
      return sr('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = Wo(e.type, !1)), e
    case 11:
      return (e = Wo(e.type.render, !1)), e
    case 1:
      return (e = Wo(e.type, !0)), e
    default:
      return ''
  }
}
function Ns (e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case pn:
      return 'Fragment'
    case hn:
      return 'Portal'
    case Es:
      return 'Profiler'
    case Bl:
      return 'StrictMode'
    case As:
      return 'Suspense'
    case Vs:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Gd:
        return (e.displayName || 'Context') + '.Consumer'
      case Kd:
        return (e._context.displayName || 'Context') + '.Provider'
      case Ul:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case $l:
        return (
          (t = e.displayName || null), t !== null ? t : Ns(e.type) || 'Memo'
        )
      case xt:
        ;(t = e._payload), (e = e._init)
        try {
          return Ns(e(t))
        } catch {}
    }
  return null
}
function bm (e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return Ns(t)
    case 8:
      return t === Bl ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function jt (e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function Qd (e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function Qm (e) {
  var t = Qd(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      o = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this)
        },
        set: function (s) {
          ;(r = '' + s), o.call(this, s)
        }
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (s) {
          r = '' + s
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        }
      }
    )
  }
}
function oi (e) {
  e._valueTracker || (e._valueTracker = Qm(e))
}
function Yd (e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = Qd(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function zi (e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function Ms (e, t) {
  var n = t.checked
  return b({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked
  })
}
function cu (e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = jt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null
    })
}
function Xd (e, t) {
  ;(t = t.checked), t != null && zl(e, 'checked', t, !1)
}
function Ls (e, t) {
  Xd(e, t)
  var n = jt(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? Ds(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Ds(e, t.type, jt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function du (e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return
    ;(t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function Ds (e, t, n) {
  ;(t !== 'number' || zi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var lr = Array.isArray
function Mn (e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + jt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ;(e[i].selected = !0), r && (e[i].defaultSelected = !0)
        return
      }
      t !== null || e[i].disabled || (t = e[i])
    }
    t !== null && (t.selected = !0)
  }
}
function js (e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91))
  return b({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue
  })
}
function fu (e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92))
      if (lr(n)) {
        if (1 < n.length) throw Error(k(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: jt(n) }
}
function Zd (e, t) {
  var n = jt(t.value),
    r = jt(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function hu (e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function Jd (e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function Rs (e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Jd(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var si,
  qd = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        si = si || document.createElement('div'),
          si.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = si.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Cr (e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var fr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  Ym = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(fr).forEach(function (e) {
  Ym.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (fr[t] = fr[e])
  })
})
function ef (e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (fr.hasOwnProperty(e) && fr[e])
    ? ('' + t).trim()
    : t + 'px'
}
function tf (e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = ef(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i)
    }
}
var Xm = b(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  }
)
function _s (e, t) {
  if (t) {
    if (Xm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(k(62))
  }
}
function Fs (e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var Os = null
function Wl (e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var Is = null,
  Ln = null,
  Dn = null
function pu (e) {
  if ((e = Yr(e))) {
    if (typeof Is != 'function') throw Error(k(280))
    var t = e.stateNode
    t && ((t = ko(t)), Is(e.stateNode, e.type, t))
  }
}
function nf (e) {
  Ln ? (Dn ? Dn.push(e) : (Dn = [e])) : (Ln = e)
}
function rf () {
  if (Ln) {
    var e = Ln,
      t = Dn
    if (((Dn = Ln = null), pu(e), t)) for (e = 0; e < t.length; e++) pu(t[e])
  }
}
function of (e, t) {
  return e(t)
}
function sf () {}
var Ho = !1
function lf (e, t, n) {
  if (Ho) return e(t, n)
  Ho = !0
  try {
    return of(e, t, n)
  } finally {
    ;(Ho = !1), (Ln !== null || Dn !== null) && (sf(), rf())
  }
}
function Er (e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = ko(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(k(231, t, typeof n))
  return n
}
var zs = !1
if (dt)
  try {
    var Jn = {}
    Object.defineProperty(Jn, 'passive', {
      get: function () {
        zs = !0
      }
    }),
      window.addEventListener('test', Jn, Jn),
      window.removeEventListener('test', Jn, Jn)
  } catch {
    zs = !1
  }
function Zm (e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, u)
  } catch (c) {
    this.onError(c)
  }
}
var hr = !1,
  Bi = null,
  Ui = !1,
  Bs = null,
  Jm = {
    onError: function (e) {
      ;(hr = !0), (Bi = e)
    }
  }
function qm (e, t, n, r, i, o, s, l, a) {
  ;(hr = !1), (Bi = null), Zm.apply(Jm, arguments)
}
function e0 (e, t, n, r, i, o, s, l, a) {
  if ((qm.apply(this, arguments), hr)) {
    if (hr) {
      var u = Bi
      ;(hr = !1), (Bi = null)
    } else throw Error(k(198))
    Ui || ((Ui = !0), (Bs = u))
  }
}
function dn (e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function af (e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated
  }
  return null
}
function mu (e) {
  if (dn(e) !== e) throw Error(k(188))
}
function t0 (e) {
  var t = e.alternate
  if (!t) {
    if (((t = dn(e)), t === null)) throw Error(k(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var i = n.return
    if (i === null) break
    var o = i.alternate
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return mu(i), e
        if (o === r) return mu(i), t
        o = o.sibling
      }
      throw Error(k(188))
    }
    if (n.return !== r.return) (n = i), (r = o)
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          ;(s = !0), (n = i), (r = o)
          break
        }
        if (l === r) {
          ;(s = !0), (r = i), (n = o)
          break
        }
        l = l.sibling
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            ;(s = !0), (n = o), (r = i)
            break
          }
          if (l === r) {
            ;(s = !0), (r = o), (n = i)
            break
          }
          l = l.sibling
        }
        if (!s) throw Error(k(189))
      }
    }
    if (n.alternate !== r) throw Error(k(190))
  }
  if (n.tag !== 3) throw Error(k(188))
  return n.stateNode.current === n ? e : t
}
function uf (e) {
  return (e = t0(e)), e !== null ? cf(e) : null
}
function cf (e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = cf(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var df = Ne.unstable_scheduleCallback,
  gu = Ne.unstable_cancelCallback,
  n0 = Ne.unstable_shouldYield,
  r0 = Ne.unstable_requestPaint,
  Z = Ne.unstable_now,
  i0 = Ne.unstable_getCurrentPriorityLevel,
  Hl = Ne.unstable_ImmediatePriority,
  ff = Ne.unstable_UserBlockingPriority,
  $i = Ne.unstable_NormalPriority,
  o0 = Ne.unstable_LowPriority,
  hf = Ne.unstable_IdlePriority,
  vo = null,
  Ze = null
function s0 (e) {
  if (Ze && typeof Ze.onCommitFiberRoot == 'function')
    try {
      Ze.onCommitFiberRoot(vo, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Ke = Math.clz32 ? Math.clz32 : u0,
  l0 = Math.log,
  a0 = Math.LN2
function u0 (e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((l0(e) / a0) | 0)) | 0
}
var li = 64,
  ai = 4194304
function ar (e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function Wi (e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455
  if (s !== 0) {
    var l = s & ~i
    l !== 0 ? (r = ar(l)) : ((o &= s), o !== 0 && (r = ar(o)))
  } else (s = n & ~i), s !== 0 ? (r = ar(s)) : o !== 0 && (r = ar(o))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ke(t)), (i = 1 << n), (r |= e[n]), (t &= ~i)
  return r
}
function c0 (e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function d0 (e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Ke(o),
      l = 1 << s,
      a = i[s]
    a === -1
      ? (!(l & n) || l & r) && (i[s] = c0(l, t))
      : a <= t && (e.expiredLanes |= l),
      (o &= ~l)
  }
}
function Us (e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function pf () {
  var e = li
  return (li <<= 1), !(li & 4194240) && (li = 64), e
}
function Ko (e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function br (e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ke(t)),
    (e[t] = n)
}
function f0 (e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ke(n),
      o = 1 << i
    ;(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o)
  }
}
function Kl (e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - Ke(n),
      i = 1 << r
    ;(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i)
  }
}
var I = 0
function mf (e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var gf,
  Gl,
  yf,
  vf,
  xf,
  $s = !1,
  ui = [],
  Ct = null,
  Et = null,
  At = null,
  Ar = new Map(),
  Vr = new Map(),
  St = [],
  h0 =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function yu (e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Ct = null
      break
    case 'dragenter':
    case 'dragleave':
      Et = null
      break
    case 'mouseover':
    case 'mouseout':
      At = null
      break
    case 'pointerover':
    case 'pointerout':
      Ar.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Vr.delete(t.pointerId)
  }
}
function qn (e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
      }),
      t !== null && ((t = Yr(t)), t !== null && Gl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e)
}
function p0 (e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (Ct = qn(Ct, e, t, n, r, i)), !0
    case 'dragenter':
      return (Et = qn(Et, e, t, n, r, i)), !0
    case 'mouseover':
      return (At = qn(At, e, t, n, r, i)), !0
    case 'pointerover':
      var o = i.pointerId
      return Ar.set(o, qn(Ar.get(o) || null, e, t, n, r, i)), !0
    case 'gotpointercapture':
      return (
        (o = i.pointerId), Vr.set(o, qn(Vr.get(o) || null, e, t, n, r, i)), !0
      )
  }
  return !1
}
function wf (e) {
  var t = Zt(e.target)
  if (t !== null) {
    var n = dn(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = af(n)), t !== null)) {
          ;(e.blockedOn = t),
            xf(e.priority, function () {
              yf(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function Ei (e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ws(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(Os = r), n.target.dispatchEvent(r), (Os = null)
    } else return (t = Yr(n)), t !== null && Gl(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function vu (e, t, n) {
  Ei(e) && n.delete(t)
}
function m0 () {
  ;($s = !1),
    Ct !== null && Ei(Ct) && (Ct = null),
    Et !== null && Ei(Et) && (Et = null),
    At !== null && Ei(At) && (At = null),
    Ar.forEach(vu),
    Vr.forEach(vu)
}
function er (e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    $s ||
      (($s = !0), Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, m0)))
}
function Nr (e) {
  function t (i) {
    return er(i, e)
  }
  if (0 < ui.length) {
    er(ui[0], e)
    for (var n = 1; n < ui.length; n++) {
      var r = ui[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    Ct !== null && er(Ct, e),
      Et !== null && er(Et, e),
      At !== null && er(At, e),
      Ar.forEach(t),
      Vr.forEach(t),
      n = 0;
    n < St.length;
    n++
  )
    (r = St[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < St.length && ((n = St[0]), n.blockedOn === null); )
    wf(n), n.blockedOn === null && St.shift()
}
var jn = mt.ReactCurrentBatchConfig,
  Hi = !0
function g0 (e, t, n, r) {
  var i = I,
    o = jn.transition
  jn.transition = null
  try {
    ;(I = 1), bl(e, t, n, r)
  } finally {
    ;(I = i), (jn.transition = o)
  }
}
function y0 (e, t, n, r) {
  var i = I,
    o = jn.transition
  jn.transition = null
  try {
    ;(I = 4), bl(e, t, n, r)
  } finally {
    ;(I = i), (jn.transition = o)
  }
}
function bl (e, t, n, r) {
  if (Hi) {
    var i = Ws(e, t, n, r)
    if (i === null) ts(e, t, r, Ki, n), yu(e, r)
    else if (p0(i, e, t, n, r)) r.stopPropagation()
    else if ((yu(e, r), t & 4 && -1 < h0.indexOf(e))) {
      for (; i !== null; ) {
        var o = Yr(i)
        if (
          (o !== null && gf(o),
          (o = Ws(e, t, n, r)),
          o === null && ts(e, t, r, Ki, n),
          o === i)
        )
          break
        i = o
      }
      i !== null && r.stopPropagation()
    } else ts(e, t, r, null, n)
  }
}
var Ki = null
function Ws (e, t, n, r) {
  if (((Ki = null), (e = Wl(r)), (e = Zt(e)), e !== null))
    if (((t = dn(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = af(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Ki = e), null
}
function Sf (e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (i0()) {
        case Hl:
          return 1
        case ff:
          return 4
        case $i:
        case o0:
          return 16
        case hf:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Pt = null,
  Ql = null,
  Ai = null
function kf () {
  if (Ai) return Ai
  var e,
    t = Ql,
    n = t.length,
    r,
    i = 'value' in Pt ? Pt.value : Pt.textContent,
    o = i.length
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Ai = i.slice(e, 1 < r ? 1 - r : void 0))
}
function Vi (e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function ci () {
  return !0
}
function xu () {
  return !1
}
function De (e) {
  function t (n, r, i, o, s) {
    ;(this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null)
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]))
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ci
        : xu),
      (this.isPropagationStopped = xu),
      this
    )
  }
  return (
    b(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = ci))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = ci))
      },
      persist: function () {},
      isPersistent: ci
    }),
    t
  )
}
var bn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  Yl = De(bn),
  Qr = b({}, bn, { view: 0, detail: 0 }),
  v0 = De(Qr),
  Go,
  bo,
  tr,
  xo = b({}, Qr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Xl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== tr &&
            (tr && e.type === 'mousemove'
              ? ((Go = e.screenX - tr.screenX), (bo = e.screenY - tr.screenY))
              : (bo = Go = 0),
            (tr = e)),
          Go)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : bo
    }
  }),
  wu = De(xo),
  x0 = b({}, xo, { dataTransfer: 0 }),
  w0 = De(x0),
  S0 = b({}, Qr, { relatedTarget: 0 }),
  Qo = De(S0),
  k0 = b({}, bn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  P0 = De(k0),
  T0 = b({}, bn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    }
  }),
  C0 = De(T0),
  E0 = b({}, bn, { data: 0 }),
  Su = De(E0),
  A0 = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified'
  },
  V0 = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta'
  },
  N0 = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function M0 (e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = N0[e]) ? !!t[e] : !1
}
function Xl () {
  return M0
}
var L0 = b({}, Qr, {
    key: function (e) {
      if (e.key) {
        var t = A0[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = Vi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? V0[e.keyCode] || 'Unidentified'
        : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Xl,
    charCode: function (e) {
      return e.type === 'keypress' ? Vi(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Vi(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    }
  }),
  D0 = De(L0),
  j0 = b({}, xo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  ku = De(j0),
  R0 = b({}, Qr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Xl
  }),
  _0 = De(R0),
  F0 = b({}, bn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  O0 = De(F0),
  I0 = b({}, xo, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  z0 = De(I0),
  B0 = [9, 13, 27, 32],
  Zl = dt && 'CompositionEvent' in window,
  pr = null
dt && 'documentMode' in document && (pr = document.documentMode)
var U0 = dt && 'TextEvent' in window && !pr,
  Pf = dt && (!Zl || (pr && 8 < pr && 11 >= pr)),
  Pu = ' ',
  Tu = !1
function Tf (e, t) {
  switch (e) {
    case 'keyup':
      return B0.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function Cf (e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var mn = !1
function $0 (e, t) {
  switch (e) {
    case 'compositionend':
      return Cf(t)
    case 'keypress':
      return t.which !== 32 ? null : ((Tu = !0), Pu)
    case 'textInput':
      return (e = t.data), e === Pu && Tu ? null : e
    default:
      return null
  }
}
function W0 (e, t) {
  if (mn)
    return e === 'compositionend' || (!Zl && Tf(e, t))
      ? ((e = kf()), (Ai = Ql = Pt = null), (mn = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return Pf && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var H0 = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
}
function Cu (e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!H0[e.type] : t === 'textarea'
}
function Ef (e, t, n, r) {
  nf(r),
    (t = Gi(t, 'onChange')),
    0 < t.length &&
      ((n = new Yl('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var mr = null,
  Mr = null
function K0 (e) {
  Of(e, 0)
}
function wo (e) {
  var t = vn(e)
  if (Yd(t)) return e
}
function G0 (e, t) {
  if (e === 'change') return t
}
var Af = !1
if (dt) {
  var Yo
  if (dt) {
    var Xo = 'oninput' in document
    if (!Xo) {
      var Eu = document.createElement('div')
      Eu.setAttribute('oninput', 'return;'),
        (Xo = typeof Eu.oninput == 'function')
    }
    Yo = Xo
  } else Yo = !1
  Af = Yo && (!document.documentMode || 9 < document.documentMode)
}
function Au () {
  mr && (mr.detachEvent('onpropertychange', Vf), (Mr = mr = null))
}
function Vf (e) {
  if (e.propertyName === 'value' && wo(Mr)) {
    var t = []
    Ef(t, Mr, e, Wl(e)), lf(K0, t)
  }
}
function b0 (e, t, n) {
  e === 'focusin'
    ? (Au(), (mr = t), (Mr = n), mr.attachEvent('onpropertychange', Vf))
    : e === 'focusout' && Au()
}
function Q0 (e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return wo(Mr)
}
function Y0 (e, t) {
  if (e === 'click') return wo(t)
}
function X0 (e, t) {
  if (e === 'input' || e === 'change') return wo(t)
}
function Z0 (e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var be = typeof Object.is == 'function' ? Object.is : Z0
function Lr (e, t) {
  if (be(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var i = n[r]
    if (!Cs.call(t, i) || !be(e[i], t[i])) return !1
  }
  return !0
}
function Vu (e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function Nu (e, t) {
  var n = Vu(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = Vu(n)
  }
}
function Nf (e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Nf(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function Mf () {
  for (var e = window, t = zi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = zi(e.document)
  }
  return t
}
function Jl (e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function J0 (e) {
  var t = Mf(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Nf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Jl(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var i = n.textContent.length,
          o = Math.min(r.start, i)
        ;(r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Nu(n, o))
        var s = Nu(n, r)
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var q0 = dt && 'documentMode' in document && 11 >= document.documentMode,
  gn = null,
  Hs = null,
  gr = null,
  Ks = !1
function Mu (e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  Ks ||
    gn == null ||
    gn !== zi(r) ||
    ((r = gn),
    'selectionStart' in r && Jl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
        })),
    (gr && Lr(gr, r)) ||
      ((gr = r),
      (r = Gi(Hs, 'onSelect')),
      0 < r.length &&
        ((t = new Yl('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = gn))))
}
function di (e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var yn = {
    animationend: di('Animation', 'AnimationEnd'),
    animationiteration: di('Animation', 'AnimationIteration'),
    animationstart: di('Animation', 'AnimationStart'),
    transitionend: di('Transition', 'TransitionEnd')
  },
  Zo = {},
  Lf = {}
dt &&
  ((Lf = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete yn.animationend.animation,
    delete yn.animationiteration.animation,
    delete yn.animationstart.animation),
  'TransitionEvent' in window || delete yn.transitionend.transition)
function So (e) {
  if (Zo[e]) return Zo[e]
  if (!yn[e]) return e
  var t = yn[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in Lf) return (Zo[e] = t[n])
  return e
}
var Df = So('animationend'),
  jf = So('animationiteration'),
  Rf = So('animationstart'),
  _f = So('transitionend'),
  Ff = new Map(),
  Lu =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function It (e, t) {
  Ff.set(e, t), cn(t, [e])
}
for (var Jo = 0; Jo < Lu.length; Jo++) {
  var qo = Lu[Jo],
    eg = qo.toLowerCase(),
    tg = qo[0].toUpperCase() + qo.slice(1)
  It(eg, 'on' + tg)
}
It(Df, 'onAnimationEnd')
It(jf, 'onAnimationIteration')
It(Rf, 'onAnimationStart')
It('dblclick', 'onDoubleClick')
It('focusin', 'onFocus')
It('focusout', 'onBlur')
It(_f, 'onTransitionEnd')
Fn('onMouseEnter', ['mouseout', 'mouseover'])
Fn('onMouseLeave', ['mouseout', 'mouseover'])
Fn('onPointerEnter', ['pointerout', 'pointerover'])
Fn('onPointerLeave', ['pointerout', 'pointerover'])
cn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
cn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
cn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
cn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
cn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
cn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var ur =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  ng = new Set('cancel close invalid load scroll toggle'.split(' ').concat(ur))
function Du (e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), e0(r, t, void 0, e), (e.currentTarget = null)
}
function Of (e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event
    r = r.listeners
    e: {
      var o = void 0
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e
          Du(i, l, u), (o = a)
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== o && i.isPropagationStopped())
          )
            break e
          Du(i, l, u), (o = a)
        }
    }
  }
  if (Ui) throw ((e = Bs), (Ui = !1), (Bs = null), e)
}
function U (e, t) {
  var n = t[Xs]
  n === void 0 && (n = t[Xs] = new Set())
  var r = e + '__bubble'
  n.has(r) || (If(t, e, 2, !1), n.add(r))
}
function es (e, t, n) {
  var r = 0
  t && (r |= 4), If(n, e, r, t)
}
var fi = '_reactListening' + Math.random().toString(36).slice(2)
function Dr (e) {
  if (!e[fi]) {
    ;(e[fi] = !0),
      Hd.forEach(function (n) {
        n !== 'selectionchange' && (ng.has(n) || es(n, !1, e), es(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[fi] || ((t[fi] = !0), es('selectionchange', !1, t))
  }
}
function If (e, t, n, r) {
  switch (Sf(t)) {
    case 1:
      var i = g0
      break
    case 4:
      i = y0
      break
    default:
      i = bl
  }
  ;(n = i.bind(null, t, n, e)),
    (i = void 0),
    !zs ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1)
}
function ts (e, t, n, r, i) {
  var o = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var s = r.tag
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return
            s = s.return
          }
        for (; l !== null; ) {
          if (((s = Zt(l)), s === null)) return
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s
            continue e
          }
          l = l.parentNode
        }
      }
      r = r.return
    }
  lf(function () {
    var u = o,
      c = Wl(n),
      d = []
    e: {
      var f = Ff.get(e)
      if (f !== void 0) {
        var g = Yl,
          y = e
        switch (e) {
          case 'keypress':
            if (Vi(n) === 0) break e
          case 'keydown':
          case 'keyup':
            g = D0
            break
          case 'focusin':
            ;(y = 'focus'), (g = Qo)
            break
          case 'focusout':
            ;(y = 'blur'), (g = Qo)
            break
          case 'beforeblur':
          case 'afterblur':
            g = Qo
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = wu
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = w0
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = _0
            break
          case Df:
          case jf:
          case Rf:
            g = P0
            break
          case _f:
            g = O0
            break
          case 'scroll':
            g = v0
            break
          case 'wheel':
            g = z0
            break
          case 'copy':
          case 'cut':
          case 'paste':
            g = C0
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = ku
        }
        var v = (t & 4) !== 0,
          P = !v && e === 'scroll',
          p = v ? (f !== null ? f + 'Capture' : null) : f
        v = []
        for (var h = u, m; h !== null; ) {
          m = h
          var x = m.stateNode
          if (
            (m.tag === 5 &&
              x !== null &&
              ((m = x),
              p !== null && ((x = Er(h, p)), x != null && v.push(jr(h, x, m)))),
            P)
          )
            break
          h = h.return
        }
        0 < v.length &&
          ((f = new g(f, y, null, n, c)), d.push({ event: f, listeners: v }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          f &&
            n !== Os &&
            (y = n.relatedTarget || n.fromElement) &&
            (Zt(y) || y[ft]))
        )
          break e
        if (
          (g || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? Zt(y) : null),
              y !== null &&
                ((P = dn(y)), y !== P || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((v = wu),
            (x = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((v = ku),
              (x = 'onPointerLeave'),
              (p = 'onPointerEnter'),
              (h = 'pointer')),
            (P = g == null ? f : vn(g)),
            (m = y == null ? f : vn(y)),
            (f = new v(x, h + 'leave', g, n, c)),
            (f.target = P),
            (f.relatedTarget = m),
            (x = null),
            Zt(c) === u &&
              ((v = new v(p, h + 'enter', y, n, c)),
              (v.target = m),
              (v.relatedTarget = P),
              (x = v)),
            (P = x),
            g && y)
          )
            t: {
              for (v = g, p = y, h = 0, m = v; m; m = fn(m)) h++
              for (m = 0, x = p; x; x = fn(x)) m++
              for (; 0 < h - m; ) (v = fn(v)), h--
              for (; 0 < m - h; ) (p = fn(p)), m--
              for (; h--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t
                ;(v = fn(v)), (p = fn(p))
              }
              v = null
            }
          else v = null
          g !== null && ju(d, f, g, v, !1),
            y !== null && P !== null && ju(d, P, y, v, !0)
        }
      }
      e: {
        if (
          ((f = u ? vn(u) : window),
          (g = f.nodeName && f.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && f.type === 'file'))
        )
          var S = G0
        else if (Cu(f))
          if (Af) S = X0
          else {
            S = Q0
            var C = b0
          }
        else
          (g = f.nodeName) &&
            g.toLowerCase() === 'input' &&
            (f.type === 'checkbox' || f.type === 'radio') &&
            (S = Y0)
        if (S && (S = S(e, u))) {
          Ef(d, S, n, c)
          break e
        }
        C && C(e, f, u),
          e === 'focusout' &&
            (C = f._wrapperState) &&
            C.controlled &&
            f.type === 'number' &&
            Ds(f, 'number', f.value)
      }
      switch (((C = u ? vn(u) : window), e)) {
        case 'focusin':
          ;(Cu(C) || C.contentEditable === 'true') &&
            ((gn = C), (Hs = u), (gr = null))
          break
        case 'focusout':
          gr = Hs = gn = null
          break
        case 'mousedown':
          Ks = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(Ks = !1), Mu(d, n, c)
          break
        case 'selectionchange':
          if (q0) break
        case 'keydown':
        case 'keyup':
          Mu(d, n, c)
      }
      var A
      if (Zl)
        e: {
          switch (e) {
            case 'compositionstart':
              var T = 'onCompositionStart'
              break e
            case 'compositionend':
              T = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              T = 'onCompositionUpdate'
              break e
          }
          T = void 0
        }
      else
        mn
          ? Tf(e, n) && (T = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (T = 'onCompositionStart')
      T &&
        (Pf &&
          n.locale !== 'ko' &&
          (mn || T !== 'onCompositionStart'
            ? T === 'onCompositionEnd' && mn && (A = kf())
            : ((Pt = c),
              (Ql = 'value' in Pt ? Pt.value : Pt.textContent),
              (mn = !0))),
        (C = Gi(u, T)),
        0 < C.length &&
          ((T = new Su(T, e, null, n, c)),
          d.push({ event: T, listeners: C }),
          A ? (T.data = A) : ((A = Cf(n)), A !== null && (T.data = A)))),
        (A = U0 ? $0(e, n) : W0(e, n)) &&
          ((u = Gi(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new Su('onBeforeInput', 'beforeinput', null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = A)))
    }
    Of(d, t)
  })
}
function jr (e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function Gi (e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      o = i.stateNode
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Er(e, n)),
      o != null && r.unshift(jr(e, o, i)),
      (o = Er(e, t)),
      o != null && r.push(jr(e, o, i))),
      (e = e.return)
  }
  return r
}
function fn (e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function ju (e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode
    if (a !== null && a === r) break
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = Er(n, o)), a != null && s.unshift(jr(n, a, l)))
        : i || ((a = Er(n, o)), a != null && s.push(jr(n, a, l)))),
      (n = n.return)
  }
  s.length !== 0 && e.push({ event: t, listeners: s })
}
var rg = /\r\n?/g,
  ig = /\u0000|\uFFFD/g
function Ru (e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      rg,
      `
`
    )
    .replace(ig, '')
}
function hi (e, t, n) {
  if (((t = Ru(t)), Ru(e) !== t && n)) throw Error(k(425))
}
function bi () {}
var Gs = null,
  bs = null
function Qs (e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var Ys = typeof setTimeout == 'function' ? setTimeout : void 0,
  og = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  _u = typeof Promise == 'function' ? Promise : void 0,
  sg =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof _u < 'u'
      ? function (e) {
          return _u.resolve(null).then(e).catch(lg)
        }
      : Ys
function lg (e) {
  setTimeout(function () {
    throw e
  })
}
function ns (e, t) {
  var n = t,
    r = 0
  do {
    var i = n.nextSibling
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Nr(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = i
  } while (n)
  Nr(t)
}
function Vt (e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function Fu (e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var Qn = Math.random().toString(36).slice(2),
  Xe = '__reactFiber$' + Qn,
  Rr = '__reactProps$' + Qn,
  ft = '__reactContainer$' + Qn,
  Xs = '__reactEvents$' + Qn,
  ag = '__reactListeners$' + Qn,
  ug = '__reactHandles$' + Qn
function Zt (e) {
  var t = e[Xe]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[ft] || n[Xe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Fu(e); e !== null; ) {
          if ((n = e[Xe])) return n
          e = Fu(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function Yr (e) {
  return (
    (e = e[Xe] || e[ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function vn (e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(k(33))
}
function ko (e) {
  return e[Rr] || null
}
var Zs = [],
  xn = -1
function zt (e) {
  return { current: e }
}
function $ (e) {
  0 > xn || ((e.current = Zs[xn]), (Zs[xn] = null), xn--)
}
function B (e, t) {
  xn++, (Zs[xn] = e.current), (e.current = t)
}
var Rt = {},
  ge = zt(Rt),
  Pe = zt(!1),
  on = Rt
function On (e, t) {
  var n = e.type.contextTypes
  if (!n) return Rt
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var i = {},
    o
  for (o in n) i[o] = t[o]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  )
}
function Te (e) {
  return (e = e.childContextTypes), e != null
}
function Qi () {
  $(Pe), $(ge)
}
function Ou (e, t, n) {
  if (ge.current !== Rt) throw Error(k(168))
  B(ge, t), B(Pe, n)
}
function zf (e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var i in r) if (!(i in t)) throw Error(k(108, bm(e) || 'Unknown', i))
  return b({}, n, r)
}
function Yi (e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Rt),
    (on = ge.current),
    B(ge, e),
    B(Pe, Pe.current),
    !0
  )
}
function Iu (e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(k(169))
  n
    ? ((e = zf(e, t, on)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $(Pe),
      $(ge),
      B(ge, e))
    : $(Pe),
    B(Pe, n)
}
var nt = null,
  Po = !1,
  rs = !1
function Bf (e) {
  nt === null ? (nt = [e]) : nt.push(e)
}
function cg (e) {
  ;(Po = !0), Bf(e)
}
function Bt () {
  if (!rs && nt !== null) {
    rs = !0
    var e = 0,
      t = I
    try {
      var n = nt
      for (I = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(nt = null), (Po = !1)
    } catch (i) {
      throw (nt !== null && (nt = nt.slice(e + 1)), df(Hl, Bt), i)
    } finally {
      ;(I = t), (rs = !1)
    }
  }
  return null
}
var wn = [],
  Sn = 0,
  Xi = null,
  Zi = 0,
  _e = [],
  Fe = 0,
  sn = null,
  rt = 1,
  it = ''
function bt (e, t) {
  ;(wn[Sn++] = Zi), (wn[Sn++] = Xi), (Xi = e), (Zi = t)
}
function Uf (e, t, n) {
  ;(_e[Fe++] = rt), (_e[Fe++] = it), (_e[Fe++] = sn), (sn = e)
  var r = rt
  e = it
  var i = 32 - Ke(r) - 1
  ;(r &= ~(1 << i)), (n += 1)
  var o = 32 - Ke(t) + i
  if (30 < o) {
    var s = i - (i % 5)
    ;(o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (rt = (1 << (32 - Ke(t) + i)) | (n << i) | r),
      (it = o + e)
  } else (rt = (1 << o) | (n << i) | r), (it = e)
}
function ql (e) {
  e.return !== null && (bt(e, 1), Uf(e, 1, 0))
}
function ea (e) {
  for (; e === Xi; )
    (Xi = wn[--Sn]), (wn[Sn] = null), (Zi = wn[--Sn]), (wn[Sn] = null)
  for (; e === sn; )
    (sn = _e[--Fe]),
      (_e[Fe] = null),
      (it = _e[--Fe]),
      (_e[Fe] = null),
      (rt = _e[--Fe]),
      (_e[Fe] = null)
}
var Ve = null,
  Ae = null,
  W = !1,
  He = null
function $f (e, t) {
  var n = Oe(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function zu (e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ve = e), (Ae = Vt(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ve = e), (Ae = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = sn !== null ? { id: rt, overflow: it } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824
            }),
            (n = Oe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ve = e),
            (Ae = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Js (e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function qs (e) {
  if (W) {
    var t = Ae
    if (t) {
      var n = t
      if (!zu(e, t)) {
        if (Js(e)) throw Error(k(418))
        t = Vt(n.nextSibling)
        var r = Ve
        t && zu(e, t)
          ? $f(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (Ve = e))
      }
    } else {
      if (Js(e)) throw Error(k(418))
      ;(e.flags = (e.flags & -4097) | 2), (W = !1), (Ve = e)
    }
  }
}
function Bu (e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  Ve = e
}
function pi (e) {
  if (e !== Ve) return !1
  if (!W) return Bu(e), (W = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Qs(e.type, e.memoizedProps))),
    t && (t = Ae))
  ) {
    if (Js(e)) throw (Wf(), Error(k(418)))
    for (; t; ) $f(e, t), (t = Vt(t.nextSibling))
  }
  if ((Bu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              Ae = Vt(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      Ae = null
    }
  } else Ae = Ve ? Vt(e.stateNode.nextSibling) : null
  return !0
}
function Wf () {
  for (var e = Ae; e; ) e = Vt(e.nextSibling)
}
function In () {
  ;(Ae = Ve = null), (W = !1)
}
function ta (e) {
  He === null ? (He = [e]) : He.push(e)
}
var dg = mt.ReactCurrentBatchConfig
function nr (e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309))
        var r = n.stateNode
      }
      if (!r) throw Error(k(147, e))
      var i = r,
        o = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs
            s === null ? delete l[o] : (l[o] = s)
          }),
          (t._stringRef = o),
          t)
    }
    if (typeof e != 'string') throw Error(k(284))
    if (!n._owner) throw Error(k(290, e))
  }
  return e
}
function mi (e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  )
}
function Uu (e) {
  var t = e._init
  return t(e._payload)
}
function Hf (e) {
  function t (p, h) {
    if (e) {
      var m = p.deletions
      m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h)
    }
  }
  function n (p, h) {
    if (!e) return null
    for (; h !== null; ) t(p, h), (h = h.sibling)
    return null
  }
  function r (p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling)
    return p
  }
  function i (p, h) {
    return (p = Dt(p, h)), (p.index = 0), (p.sibling = null), p
  }
  function o (p, h, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    )
  }
  function s (p) {
    return e && p.alternate === null && (p.flags |= 2), p
  }
  function l (p, h, m, x) {
    return h === null || h.tag !== 6
      ? ((h = cs(m, p.mode, x)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h)
  }
  function a (p, h, m, x) {
    var S = m.type
    return S === pn
      ? c(p, h, m.props.children, x, m.key)
      : h !== null &&
        (h.elementType === S ||
          (typeof S == 'object' &&
            S !== null &&
            S.$$typeof === xt &&
            Uu(S) === h.type))
      ? ((x = i(h, m.props)), (x.ref = nr(p, h, m)), (x.return = p), x)
      : ((x = _i(m.type, m.key, m.props, null, p.mode, x)),
        (x.ref = nr(p, h, m)),
        (x.return = p),
        x)
  }
  function u (p, h, m, x) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = ds(m, p.mode, x)), (h.return = p), h)
      : ((h = i(h, m.children || [])), (h.return = p), h)
  }
  function c (p, h, m, x, S) {
    return h === null || h.tag !== 7
      ? ((h = nn(m, p.mode, x, S)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h)
  }
  function d (p, h, m) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = cs('' + h, p.mode, m)), (h.return = p), h
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case ii:
          return (
            (m = _i(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = nr(p, null, h)),
            (m.return = p),
            m
          )
        case hn:
          return (h = ds(h, p.mode, m)), (h.return = p), h
        case xt:
          var x = h._init
          return d(p, x(h._payload), m)
      }
      if (lr(h) || Zn(h)) return (h = nn(h, p.mode, m, null)), (h.return = p), h
      mi(p, h)
    }
    return null
  }
  function f (p, h, m, x) {
    var S = h !== null ? h.key : null
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return S !== null ? null : l(p, h, '' + m, x)
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case ii:
          return m.key === S ? a(p, h, m, x) : null
        case hn:
          return m.key === S ? u(p, h, m, x) : null
        case xt:
          return (S = m._init), f(p, h, S(m._payload), x)
      }
      if (lr(m) || Zn(m)) return S !== null ? null : c(p, h, m, x, null)
      mi(p, m)
    }
    return null
  }
  function g (p, h, m, x, S) {
    if ((typeof x == 'string' && x !== '') || typeof x == 'number')
      return (p = p.get(m) || null), l(h, p, '' + x, S)
    if (typeof x == 'object' && x !== null) {
      switch (x.$$typeof) {
        case ii:
          return (p = p.get(x.key === null ? m : x.key) || null), a(h, p, x, S)
        case hn:
          return (p = p.get(x.key === null ? m : x.key) || null), u(h, p, x, S)
        case xt:
          var C = x._init
          return g(p, h, m, C(x._payload), S)
      }
      if (lr(x) || Zn(x)) return (p = p.get(m) || null), c(h, p, x, S, null)
      mi(h, x)
    }
    return null
  }
  function y (p, h, m, x) {
    for (
      var S = null, C = null, A = h, T = (h = 0), _ = null;
      A !== null && T < m.length;
      T++
    ) {
      A.index > T ? ((_ = A), (A = null)) : (_ = A.sibling)
      var M = f(p, A, m[T], x)
      if (M === null) {
        A === null && (A = _)
        break
      }
      e && A && M.alternate === null && t(p, A),
        (h = o(M, h, T)),
        C === null ? (S = M) : (C.sibling = M),
        (C = M),
        (A = _)
    }
    if (T === m.length) return n(p, A), W && bt(p, T), S
    if (A === null) {
      for (; T < m.length; T++)
        (A = d(p, m[T], x)),
          A !== null &&
            ((h = o(A, h, T)), C === null ? (S = A) : (C.sibling = A), (C = A))
      return W && bt(p, T), S
    }
    for (A = r(p, A); T < m.length; T++)
      (_ = g(A, p, T, m[T], x)),
        _ !== null &&
          (e && _.alternate !== null && A.delete(_.key === null ? T : _.key),
          (h = o(_, h, T)),
          C === null ? (S = _) : (C.sibling = _),
          (C = _))
    return (
      e &&
        A.forEach(function (ne) {
          return t(p, ne)
        }),
      W && bt(p, T),
      S
    )
  }
  function v (p, h, m, x) {
    var S = Zn(m)
    if (typeof S != 'function') throw Error(k(150))
    if (((m = S.call(m)), m == null)) throw Error(k(151))
    for (
      var C = (S = null), A = h, T = (h = 0), _ = null, M = m.next();
      A !== null && !M.done;
      T++, M = m.next()
    ) {
      A.index > T ? ((_ = A), (A = null)) : (_ = A.sibling)
      var ne = f(p, A, M.value, x)
      if (ne === null) {
        A === null && (A = _)
        break
      }
      e && A && ne.alternate === null && t(p, A),
        (h = o(ne, h, T)),
        C === null ? (S = ne) : (C.sibling = ne),
        (C = ne),
        (A = _)
    }
    if (M.done) return n(p, A), W && bt(p, T), S
    if (A === null) {
      for (; !M.done; T++, M = m.next())
        (M = d(p, M.value, x)),
          M !== null &&
            ((h = o(M, h, T)), C === null ? (S = M) : (C.sibling = M), (C = M))
      return W && bt(p, T), S
    }
    for (A = r(p, A); !M.done; T++, M = m.next())
      (M = g(A, p, T, M.value, x)),
        M !== null &&
          (e && M.alternate !== null && A.delete(M.key === null ? T : M.key),
          (h = o(M, h, T)),
          C === null ? (S = M) : (C.sibling = M),
          (C = M))
    return (
      e &&
        A.forEach(function (gt) {
          return t(p, gt)
        }),
      W && bt(p, T),
      S
    )
  }
  function P (p, h, m, x) {
    if (
      (typeof m == 'object' &&
        m !== null &&
        m.type === pn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case ii:
          e: {
            for (var S = m.key, C = h; C !== null; ) {
              if (C.key === S) {
                if (((S = m.type), S === pn)) {
                  if (C.tag === 7) {
                    n(p, C.sibling),
                      (h = i(C, m.props.children)),
                      (h.return = p),
                      (p = h)
                    break e
                  }
                } else if (
                  C.elementType === S ||
                  (typeof S == 'object' &&
                    S !== null &&
                    S.$$typeof === xt &&
                    Uu(S) === C.type)
                ) {
                  n(p, C.sibling),
                    (h = i(C, m.props)),
                    (h.ref = nr(p, C, m)),
                    (h.return = p),
                    (p = h)
                  break e
                }
                n(p, C)
                break
              } else t(p, C)
              C = C.sibling
            }
            m.type === pn
              ? ((h = nn(m.props.children, p.mode, x, m.key)),
                (h.return = p),
                (p = h))
              : ((x = _i(m.type, m.key, m.props, null, p.mode, x)),
                (x.ref = nr(p, h, m)),
                (x.return = p),
                (p = x))
          }
          return s(p)
        case hn:
          e: {
            for (C = m.key; h !== null; ) {
              if (h.key === C)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  n(p, h.sibling),
                    (h = i(h, m.children || [])),
                    (h.return = p),
                    (p = h)
                  break e
                } else {
                  n(p, h)
                  break
                }
              else t(p, h)
              h = h.sibling
            }
            ;(h = ds(m, p.mode, x)), (h.return = p), (p = h)
          }
          return s(p)
        case xt:
          return (C = m._init), P(p, h, C(m._payload), x)
      }
      if (lr(m)) return y(p, h, m, x)
      if (Zn(m)) return v(p, h, m, x)
      mi(p, m)
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, m)), (h.return = p), (p = h))
          : (n(p, h), (h = cs(m, p.mode, x)), (h.return = p), (p = h)),
        s(p))
      : n(p, h)
  }
  return P
}
var zn = Hf(!0),
  Kf = Hf(!1),
  Ji = zt(null),
  qi = null,
  kn = null,
  na = null
function ra () {
  na = kn = qi = null
}
function ia (e) {
  var t = Ji.current
  $(Ji), (e._currentValue = t)
}
function el (e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function Rn (e, t) {
  ;(qi = e),
    (na = kn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ke = !0), (e.firstContext = null))
}
function ze (e) {
  var t = e._currentValue
  if (na !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), kn === null)) {
      if (qi === null) throw Error(k(308))
      ;(kn = e), (qi.dependencies = { lanes: 0, firstContext: e })
    } else kn = kn.next = e
  return t
}
var Jt = null
function oa (e) {
  Jt === null ? (Jt = [e]) : Jt.push(e)
}
function Gf (e, t, n, r) {
  var i = t.interleaved
  return (
    i === null ? ((n.next = n), oa(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    ht(e, r)
  )
}
function ht (e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var wt = !1
function sa (e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  }
}
function bf (e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
      })
}
function st (e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  }
}
function Nt (e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), F & 2)) {
    var i = r.pending
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      ht(e, n)
    )
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), oa(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    ht(e, n)
  )
}
function Ni (e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Kl(e, n)
  }
}
function $u (e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        }
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next)
      } while (n !== null)
      o === null ? (i = o = t) : (o = o.next = t)
    } else i = o = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function eo (e, t, n, r) {
  var i = e.updateQueue
  wt = !1
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending
  if (l !== null) {
    i.shared.pending = null
    var a = l,
      u = a.next
    ;(a.next = null), s === null ? (o = u) : (s.next = u), (s = a)
    var c = e.alternate
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)))
  }
  if (o !== null) {
    var d = i.baseState
    ;(s = 0), (c = u = a = null), (l = o)
    do {
      var f = l.lane,
        g = l.eventTime
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null
            })
        e: {
          var y = e,
            v = l
          switch (((f = t), (g = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == 'function')) {
                d = y.call(g, d, f)
                break e
              }
              d = y
              break e
            case 3:
              y.flags = (y.flags & -65537) | 128
            case 0:
              if (
                ((y = v.payload),
                (f = typeof y == 'function' ? y.call(g, d, f) : y),
                f == null)
              )
                break e
              d = b({}, d, f)
              break e
            case 2:
              wt = !0
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [l]) : f.push(l))
      } else
        (g = {
          eventTime: g,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        }),
          c === null ? ((u = c = g), (a = d)) : (c = c.next = g),
          (s |= f)
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break
        ;(f = l),
          (l = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null)
      }
    } while (!0)
    if (
      (c === null && (a = d),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t
      do (s |= i.lane), (i = i.next)
      while (i !== t)
    } else o === null && (i.shared.lanes = 0)
    ;(an |= s), (e.lanes = s), (e.memoizedState = d)
  }
}
function Wu (e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(k(191, i))
        i.call(r)
      }
    }
}
var Xr = {},
  Je = zt(Xr),
  _r = zt(Xr),
  Fr = zt(Xr)
function qt (e) {
  if (e === Xr) throw Error(k(174))
  return e
}
function la (e, t) {
  switch ((B(Fr, t), B(_r, e), B(Je, Xr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Rs(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Rs(t, e))
  }
  $(Je), B(Je, t)
}
function Bn () {
  $(Je), $(_r), $(Fr)
}
function Qf (e) {
  qt(Fr.current)
  var t = qt(Je.current),
    n = Rs(t, e.type)
  t !== n && (B(_r, e), B(Je, n))
}
function aa (e) {
  _r.current === e && ($(Je), $(_r))
}
var H = zt(0)
function to (e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var is = []
function ua () {
  for (var e = 0; e < is.length; e++) is[e]._workInProgressVersionPrimary = null
  is.length = 0
}
var Mi = mt.ReactCurrentDispatcher,
  os = mt.ReactCurrentBatchConfig,
  ln = 0,
  G = null,
  ee = null,
  ie = null,
  no = !1,
  yr = !1,
  Or = 0,
  fg = 0
function ce () {
  throw Error(k(321))
}
function ca (e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!be(e[n], t[n])) return !1
  return !0
}
function da (e, t, n, r, i, o) {
  if (
    ((ln = o),
    (G = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Mi.current = e === null || e.memoizedState === null ? gg : yg),
    (e = n(r, i)),
    yr)
  ) {
    o = 0
    do {
      if (((yr = !1), (Or = 0), 25 <= o)) throw Error(k(301))
      ;(o += 1),
        (ie = ee = null),
        (t.updateQueue = null),
        (Mi.current = vg),
        (e = n(r, i))
    } while (yr)
  }
  if (
    ((Mi.current = ro),
    (t = ee !== null && ee.next !== null),
    (ln = 0),
    (ie = ee = G = null),
    (no = !1),
    t)
  )
    throw Error(k(300))
  return e
}
function fa () {
  var e = Or !== 0
  return (Or = 0), e
}
function Ye () {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  }
  return ie === null ? (G.memoizedState = ie = e) : (ie = ie.next = e), ie
}
function Be () {
  if (ee === null) {
    var e = G.alternate
    e = e !== null ? e.memoizedState : null
  } else e = ee.next
  var t = ie === null ? G.memoizedState : ie.next
  if (t !== null) (ie = t), (ee = e)
  else {
    if (e === null) throw Error(k(310))
    ;(ee = e),
      (e = {
        memoizedState: ee.memoizedState,
        baseState: ee.baseState,
        baseQueue: ee.baseQueue,
        queue: ee.queue,
        next: null
      }),
      ie === null ? (G.memoizedState = ie = e) : (ie = ie.next = e)
  }
  return ie
}
function Ir (e, t) {
  return typeof t == 'function' ? t(e) : t
}
function ss (e) {
  var t = Be(),
    n = t.queue
  if (n === null) throw Error(k(311))
  n.lastRenderedReducer = e
  var r = ee,
    i = r.baseQueue,
    o = n.pending
  if (o !== null) {
    if (i !== null) {
      var s = i.next
      ;(i.next = o.next), (o.next = s)
    }
    ;(r.baseQueue = i = o), (n.pending = null)
  }
  if (i !== null) {
    ;(o = i.next), (r = r.baseState)
    var l = (s = null),
      a = null,
      u = o
    do {
      var c = u.lane
      if ((ln & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action))
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        }
        a === null ? ((l = a = d), (s = r)) : (a = a.next = d),
          (G.lanes |= c),
          (an |= c)
      }
      u = u.next
    } while (u !== null && u !== o)
    a === null ? (s = r) : (a.next = l),
      be(r, t.memoizedState) || (ke = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    i = e
    do (o = i.lane), (G.lanes |= o), (an |= o), (i = i.next)
    while (i !== e)
  } else i === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function ls (e) {
  var t = Be(),
    n = t.queue
  if (n === null) throw Error(k(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState
  if (i !== null) {
    n.pending = null
    var s = (i = i.next)
    do (o = e(o, s.action)), (s = s.next)
    while (s !== i)
    be(o, t.memoizedState) || (ke = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o)
  }
  return [o, r]
}
function Yf () {}
function Xf (e, t) {
  var n = G,
    r = Be(),
    i = t(),
    o = !be(r.memoizedState, i)
  if (
    (o && ((r.memoizedState = i), (ke = !0)),
    (r = r.queue),
    ha(qf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ie !== null && ie.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      zr(9, Jf.bind(null, n, r, i, t), void 0, null),
      oe === null)
    )
      throw Error(k(349))
    ln & 30 || Zf(n, t, i)
  }
  return i
}
function Zf (e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function Jf (e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), eh(t) && th(e)
}
function qf (e, t, n) {
  return n(function () {
    eh(t) && th(e)
  })
}
function eh (e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !be(e, n)
  } catch {
    return !0
  }
}
function th (e) {
  var t = ht(e, 1)
  t !== null && Ge(t, e, 1, -1)
}
function Hu (e) {
  var t = Ye()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ir,
      lastRenderedState: e
    }),
    (t.queue = e),
    (e = e.dispatch = mg.bind(null, G, e)),
    [t.memoizedState, e]
  )
}
function zr (e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function nh () {
  return Be().memoizedState
}
function Li (e, t, n, r) {
  var i = Ye()
  ;(G.flags |= e),
    (i.memoizedState = zr(1 | t, n, void 0, r === void 0 ? null : r))
}
function To (e, t, n, r) {
  var i = Be()
  r = r === void 0 ? null : r
  var o = void 0
  if (ee !== null) {
    var s = ee.memoizedState
    if (((o = s.destroy), r !== null && ca(r, s.deps))) {
      i.memoizedState = zr(t, n, o, r)
      return
    }
  }
  ;(G.flags |= e), (i.memoizedState = zr(1 | t, n, o, r))
}
function Ku (e, t) {
  return Li(8390656, 8, e, t)
}
function ha (e, t) {
  return To(2048, 8, e, t)
}
function rh (e, t) {
  return To(4, 2, e, t)
}
function ih (e, t) {
  return To(4, 4, e, t)
}
function oh (e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function sh (e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), To(4, 4, oh.bind(null, t, e), n)
  )
}
function pa () {}
function lh (e, t) {
  var n = Be()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && ca(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function ah (e, t) {
  var n = Be()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && ca(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function uh (e, t, n) {
  return ln & 21
    ? (be(n, t) || ((n = pf()), (G.lanes |= n), (an |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ke = !0)), (e.memoizedState = n))
}
function hg (e, t) {
  var n = I
  ;(I = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = os.transition
  os.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(I = n), (os.transition = r)
  }
}
function ch () {
  return Be().memoizedState
}
function pg (e, t, n) {
  var r = Lt(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }),
    dh(e))
  )
    fh(t, n)
  else if (((n = Gf(e, t, n, r)), n !== null)) {
    var i = ve()
    Ge(n, e, r, i), hh(n, t, r)
  }
}
function mg (e, t, n) {
  var r = Lt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (dh(e)) fh(t, i)
  else {
    var o = e.alternate
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n)
        if (((i.hasEagerState = !0), (i.eagerState = l), be(l, s))) {
          var a = t.interleaved
          a === null
            ? ((i.next = i), oa(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Gf(e, t, i, r)),
      n !== null && ((i = ve()), Ge(n, e, r, i), hh(n, t, r))
  }
}
function dh (e) {
  var t = e.alternate
  return e === G || (t !== null && t === G)
}
function fh (e, t) {
  yr = no = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function hh (e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Kl(e, n)
  }
}
var ro = {
    readContext: ze,
    useCallback: ce,
    useContext: ce,
    useEffect: ce,
    useImperativeHandle: ce,
    useInsertionEffect: ce,
    useLayoutEffect: ce,
    useMemo: ce,
    useReducer: ce,
    useRef: ce,
    useState: ce,
    useDebugValue: ce,
    useDeferredValue: ce,
    useTransition: ce,
    useMutableSource: ce,
    useSyncExternalStore: ce,
    useId: ce,
    unstable_isNewReconciler: !1
  },
  gg = {
    readContext: ze,
    useCallback: function (e, t) {
      return (Ye().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: ze,
    useEffect: Ku,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Li(4194308, 4, oh.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return Li(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return Li(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = Ye()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var r = Ye()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t
        }),
        (r.queue = e),
        (e = e.dispatch = pg.bind(null, G, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = Ye()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: Hu,
    useDebugValue: pa,
    useDeferredValue: function (e) {
      return (Ye().memoizedState = e)
    },
    useTransition: function () {
      var e = Hu(!1),
        t = e[0]
      return (e = hg.bind(null, e[1])), (Ye().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = G,
        i = Ye()
      if (W) {
        if (n === void 0) throw Error(k(407))
        n = n()
      } else {
        if (((n = t()), oe === null)) throw Error(k(349))
        ln & 30 || Zf(r, t, n)
      }
      i.memoizedState = n
      var o = { value: n, getSnapshot: t }
      return (
        (i.queue = o),
        Ku(qf.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        zr(9, Jf.bind(null, r, o, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = Ye(),
        t = oe.identifierPrefix
      if (W) {
        var n = it,
          r = rt
        ;(n = (r & ~(1 << (32 - Ke(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Or++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = fg++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1
  },
  yg = {
    readContext: ze,
    useCallback: lh,
    useContext: ze,
    useEffect: ha,
    useImperativeHandle: sh,
    useInsertionEffect: rh,
    useLayoutEffect: ih,
    useMemo: ah,
    useReducer: ss,
    useRef: nh,
    useState: function () {
      return ss(Ir)
    },
    useDebugValue: pa,
    useDeferredValue: function (e) {
      var t = Be()
      return uh(t, ee.memoizedState, e)
    },
    useTransition: function () {
      var e = ss(Ir)[0],
        t = Be().memoizedState
      return [e, t]
    },
    useMutableSource: Yf,
    useSyncExternalStore: Xf,
    useId: ch,
    unstable_isNewReconciler: !1
  },
  vg = {
    readContext: ze,
    useCallback: lh,
    useContext: ze,
    useEffect: ha,
    useImperativeHandle: sh,
    useInsertionEffect: rh,
    useLayoutEffect: ih,
    useMemo: ah,
    useReducer: ls,
    useRef: nh,
    useState: function () {
      return ls(Ir)
    },
    useDebugValue: pa,
    useDeferredValue: function (e) {
      var t = Be()
      return ee === null ? (t.memoizedState = e) : uh(t, ee.memoizedState, e)
    },
    useTransition: function () {
      var e = ls(Ir)[0],
        t = Be().memoizedState
      return [e, t]
    },
    useMutableSource: Yf,
    useSyncExternalStore: Xf,
    useId: ch,
    unstable_isNewReconciler: !1
  }
function $e (e, t) {
  if (e && e.defaultProps) {
    ;(t = b({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
function tl (e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : b({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Co = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? dn(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = ve(),
      i = Lt(e),
      o = st(r, i)
    ;(o.payload = t),
      n != null && (o.callback = n),
      (t = Nt(e, o, i)),
      t !== null && (Ge(t, e, i, r), Ni(t, e, i))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = ve(),
      i = Lt(e),
      o = st(r, i)
    ;(o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Nt(e, o, i)),
      t !== null && (Ge(t, e, i, r), Ni(t, e, i))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = ve(),
      r = Lt(e),
      i = st(n, r)
    ;(i.tag = 2),
      t != null && (i.callback = t),
      (t = Nt(e, i, r)),
      t !== null && (Ge(t, e, r, n), Ni(t, e, r))
  }
}
function Gu (e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Lr(n, r) || !Lr(i, o)
      : !0
  )
}
function ph (e, t, n) {
  var r = !1,
    i = Rt,
    o = t.contextType
  return (
    typeof o == 'object' && o !== null
      ? (o = ze(o))
      : ((i = Te(t) ? on : ge.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? On(e, i) : Rt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Co),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  )
}
function bu (e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Co.enqueueReplaceState(t, t.state, null)
}
function nl (e, t, n, r) {
  var i = e.stateNode
  ;(i.props = n), (i.state = e.memoizedState), (i.refs = {}), sa(e)
  var o = t.contextType
  typeof o == 'object' && o !== null
    ? (i.context = ze(o))
    : ((o = Te(t) ? on : ge.current), (i.context = On(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (tl(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Co.enqueueReplaceState(i, i.state, null),
      eo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308)
}
function Un (e, t) {
  try {
    var n = '',
      r = t
    do (n += Gm(r)), (r = r.return)
    while (r)
    var i = n
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack
  }
  return { value: e, source: t, stack: i, digest: null }
}
function as (e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function rl (e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var xg = typeof WeakMap == 'function' ? WeakMap : Map
function mh (e, t, n) {
  ;(n = st(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      oo || ((oo = !0), (hl = r)), rl(e, t)
    }),
    n
  )
}
function gh (e, t, n) {
  ;(n = st(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var i = t.value
    ;(n.payload = function () {
      return r(i)
    }),
      (n.callback = function () {
        rl(e, t)
      })
  }
  var o = e.stateNode
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        rl(e, t),
          typeof r != 'function' &&
            (Mt === null ? (Mt = new Set([this])) : Mt.add(this))
        var s = t.stack
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : '' })
      }),
    n
  )
}
function Qu (e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new xg()
    var i = new Set()
    r.set(t, i)
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i))
  i.has(n) || (i.add(n), (e = jg.bind(null, e, t, n)), t.then(e, e))
}
function Yu (e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function Xu (e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = st(-1, 1)), (t.tag = 2), Nt(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var wg = mt.ReactCurrentOwner,
  ke = !1
function ye (e, t, n, r) {
  t.child = e === null ? Kf(t, null, n, r) : zn(t, e.child, n, r)
}
function Zu (e, t, n, r, i) {
  n = n.render
  var o = t.ref
  return (
    Rn(t, i),
    (r = da(e, t, n, r, o, i)),
    (n = fa()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        pt(e, t, i))
      : (W && n && ql(t), (t.flags |= 1), ye(e, t, r, i), t.child)
  )
}
function Ju (e, t, n, r, i) {
  if (e === null) {
    var o = n.type
    return typeof o == 'function' &&
      !ka(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), yh(e, t, o, r, i))
      : ((e = _i(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : Lr), n(s, r) && e.ref === t.ref)
    )
      return pt(e, t, i)
  }
  return (
    (t.flags |= 1),
    (e = Dt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function yh (e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps
    if (Lr(o, r) && e.ref === t.ref)
      if (((ke = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (ke = !0)
      else return (t.lanes = e.lanes), pt(e, t, i)
  }
  return il(e, t, n, r, i)
}
function vh (e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        B(Tn, Ee),
        (Ee |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
          }),
          (t.updateQueue = null),
          B(Tn, Ee),
          (Ee |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        B(Tn, Ee),
        (Ee |= r)
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      B(Tn, Ee),
      (Ee |= r)
  return ye(e, t, i, n), t.child
}
function xh (e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function il (e, t, n, r, i) {
  var o = Te(n) ? on : ge.current
  return (
    (o = On(t, o)),
    Rn(t, i),
    (n = da(e, t, n, r, o, i)),
    (r = fa()),
    e !== null && !ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        pt(e, t, i))
      : (W && r && ql(t), (t.flags |= 1), ye(e, t, n, i), t.child)
  )
}
function qu (e, t, n, r, i) {
  if (Te(n)) {
    var o = !0
    Yi(t)
  } else o = !1
  if ((Rn(t, i), t.stateNode === null))
    Di(e, t), ph(t, n, r), nl(t, n, r, i), (r = !0)
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps
    s.props = l
    var a = s.context,
      u = n.contextType
    typeof u == 'object' && u !== null
      ? (u = ze(u))
      : ((u = Te(n) ? on : ge.current), (u = On(t, u)))
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == 'function' || typeof s.getSnapshotBeforeUpdate == 'function'
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((l !== r || a !== u) && bu(t, s, r, u)),
      (wt = !1)
    var f = t.memoizedState
    ;(s.state = f),
      eo(t, r, s, i),
      (a = t.memoizedState),
      l !== r || f !== a || Pe.current || wt
        ? (typeof c == 'function' && (tl(t, n, c, r), (a = t.memoizedState)),
          (l = wt || Gu(t, n, l, r, f, a, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != 'function' &&
                  typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1))
  } else {
    ;(s = t.stateNode),
      bf(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : $e(t.type, l)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = ze(a))
        : ((a = Te(n) ? on : ge.current), (a = On(t, a)))
    var g = n.getDerivedStateFromProps
    ;(c =
      typeof g == 'function' ||
      typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((l !== d || f !== a) && bu(t, s, r, a)),
      (wt = !1),
      (f = t.memoizedState),
      (s.state = f),
      eo(t, r, s, i)
    var y = t.memoizedState
    l !== d || f !== y || Pe.current || wt
      ? (typeof g == 'function' && (tl(t, n, g, r), (y = t.memoizedState)),
        (u = wt || Gu(t, n, u, r, f, y, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' &&
                s.componentWillUpdate(r, y, a),
              typeof s.UNSAFE_componentWillUpdate == 'function' &&
                s.UNSAFE_componentWillUpdate(r, y, a)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return ol(e, t, n, r, o, i)
}
function ol (e, t, n, r, i, o) {
  xh(e, t)
  var s = (t.flags & 128) !== 0
  if (!r && !s) return i && Iu(t, n, !1), pt(e, t, o)
  ;(r = t.stateNode), (wg.current = t)
  var l =
    s && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = zn(t, e.child, null, o)), (t.child = zn(t, null, l, o)))
      : ye(e, t, l, o),
    (t.memoizedState = r.state),
    i && Iu(t, n, !0),
    t.child
  )
}
function wh (e) {
  var t = e.stateNode
  t.pendingContext
    ? Ou(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ou(e, t.context, !1),
    la(e, t.containerInfo)
}
function ec (e, t, n, r, i) {
  return In(), ta(i), (t.flags |= 256), ye(e, t, n, r), t.child
}
var sl = { dehydrated: null, treeContext: null, retryLane: 0 }
function ll (e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function Sh (e, t, n) {
  var r = t.pendingProps,
    i = H.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    B(H, i & 1),
    e === null)
  )
    return (
      qs(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: 'hidden', children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Vo(s, r, 0, null)),
              (e = nn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ll(n)),
              (t.memoizedState = sl),
              e)
            : ma(t, s))
    )
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Sg(e, t, s, r, l, i, n)
  if (o) {
    ;(o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling)
    var a = { mode: 'hidden', children: r.children }
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Dt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = Dt(l, o)) : ((o = nn(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? ll(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = sl),
      r
    )
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Dt(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function ma (e, t) {
  return (
    (t = Vo({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function gi (e, t, n, r) {
  return (
    r !== null && ta(r),
    zn(t, e.child, null, n),
    (e = ma(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function Sg (e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = as(Error(k(422)))), gi(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Vo({ mode: 'visible', children: r.children }, i, 0, null)),
        (o = nn(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && zn(t, e.child, null, s),
        (t.child.memoizedState = ll(s)),
        (t.memoizedState = sl),
        o)
  if (!(t.mode & 1)) return gi(e, t, s, null)
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst
    return (r = l), (o = Error(k(419))), (r = as(o, r, void 0)), gi(e, t, s, r)
  }
  if (((l = (s & e.childLanes) !== 0), ke || l)) {
    if (((r = oe), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2
          break
        case 16:
          i = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32
          break
        case 536870912:
          i = 268435456
          break
        default:
          i = 0
      }
      ;(i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), ht(e, i), Ge(r, e, i, -1))
    }
    return Sa(), (r = as(Error(k(421)))), gi(e, t, s, r)
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Rg.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ae = Vt(i.nextSibling)),
      (Ve = t),
      (W = !0),
      (He = null),
      e !== null &&
        ((_e[Fe++] = rt),
        (_e[Fe++] = it),
        (_e[Fe++] = sn),
        (rt = e.id),
        (it = e.overflow),
        (sn = t)),
      (t = ma(t, r.children)),
      (t.flags |= 4096),
      t)
}
function tc (e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), el(e.return, t, n)
}
function us (e, t, n, r, i) {
  var o = e.memoizedState
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i))
}
function kh (e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail
  if ((ye(e, t, r.children, n), (r = H.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && tc(e, n, t)
        else if (e.tag === 19) tc(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((B(H, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && to(e) === null && (i = n),
            (n = n.sibling)
        ;(n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          us(t, !1, i, n, o)
        break
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && to(e) === null)) {
            t.child = i
            break
          }
          ;(e = i.sibling), (i.sibling = n), (n = i), (i = e)
        }
        us(t, !0, n, null, o)
        break
      case 'together':
        us(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function Di (e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function pt (e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (an |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(k(153))
  if (t.child !== null) {
    for (
      e = t.child, n = Dt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Dt(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function kg (e, t, n) {
  switch (t.tag) {
    case 3:
      wh(t), In()
      break
    case 5:
      Qf(t)
      break
    case 1:
      Te(t.type) && Yi(t)
      break
    case 4:
      la(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value
      B(Ji, r._currentValue), (r._currentValue = i)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (B(H, H.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Sh(e, t, n)
          : (B(H, H.current & 1),
            (e = pt(e, t, n)),
            e !== null ? e.sibling : null)
      B(H, H.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return kh(e, t, n)
        t.flags |= 128
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        B(H, H.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), vh(e, t, n)
  }
  return pt(e, t, n)
}
var Ph, al, Th, Ch
Ph = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
al = function () {}
Th = function (e, t, n, r) {
  var i = e.memoizedProps
  if (i !== r) {
    ;(e = t.stateNode), qt(Je.current)
    var o = null
    switch (n) {
      case 'input':
        ;(i = Ms(e, i)), (r = Ms(e, r)), (o = [])
        break
      case 'select':
        ;(i = b({}, i, { value: void 0 })),
          (r = b({}, r, { value: void 0 })),
          (o = [])
        break
      case 'textarea':
        ;(i = js(e, i)), (r = js(e, r)), (o = [])
        break
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = bi)
    }
    _s(n, r)
    var s
    n = null
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var l = i[u]
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''))
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Tr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null))
    for (u in r) {
      var a = r[u]
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === 'style')
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ''))
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]))
          } else n || (o || (o = []), o.push(u, n)), (n = a)
        else
          u === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(u, a))
            : u === 'children'
            ? (typeof a != 'string' && typeof a != 'number') ||
              (o = o || []).push(u, '' + a)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (Tr.hasOwnProperty(u)
                ? (a != null && u === 'onScroll' && U('scroll', e),
                  o || l === a || (o = []))
                : (o = o || []).push(u, a))
    }
    n && (o = o || []).push('style', n)
    var u = o
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
Ch = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function rr (e, t) {
  if (!W)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function de (e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling)
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function Pg (e, t, n) {
  var r = t.pendingProps
  switch ((ea(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return de(t), null
    case 1:
      return Te(t.type) && Qi(), de(t), null
    case 3:
      return (
        (r = t.stateNode),
        Bn(),
        $(Pe),
        $(ge),
        ua(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (pi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), He !== null && (gl(He), (He = null)))),
        al(e, t),
        de(t),
        null
      )
    case 5:
      aa(t)
      var i = qt(Fr.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        Th(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166))
          return de(t), null
        }
        if (((e = qt(Je.current)), pi(t))) {
          ;(r = t.stateNode), (n = t.type)
          var o = t.memoizedProps
          switch (((r[Xe] = t), (r[Rr] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              U('cancel', r), U('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              U('load', r)
              break
            case 'video':
            case 'audio':
              for (i = 0; i < ur.length; i++) U(ur[i], r)
              break
            case 'source':
              U('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              U('error', r), U('load', r)
              break
            case 'details':
              U('toggle', r)
              break
            case 'input':
              cu(r, o), U('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!o.multiple }),
                U('invalid', r)
              break
            case 'textarea':
              fu(r, o), U('invalid', r)
          }
          _s(n, o), (i = null)
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s]
              s === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      hi(r.textContent, l, e),
                    (i = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      hi(r.textContent, l, e),
                    (i = ['children', '' + l]))
                : Tr.hasOwnProperty(s) &&
                  l != null &&
                  s === 'onScroll' &&
                  U('scroll', r)
            }
          switch (n) {
            case 'input':
              oi(r), du(r, o, !0)
              break
            case 'textarea':
              oi(r), hu(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof o.onClick == 'function' && (r.onclick = bi)
          }
          ;(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(s = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Jd(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === 'select' &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Xe] = t),
            (e[Rr] = r),
            Ph(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((s = Fs(n, r)), n)) {
              case 'dialog':
                U('cancel', e), U('close', e), (i = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                U('load', e), (i = r)
                break
              case 'video':
              case 'audio':
                for (i = 0; i < ur.length; i++) U(ur[i], e)
                i = r
                break
              case 'source':
                U('error', e), (i = r)
                break
              case 'img':
              case 'image':
              case 'link':
                U('error', e), U('load', e), (i = r)
                break
              case 'details':
                U('toggle', e), (i = r)
                break
              case 'input':
                cu(e, r), (i = Ms(e, r)), U('invalid', e)
                break
              case 'option':
                i = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = b({}, r, { value: void 0 })),
                  U('invalid', e)
                break
              case 'textarea':
                fu(e, r), (i = js(e, r)), U('invalid', e)
                break
              default:
                i = r
            }
            _s(n, i), (l = i)
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o]
                o === 'style'
                  ? tf(e, a)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((a = a ? a.__html : void 0), a != null && qd(e, a))
                  : o === 'children'
                  ? typeof a == 'string'
                    ? (n !== 'textarea' || a !== '') && Cr(e, a)
                    : typeof a == 'number' && Cr(e, '' + a)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (Tr.hasOwnProperty(o)
                      ? a != null && o === 'onScroll' && U('scroll', e)
                      : a != null && zl(e, o, a, s))
              }
            switch (n) {
              case 'input':
                oi(e), du(e, r, !1)
                break
              case 'textarea':
                oi(e), hu(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + jt(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Mn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Mn(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof i.onClick == 'function' && (e.onclick = bi)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return de(t), null
    case 6:
      if (e && t.stateNode != null) Ch(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(k(166))
        if (((n = qt(Fr.current)), qt(Je.current), pi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Xe] = t),
            (o = r.nodeValue !== n) && ((e = Ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                hi(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  hi(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          o && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Xe] = t),
            (t.stateNode = r)
      }
      return de(t), null
    case 13:
      if (
        ($(H),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && Ae !== null && t.mode & 1 && !(t.flags & 128))
          Wf(), In(), (t.flags |= 98560), (o = !1)
        else if (((o = pi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318))
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317))
            o[Xe] = t
          } else
            In(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          de(t), (o = !1)
        } else He !== null && (gl(He), (He = null)), (o = !0)
        if (!o) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || H.current & 1 ? te === 0 && (te = 3) : Sa())),
          t.updateQueue !== null && (t.flags |= 4),
          de(t),
          null)
    case 4:
      return (
        Bn(), al(e, t), e === null && Dr(t.stateNode.containerInfo), de(t), null
      )
    case 10:
      return ia(t.type._context), de(t), null
    case 17:
      return Te(t.type) && Qi(), de(t), null
    case 19:
      if (($(H), (o = t.memoizedState), o === null)) return de(t), null
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) rr(o, !1)
        else {
          if (te !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = to(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    rr(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                              })),
                    (n = n.sibling)
                return B(H, (H.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          o.tail !== null &&
            Z() > $n &&
            ((t.flags |= 128), (r = !0), rr(o, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = to(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              rr(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !s.alternate && !W)
            )
              return de(t), null
          } else
            2 * Z() - o.renderingStartTime > $n &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), rr(o, !1), (t.lanes = 4194304))
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s))
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Z()),
          (t.sibling = null),
          (n = H.current),
          B(H, r ? (n & 1) | 2 : n & 1),
          t)
        : (de(t), null)
    case 22:
    case 23:
      return (
        wa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ee & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : de(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(k(156, t.tag))
}
function Tg (e, t) {
  switch ((ea(t), t.tag)) {
    case 1:
      return (
        Te(t.type) && Qi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        Bn(),
        $(Pe),
        $(ge),
        ua(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return aa(t), null
    case 13:
      if (($(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340))
        In()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return $(H), null
    case 4:
      return Bn(), null
    case 10:
      return ia(t.type._context), null
    case 22:
    case 23:
      return wa(), null
    case 24:
      return null
    default:
      return null
  }
}
var yi = !1,
  he = !1,
  Cg = typeof WeakSet == 'function' ? WeakSet : Set,
  V = null
function Pn (e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        Q(e, t, r)
      }
    else n.current = null
}
function ul (e, t, n) {
  try {
    n()
  } catch (r) {
    Q(e, t, r)
  }
}
var nc = !1
function Eg (e, t) {
  if (((Gs = Hi), (e = Mf()), Jl(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var i = r.anchorOffset,
            o = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, o.nodeType
          } catch {
            n = null
            break e
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            d = e,
            f = null
          t: for (;;) {
            for (
              var g;
              d !== n || (i !== 0 && d.nodeType !== 3) || (l = s + i),
                d !== o || (r !== 0 && d.nodeType !== 3) || (a = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (g = d.firstChild) !== null;

            )
              (f = d), (d = g)
            for (;;) {
              if (d === e) break t
              if (
                (f === n && ++u === i && (l = s),
                f === o && ++c === r && (a = s),
                (g = d.nextSibling) !== null)
              )
                break
              ;(d = f), (f = d.parentNode)
            }
            d = g
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (bs = { focusedElem: e, selectionRange: n }, Hi = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (V = e)
    else
      for (; V !== null; ) {
        t = V
        try {
          var y = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    P = y.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : $e(t.type, v),
                      P
                    )
                  p.__reactInternalSnapshotBeforeUpdate = h
                }
                break
              case 3:
                var m = t.stateNode.containerInfo
                m.nodeType === 1
                  ? (m.textContent = '')
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(k(163))
            }
        } catch (x) {
          Q(t, t.return, x)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (V = e)
          break
        }
        V = t.return
      }
  return (y = nc), (nc = !1), y
}
function vr (e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next)
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy
        ;(i.destroy = void 0), o !== void 0 && ul(t, n, o)
      }
      i = i.next
    } while (i !== r)
  }
}
function Eo (e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function cl (e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function Eh (e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), Eh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Xe], delete t[Rr], delete t[Xs], delete t[ag], delete t[ug])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function Ah (e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function rc (e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ah(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function dl (e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = bi))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (dl(e, t, n), e = e.sibling; e !== null; ) dl(e, t, n), (e = e.sibling)
}
function fl (e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (fl(e, t, n), e = e.sibling; e !== null; ) fl(e, t, n), (e = e.sibling)
}
var se = null,
  We = !1
function yt (e, t, n) {
  for (n = n.child; n !== null; ) Vh(e, t, n), (n = n.sibling)
}
function Vh (e, t, n) {
  if (Ze && typeof Ze.onCommitFiberUnmount == 'function')
    try {
      Ze.onCommitFiberUnmount(vo, n)
    } catch {}
  switch (n.tag) {
    case 5:
      he || Pn(n, t)
    case 6:
      var r = se,
        i = We
      ;(se = null),
        yt(e, t, n),
        (se = r),
        (We = i),
        se !== null &&
          (We
            ? ((e = se),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : se.removeChild(n.stateNode))
      break
    case 18:
      se !== null &&
        (We
          ? ((e = se),
            (n = n.stateNode),
            e.nodeType === 8
              ? ns(e.parentNode, n)
              : e.nodeType === 1 && ns(e, n),
            Nr(e))
          : ns(se, n.stateNode))
      break
    case 4:
      ;(r = se),
        (i = We),
        (se = n.stateNode.containerInfo),
        (We = !0),
        yt(e, t, n),
        (se = r),
        (We = i)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !he &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next
        do {
          var o = i,
            s = o.destroy
          ;(o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && ul(n, t, s),
            (i = i.next)
        } while (i !== r)
      }
      yt(e, t, n)
      break
    case 1:
      if (
        !he &&
        (Pn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (l) {
          Q(n, t, l)
        }
      yt(e, t, n)
      break
    case 21:
      yt(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((he = (r = he) || n.memoizedState !== null), yt(e, t, n), (he = r))
        : yt(e, t, n)
      break
    default:
      yt(e, t, n)
  }
}
function ic (e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new Cg()),
      t.forEach(function (r) {
        var i = _g.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(i, i))
      })
  }
}
function Ue (e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r]
      try {
        var o = e,
          s = t,
          l = s
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ;(se = l.stateNode), (We = !1)
              break e
            case 3:
              ;(se = l.stateNode.containerInfo), (We = !0)
              break e
            case 4:
              ;(se = l.stateNode.containerInfo), (We = !0)
              break e
          }
          l = l.return
        }
        if (se === null) throw Error(k(160))
        Vh(o, s, i), (se = null), (We = !1)
        var a = i.alternate
        a !== null && (a.return = null), (i.return = null)
      } catch (u) {
        Q(i, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Nh(t, e), (t = t.sibling)
}
function Nh (e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ue(t, e), Qe(e), r & 4)) {
        try {
          vr(3, e, e.return), Eo(3, e)
        } catch (v) {
          Q(e, e.return, v)
        }
        try {
          vr(5, e, e.return)
        } catch (v) {
          Q(e, e.return, v)
        }
      }
      break
    case 1:
      Ue(t, e), Qe(e), r & 512 && n !== null && Pn(n, n.return)
      break
    case 5:
      if (
        (Ue(t, e),
        Qe(e),
        r & 512 && n !== null && Pn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode
        try {
          Cr(i, '')
        } catch (v) {
          Q(e, e.return, v)
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue
        if (((e.updateQueue = null), a !== null))
          try {
            l === 'input' && o.type === 'radio' && o.name != null && Xd(i, o),
              Fs(l, s)
            var u = Fs(l, o)
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                d = a[s + 1]
              c === 'style'
                ? tf(i, d)
                : c === 'dangerouslySetInnerHTML'
                ? qd(i, d)
                : c === 'children'
                ? Cr(i, d)
                : zl(i, c, d, u)
            }
            switch (l) {
              case 'input':
                Ls(i, o)
                break
              case 'textarea':
                Zd(i, o)
                break
              case 'select':
                var f = i._wrapperState.wasMultiple
                i._wrapperState.wasMultiple = !!o.multiple
                var g = o.value
                g != null
                  ? Mn(i, !!o.multiple, g, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Mn(i, !!o.multiple, o.defaultValue, !0)
                      : Mn(i, !!o.multiple, o.multiple ? [] : '', !1))
            }
            i[Rr] = o
          } catch (v) {
            Q(e, e.return, v)
          }
      }
      break
    case 6:
      if ((Ue(t, e), Qe(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162))
        ;(i = e.stateNode), (o = e.memoizedProps)
        try {
          i.nodeValue = o
        } catch (v) {
          Q(e, e.return, v)
        }
      }
      break
    case 3:
      if (
        (Ue(t, e), Qe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Nr(t.containerInfo)
        } catch (v) {
          Q(e, e.return, v)
        }
      break
    case 4:
      Ue(t, e), Qe(e)
      break
    case 13:
      Ue(t, e),
        Qe(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (va = Z())),
        r & 4 && ic(e)
      break
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((he = (u = he) || c), Ue(t, e), (he = u)) : Ue(t, e),
        Qe(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (V = e, c = e.child; c !== null; ) {
            for (d = V = c; V !== null; ) {
              switch (((f = V), (g = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  vr(4, f, f.return)
                  break
                case 1:
                  Pn(f, f.return)
                  var y = f.stateNode
                  if (typeof y.componentWillUnmount == 'function') {
                    ;(r = f), (n = f.return)
                    try {
                      ;(t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount()
                    } catch (v) {
                      Q(r, n, v)
                    }
                  }
                  break
                case 5:
                  Pn(f, f.return)
                  break
                case 22:
                  if (f.memoizedState !== null) {
                    sc(d)
                    continue
                  }
              }
              g !== null ? ((g.return = f), (V = g)) : sc(d)
            }
            c = c.sibling
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d
              try {
                ;(i = d.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((l = d.stateNode),
                      (a = d.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty('display')
                          ? a.display
                          : null),
                      (l.style.display = ef('display', s)))
              } catch (v) {
                Q(e, e.return, v)
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? '' : d.memoizedProps
              } catch (v) {
                Q(e, e.return, v)
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            ;(d.child.return = d), (d = d.child)
            continue
          }
          if (d === e) break e
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e
            c === d && (c = null), (d = d.return)
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling)
        }
      }
      break
    case 19:
      Ue(t, e), Qe(e), r & 4 && ic(e)
      break
    case 21:
      break
    default:
      Ue(t, e), Qe(e)
  }
}
function Qe (e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ah(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(k(160))
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode
          r.flags & 32 && (Cr(i, ''), (r.flags &= -33))
          var o = rc(e)
          fl(e, o, i)
          break
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = rc(e)
          dl(e, l, s)
          break
        default:
          throw Error(k(161))
      }
    } catch (a) {
      Q(e, e.return, a)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function Ag (e, t, n) {
  ;(V = e), Mh(e)
}
function Mh (e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var i = V,
      o = i.child
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || yi
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || he
        l = yi
        var u = he
        if (((yi = s), (he = a) && !u))
          for (V = i; V !== null; )
            (s = V),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? lc(i)
                : a !== null
                ? ((a.return = s), (V = a))
                : lc(i)
        for (; o !== null; ) (V = o), Mh(o), (o = o.sibling)
        ;(V = i), (yi = l), (he = u)
      }
      oc(e)
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (V = o)) : oc(e)
  }
}
function oc (e) {
  for (; V !== null; ) {
    var t = V
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              he || Eo(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !he)
                if (n === null) r.componentDidMount()
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : $e(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var o = t.updateQueue
              o !== null && Wu(t, o, r)
              break
            case 3:
              var s = t.updateQueue
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                Wu(t, s, n)
              }
              break
            case 5:
              var l = t.stateNode
              if (n === null && t.flags & 4) {
                n = l
                var a = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus()
                    break
                  case 'img':
                    a.src && (n.src = a.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate
                if (u !== null) {
                  var c = u.memoizedState
                  if (c !== null) {
                    var d = c.dehydrated
                    d !== null && Nr(d)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(k(163))
          }
        he || (t.flags & 512 && cl(t))
      } catch (f) {
        Q(t, t.return, f)
      }
    }
    if (t === e) {
      V = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (V = n)
      break
    }
    V = t.return
  }
}
function sc (e) {
  for (; V !== null; ) {
    var t = V
    if (t === e) {
      V = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (V = n)
      break
    }
    V = t.return
  }
}
function lc (e) {
  for (; V !== null; ) {
    var t = V
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            Eo(4, t)
          } catch (a) {
            Q(t, n, a)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var i = t.return
            try {
              r.componentDidMount()
            } catch (a) {
              Q(t, i, a)
            }
          }
          var o = t.return
          try {
            cl(t)
          } catch (a) {
            Q(t, o, a)
          }
          break
        case 5:
          var s = t.return
          try {
            cl(t)
          } catch (a) {
            Q(t, s, a)
          }
      }
    } catch (a) {
      Q(t, t.return, a)
    }
    if (t === e) {
      V = null
      break
    }
    var l = t.sibling
    if (l !== null) {
      ;(l.return = t.return), (V = l)
      break
    }
    V = t.return
  }
}
var Vg = Math.ceil,
  io = mt.ReactCurrentDispatcher,
  ga = mt.ReactCurrentOwner,
  Ie = mt.ReactCurrentBatchConfig,
  F = 0,
  oe = null,
  J = null,
  ae = 0,
  Ee = 0,
  Tn = zt(0),
  te = 0,
  Br = null,
  an = 0,
  Ao = 0,
  ya = 0,
  xr = null,
  Se = null,
  va = 0,
  $n = 1 / 0,
  tt = null,
  oo = !1,
  hl = null,
  Mt = null,
  vi = !1,
  Tt = null,
  so = 0,
  wr = 0,
  pl = null,
  ji = -1,
  Ri = 0
function ve () {
  return F & 6 ? Z() : ji !== -1 ? ji : (ji = Z())
}
function Lt (e) {
  return e.mode & 1
    ? F & 2 && ae !== 0
      ? ae & -ae
      : dg.transition !== null
      ? (Ri === 0 && (Ri = pf()), Ri)
      : ((e = I),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Sf(e.type))),
        e)
    : 1
}
function Ge (e, t, n, r) {
  if (50 < wr) throw ((wr = 0), (pl = null), Error(k(185)))
  br(e, n, r),
    (!(F & 2) || e !== oe) &&
      (e === oe && (!(F & 2) && (Ao |= n), te === 4 && kt(e, ae)),
      Ce(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && (($n = Z() + 500), Po && Bt()))
}
function Ce (e, t) {
  var n = e.callbackNode
  d0(e, t)
  var r = Wi(e, e === oe ? ae : 0)
  if (r === 0)
    n !== null && gu(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && gu(n), t === 1))
      e.tag === 0 ? cg(ac.bind(null, e)) : Bf(ac.bind(null, e)),
        sg(function () {
          !(F & 6) && Bt()
        }),
        (n = null)
    else {
      switch (mf(r)) {
        case 1:
          n = Hl
          break
        case 4:
          n = ff
          break
        case 16:
          n = $i
          break
        case 536870912:
          n = hf
          break
        default:
          n = $i
      }
      n = Ih(n, Lh.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function Lh (e, t) {
  if (((ji = -1), (Ri = 0), F & 6)) throw Error(k(327))
  var n = e.callbackNode
  if (_n() && e.callbackNode !== n) return null
  var r = Wi(e, e === oe ? ae : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = lo(e, r)
  else {
    t = r
    var i = F
    F |= 2
    var o = jh()
    ;(oe !== e || ae !== t) && ((tt = null), ($n = Z() + 500), tn(e, t))
    do
      try {
        Lg()
        break
      } catch (l) {
        Dh(e, l)
      }
    while (!0)
    ra(),
      (io.current = o),
      (F = i),
      J !== null ? (t = 0) : ((oe = null), (ae = 0), (t = te))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Us(e)), i !== 0 && ((r = i), (t = ml(e, i)))), t === 1)
    )
      throw ((n = Br), tn(e, 0), kt(e, r), Ce(e, Z()), n)
    if (t === 6) kt(e, r)
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Ng(i) &&
          ((t = lo(e, r)),
          t === 2 && ((o = Us(e)), o !== 0 && ((r = o), (t = ml(e, o)))),
          t === 1))
      )
        throw ((n = Br), tn(e, 0), kt(e, r), Ce(e, Z()), n)
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345))
        case 2:
          Qt(e, Se, tt)
          break
        case 3:
          if (
            (kt(e, r), (r & 130023424) === r && ((t = va + 500 - Z()), 10 < t))
          ) {
            if (Wi(e, 0) !== 0) break
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ve(), (e.pingedLanes |= e.suspendedLanes & i)
              break
            }
            e.timeoutHandle = Ys(Qt.bind(null, e, Se, tt), t)
            break
          }
          Qt(e, Se, tt)
          break
        case 4:
          if ((kt(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Ke(r)
            ;(o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o)
          }
          if (
            ((r = i),
            (r = Z() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Vg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ys(Qt.bind(null, e, Se, tt), r)
            break
          }
          Qt(e, Se, tt)
          break
        case 5:
          Qt(e, Se, tt)
          break
        default:
          throw Error(k(329))
      }
    }
  }
  return Ce(e, Z()), e.callbackNode === n ? Lh.bind(null, e) : null
}
function ml (e, t) {
  var n = xr
  return (
    e.current.memoizedState.isDehydrated && (tn(e, t).flags |= 256),
    (e = lo(e, t)),
    e !== 2 && ((t = Se), (Se = n), t !== null && gl(t)),
    e
  )
}
function gl (e) {
  Se === null ? (Se = e) : Se.push.apply(Se, e)
}
function Ng (e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot
          i = i.value
          try {
            if (!be(o(), i)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function kt (e, t) {
  for (
    t &= ~ya,
      t &= ~Ao,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ke(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function ac (e) {
  if (F & 6) throw Error(k(327))
  _n()
  var t = Wi(e, 0)
  if (!(t & 1)) return Ce(e, Z()), null
  var n = lo(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = Us(e)
    r !== 0 && ((t = r), (n = ml(e, r)))
  }
  if (n === 1) throw ((n = Br), tn(e, 0), kt(e, t), Ce(e, Z()), n)
  if (n === 6) throw Error(k(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Qt(e, Se, tt),
    Ce(e, Z()),
    null
  )
}
function xa (e, t) {
  var n = F
  F |= 1
  try {
    return e(t)
  } finally {
    ;(F = n), F === 0 && (($n = Z() + 500), Po && Bt())
  }
}
function un (e) {
  Tt !== null && Tt.tag === 0 && !(F & 6) && _n()
  var t = F
  F |= 1
  var n = Ie.transition,
    r = I
  try {
    if (((Ie.transition = null), (I = 1), e)) return e()
  } finally {
    ;(I = r), (Ie.transition = n), (F = t), !(F & 6) && Bt()
  }
}
function wa () {
  ;(Ee = Tn.current), $(Tn)
}
function tn (e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), og(n)), J !== null))
    for (n = J.return; n !== null; ) {
      var r = n
      switch ((ea(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && Qi()
          break
        case 3:
          Bn(), $(Pe), $(ge), ua()
          break
        case 5:
          aa(r)
          break
        case 4:
          Bn()
          break
        case 13:
          $(H)
          break
        case 19:
          $(H)
          break
        case 10:
          ia(r.type._context)
          break
        case 22:
        case 23:
          wa()
      }
      n = n.return
    }
  if (
    ((oe = e),
    (J = e = Dt(e.current, null)),
    (ae = Ee = t),
    (te = 0),
    (Br = null),
    (ya = Ao = an = 0),
    (Se = xr = null),
    Jt !== null)
  ) {
    for (t = 0; t < Jt.length; t++)
      if (((n = Jt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var i = r.next,
          o = n.pending
        if (o !== null) {
          var s = o.next
          ;(o.next = i), (r.next = s)
        }
        n.pending = r
      }
    Jt = null
  }
  return e
}
function Dh (e, t) {
  do {
    var n = J
    try {
      if ((ra(), (Mi.current = ro), no)) {
        for (var r = G.memoizedState; r !== null; ) {
          var i = r.queue
          i !== null && (i.pending = null), (r = r.next)
        }
        no = !1
      }
      if (
        ((ln = 0),
        (ie = ee = G = null),
        (yr = !1),
        (Or = 0),
        (ga.current = null),
        n === null || n.return === null)
      ) {
        ;(te = 1), (Br = t), (J = null)
        break
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          a = t
        if (
          ((t = ae),
          (l.flags |= 32768),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var u = a,
            c = l,
            d = c.tag
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null))
          }
          var g = Yu(s)
          if (g !== null) {
            ;(g.flags &= -257),
              Xu(g, s, l, o, t),
              g.mode & 1 && Qu(o, u, t),
              (t = g),
              (a = u)
            var y = t.updateQueue
            if (y === null) {
              var v = new Set()
              v.add(a), (t.updateQueue = v)
            } else y.add(a)
            break e
          } else {
            if (!(t & 1)) {
              Qu(o, u, t), Sa()
              break e
            }
            a = Error(k(426))
          }
        } else if (W && l.mode & 1) {
          var P = Yu(s)
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              Xu(P, s, l, o, t),
              ta(Un(a, l))
            break e
          }
        }
        ;(o = a = Un(a, l)),
          te !== 4 && (te = 2),
          xr === null ? (xr = [o]) : xr.push(o),
          (o = s)
        do {
          switch (o.tag) {
            case 3:
              ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
              var p = mh(o, a, t)
              $u(o, p)
              break e
            case 1:
              l = a
              var h = o.type,
                m = o.stateNode
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (m !== null &&
                    typeof m.componentDidCatch == 'function' &&
                    (Mt === null || !Mt.has(m))))
              ) {
                ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
                var x = gh(o, l, t)
                $u(o, x)
                break e
              }
          }
          o = o.return
        } while (o !== null)
      }
      _h(n)
    } catch (S) {
      ;(t = S), J === n && n !== null && (J = n = n.return)
      continue
    }
    break
  } while (!0)
}
function jh () {
  var e = io.current
  return (io.current = ro), e === null ? ro : e
}
function Sa () {
  ;(te === 0 || te === 3 || te === 2) && (te = 4),
    oe === null || (!(an & 268435455) && !(Ao & 268435455)) || kt(oe, ae)
}
function lo (e, t) {
  var n = F
  F |= 2
  var r = jh()
  ;(oe !== e || ae !== t) && ((tt = null), tn(e, t))
  do
    try {
      Mg()
      break
    } catch (i) {
      Dh(e, i)
    }
  while (!0)
  if ((ra(), (F = n), (io.current = r), J !== null)) throw Error(k(261))
  return (oe = null), (ae = 0), te
}
function Mg () {
  for (; J !== null; ) Rh(J)
}
function Lg () {
  for (; J !== null && !n0(); ) Rh(J)
}
function Rh (e) {
  var t = Oh(e.alternate, e, Ee)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? _h(e) : (J = t),
    (ga.current = null)
}
function _h (e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Tg(n, t)), n !== null)) {
        ;(n.flags &= 32767), (J = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(te = 6), (J = null)
        return
      }
    } else if (((n = Pg(n, t, Ee)), n !== null)) {
      J = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      J = t
      return
    }
    J = t = e
  } while (t !== null)
  te === 0 && (te = 5)
}
function Qt (e, t, n) {
  var r = I,
    i = Ie.transition
  try {
    ;(Ie.transition = null), (I = 1), Dg(e, t, n, r)
  } finally {
    ;(Ie.transition = i), (I = r)
  }
  return null
}
function Dg (e, t, n, r) {
  do _n()
  while (Tt !== null)
  if (F & 6) throw Error(k(327))
  n = e.finishedWork
  var i = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var o = n.lanes | n.childLanes
  if (
    (f0(e, o),
    e === oe && ((J = oe = null), (ae = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      vi ||
      ((vi = !0),
      Ih($i, function () {
        return _n(), null
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ;(o = Ie.transition), (Ie.transition = null)
    var s = I
    I = 1
    var l = F
    ;(F |= 4),
      (ga.current = null),
      Eg(e, n),
      Nh(n, e),
      J0(bs),
      (Hi = !!Gs),
      (bs = Gs = null),
      (e.current = n),
      Ag(n),
      r0(),
      (F = l),
      (I = s),
      (Ie.transition = o)
  } else e.current = n
  if (
    (vi && ((vi = !1), (Tt = e), (so = i)),
    (o = e.pendingLanes),
    o === 0 && (Mt = null),
    s0(n.stateNode),
    Ce(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest })
  if (oo) throw ((oo = !1), (e = hl), (hl = null), e)
  return (
    so & 1 && e.tag !== 0 && _n(),
    (o = e.pendingLanes),
    o & 1 ? (e === pl ? wr++ : ((wr = 0), (pl = e))) : (wr = 0),
    Bt(),
    null
  )
}
function _n () {
  if (Tt !== null) {
    var e = mf(so),
      t = Ie.transition,
      n = I
    try {
      if (((Ie.transition = null), (I = 16 > e ? 16 : e), Tt === null))
        var r = !1
      else {
        if (((e = Tt), (Tt = null), (so = 0), F & 6)) throw Error(k(331))
        var i = F
        for (F |= 4, V = e.current; V !== null; ) {
          var o = V,
            s = o.child
          if (V.flags & 16) {
            var l = o.deletions
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a]
                for (V = u; V !== null; ) {
                  var c = V
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vr(8, c, o)
                  }
                  var d = c.child
                  if (d !== null) (d.return = c), (V = d)
                  else
                    for (; V !== null; ) {
                      c = V
                      var f = c.sibling,
                        g = c.return
                      if ((Eh(c), c === u)) {
                        V = null
                        break
                      }
                      if (f !== null) {
                        ;(f.return = g), (V = f)
                        break
                      }
                      V = g
                    }
                }
              }
              var y = o.alternate
              if (y !== null) {
                var v = y.child
                if (v !== null) {
                  y.child = null
                  do {
                    var P = v.sibling
                    ;(v.sibling = null), (v = P)
                  } while (v !== null)
                }
              }
              V = o
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (V = s)
          else
            e: for (; V !== null; ) {
              if (((o = V), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    vr(9, o, o.return)
                }
              var p = o.sibling
              if (p !== null) {
                ;(p.return = o.return), (V = p)
                break e
              }
              V = o.return
            }
        }
        var h = e.current
        for (V = h; V !== null; ) {
          s = V
          var m = s.child
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (V = m)
          else
            e: for (s = h; V !== null; ) {
              if (((l = V), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Eo(9, l)
                  }
                } catch (S) {
                  Q(l, l.return, S)
                }
              if (l === s) {
                V = null
                break e
              }
              var x = l.sibling
              if (x !== null) {
                ;(x.return = l.return), (V = x)
                break e
              }
              V = l.return
            }
        }
        if (
          ((F = i), Bt(), Ze && typeof Ze.onPostCommitFiberRoot == 'function')
        )
          try {
            Ze.onPostCommitFiberRoot(vo, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(I = n), (Ie.transition = t)
    }
  }
  return !1
}
function uc (e, t, n) {
  ;(t = Un(n, t)),
    (t = mh(e, t, 1)),
    (e = Nt(e, t, 1)),
    (t = ve()),
    e !== null && (br(e, 1, t), Ce(e, t))
}
function Q (e, t, n) {
  if (e.tag === 3) uc(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        uc(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Mt === null || !Mt.has(r)))
        ) {
          ;(e = Un(n, e)),
            (e = gh(t, e, 1)),
            (t = Nt(t, e, 1)),
            (e = ve()),
            t !== null && (br(t, 1, e), Ce(t, e))
          break
        }
      }
      t = t.return
    }
}
function jg (e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = ve()),
    (e.pingedLanes |= e.suspendedLanes & n),
    oe === e &&
      (ae & n) === n &&
      (te === 4 || (te === 3 && (ae & 130023424) === ae && 500 > Z() - va)
        ? tn(e, 0)
        : (ya |= n)),
    Ce(e, t)
}
function Fh (e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ai), (ai <<= 1), !(ai & 130023424) && (ai = 4194304))
      : (t = 1))
  var n = ve()
  ;(e = ht(e, t)), e !== null && (br(e, t, n), Ce(e, n))
}
function Rg (e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), Fh(e, n)
}
function _g (e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState
      i !== null && (n = i.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(k(314))
  }
  r !== null && r.delete(t), Fh(e, n)
}
var Oh
Oh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pe.current) ke = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ke = !1), kg(e, t, n)
      ke = !!(e.flags & 131072)
    }
  else (ke = !1), W && t.flags & 1048576 && Uf(t, Zi, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      Di(e, t), (e = t.pendingProps)
      var i = On(t, ge.current)
      Rn(t, n), (i = da(null, t, r, e, i, n))
      var o = fa()
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Te(r) ? ((o = !0), Yi(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            sa(t),
            (i.updater = Co),
            (t.stateNode = i),
            (i._reactInternals = t),
            nl(t, r, e, n),
            (t = ol(null, t, r, !0, o, n)))
          : ((t.tag = 0), W && o && ql(t), ye(null, t, i, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (Di(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Og(r)),
          (e = $e(r, e)),
          i)
        ) {
          case 0:
            t = il(null, t, r, e, n)
            break e
          case 1:
            t = qu(null, t, r, e, n)
            break e
          case 11:
            t = Zu(null, t, r, e, n)
            break e
          case 14:
            t = Ju(null, t, r, $e(r.type, e), n)
            break e
        }
        throw Error(k(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        il(e, t, r, i, n)
      )
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        qu(e, t, r, i, n)
      )
    case 3:
      e: {
        if ((wh(t), e === null)) throw Error(k(387))
        ;(r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          bf(e, t),
          eo(t, r, null, n)
        var s = t.memoizedState
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            ;(i = Un(Error(k(423)), t)), (t = ec(e, t, r, n, i))
            break e
          } else if (r !== i) {
            ;(i = Un(Error(k(424)), t)), (t = ec(e, t, r, n, i))
            break e
          } else
            for (
              Ae = Vt(t.stateNode.containerInfo.firstChild),
                Ve = t,
                W = !0,
                He = null,
                n = Kf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((In(), r === i)) {
            t = pt(e, t, n)
            break e
          }
          ye(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Qf(t),
        e === null && qs(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Qs(r, i) ? (s = null) : o !== null && Qs(r, o) && (t.flags |= 32),
        xh(e, t),
        ye(e, t, s, n),
        t.child
      )
    case 6:
      return e === null && qs(t), null
    case 13:
      return Sh(e, t, n)
    case 4:
      return (
        la(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = zn(t, null, r, n)) : ye(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        Zu(e, t, r, i, n)
      )
    case 7:
      return ye(e, t, t.pendingProps, n), t.child
    case 8:
      return ye(e, t, t.pendingProps.children, n), t.child
    case 12:
      return ye(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          B(Ji, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (be(o.value, s)) {
            if (o.children === i.children && !Pe.current) {
              t = pt(e, t, n)
              break e
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies
              if (l !== null) {
                s = o.child
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      ;(a = st(-1, n & -n)), (a.tag = 2)
                      var u = o.updateQueue
                      if (u !== null) {
                        u = u.shared
                        var c = u.pending
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a)
                      }
                    }
                    ;(o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      el(o.return, n, t),
                      (l.lanes |= n)
                    break
                  }
                  a = a.next
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(k(341))
                ;(s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  el(s, n, t),
                  (s = o.sibling)
              } else s = o.child
              if (s !== null) s.return = o
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null
                    break
                  }
                  if (((o = s.sibling), o !== null)) {
                    ;(o.return = s.return), (s = o)
                    break
                  }
                  s = s.return
                }
              o = s
            }
        ye(e, t, i.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Rn(t, n),
        (i = ze(i)),
        (r = r(i)),
        (t.flags |= 1),
        ye(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (i = $e(r, t.pendingProps)),
        (i = $e(r.type, i)),
        Ju(e, t, r, i, n)
      )
    case 15:
      return yh(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        Di(e, t),
        (t.tag = 1),
        Te(r) ? ((e = !0), Yi(t)) : (e = !1),
        Rn(t, n),
        ph(t, r, i),
        nl(t, r, i, n),
        ol(null, t, r, !0, e, n)
      )
    case 19:
      return kh(e, t, n)
    case 22:
      return vh(e, t, n)
  }
  throw Error(k(156, t.tag))
}
function Ih (e, t) {
  return df(e, t)
}
function Fg (e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function Oe (e, t, n, r) {
  return new Fg(e, t, n, r)
}
function ka (e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function Og (e) {
  if (typeof e == 'function') return ka(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Ul)) return 11
    if (e === $l) return 14
  }
  return 2
}
function Dt (e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = Oe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function _i (e, t, n, r, i, o) {
  var s = 2
  if (((r = e), typeof e == 'function')) ka(e) && (s = 1)
  else if (typeof e == 'string') s = 5
  else
    e: switch (e) {
      case pn:
        return nn(n.children, i, o, t)
      case Bl:
        ;(s = 8), (i |= 8)
        break
      case Es:
        return (e = Oe(12, n, t, i | 2)), (e.elementType = Es), (e.lanes = o), e
      case As:
        return (e = Oe(13, n, t, i)), (e.elementType = As), (e.lanes = o), e
      case Vs:
        return (e = Oe(19, n, t, i)), (e.elementType = Vs), (e.lanes = o), e
      case bd:
        return Vo(n, i, o, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Kd:
              s = 10
              break e
            case Gd:
              s = 9
              break e
            case Ul:
              s = 11
              break e
            case $l:
              s = 14
              break e
            case xt:
              ;(s = 16), (r = null)
              break e
          }
        throw Error(k(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = Oe(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  )
}
function nn (e, t, n, r) {
  return (e = Oe(7, e, r, t)), (e.lanes = n), e
}
function Vo (e, t, n, r) {
  return (
    (e = Oe(22, e, r, t)),
    (e.elementType = bd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function cs (e, t, n) {
  return (e = Oe(6, e, null, t)), (e.lanes = n), e
}
function ds (e, t, n) {
  return (
    (t = Oe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }),
    t
  )
}
function Ig (e, t, n, r, i) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ko(0)),
    (this.expirationTimes = Ko(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ko(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null)
}
function Pa (e, t, n, r, i, o, s, l, a) {
  return (
    (e = new Ig(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Oe(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }),
    sa(o),
    e
  )
}
function zg (e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: hn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n
  }
}
function zh (e) {
  if (!e) return Rt
  e = e._reactInternals
  e: {
    if (dn(e) !== e || e.tag !== 1) throw Error(k(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (Te(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(k(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (Te(n)) return zf(e, n, t)
  }
  return t
}
function Bh (e, t, n, r, i, o, s, l, a) {
  return (
    (e = Pa(n, r, !0, e, i, o, s, l, a)),
    (e.context = zh(null)),
    (n = e.current),
    (r = ve()),
    (i = Lt(n)),
    (o = st(r, i)),
    (o.callback = t ?? null),
    Nt(n, o, i),
    (e.current.lanes = i),
    br(e, i, r),
    Ce(e, r),
    e
  )
}
function No (e, t, n, r) {
  var i = t.current,
    o = ve(),
    s = Lt(i)
  return (
    (n = zh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = st(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Nt(i, t, s)),
    e !== null && (Ge(e, i, s, o), Ni(e, i, s)),
    s
  )
}
function ao (e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function cc (e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Ta (e, t) {
  cc(e, t), (e = e.alternate) && cc(e, t)
}
function Bg () {
  return null
}
var Uh =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function Ca (e) {
  this._internalRoot = e
}
Mo.prototype.render = Ca.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(k(409))
  No(e, t, null, null)
}
Mo.prototype.unmount = Ca.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    un(function () {
      No(null, e, null, null)
    }),
      (t[ft] = null)
  }
}
function Mo (e) {
  this._internalRoot = e
}
Mo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = vf()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < St.length && t !== 0 && t < St[n].priority; n++);
    St.splice(n, 0, e), n === 0 && wf(e)
  }
}
function Ea (e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Lo (e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function dc () {}
function Ug (e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r
      r = function () {
        var u = ao(s)
        o.call(u)
      }
    }
    var s = Bh(t, r, e, 0, null, !1, !1, '', dc)
    return (
      (e._reactRootContainer = s),
      (e[ft] = s.current),
      Dr(e.nodeType === 8 ? e.parentNode : e),
      un(),
      s
    )
  }
  for (; (i = e.lastChild); ) e.removeChild(i)
  if (typeof r == 'function') {
    var l = r
    r = function () {
      var u = ao(a)
      l.call(u)
    }
  }
  var a = Pa(e, 0, !1, null, null, !1, !1, '', dc)
  return (
    (e._reactRootContainer = a),
    (e[ft] = a.current),
    Dr(e.nodeType === 8 ? e.parentNode : e),
    un(function () {
      No(t, a, n, r)
    }),
    a
  )
}
function Do (e, t, n, r, i) {
  var o = n._reactRootContainer
  if (o) {
    var s = o
    if (typeof i == 'function') {
      var l = i
      i = function () {
        var a = ao(s)
        l.call(a)
      }
    }
    No(t, s, e, i)
  } else s = Ug(n, t, e, i, r)
  return ao(s)
}
gf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = ar(t.pendingLanes)
        n !== 0 &&
          (Kl(t, n | 1), Ce(t, Z()), !(F & 6) && (($n = Z() + 500), Bt()))
      }
      break
    case 13:
      un(function () {
        var r = ht(e, 1)
        if (r !== null) {
          var i = ve()
          Ge(r, e, 1, i)
        }
      }),
        Ta(e, 1)
  }
}
Gl = function (e) {
  if (e.tag === 13) {
    var t = ht(e, 134217728)
    if (t !== null) {
      var n = ve()
      Ge(t, e, 134217728, n)
    }
    Ta(e, 134217728)
  }
}
yf = function (e) {
  if (e.tag === 13) {
    var t = Lt(e),
      n = ht(e, t)
    if (n !== null) {
      var r = ve()
      Ge(n, e, t, r)
    }
    Ta(e, t)
  }
}
vf = function () {
  return I
}
xf = function (e, t) {
  var n = I
  try {
    return (I = e), t()
  } finally {
    I = n
  }
}
Is = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Ls(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var i = ko(r)
            if (!i) throw Error(k(90))
            Yd(r), Ls(r, i)
          }
        }
      }
      break
    case 'textarea':
      Zd(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && Mn(e, !!n.multiple, t, !1)
  }
}
of = xa
sf = un
var $g = { usingClientEntryPoint: !1, Events: [Yr, vn, ko, nf, rf, xa] },
  ir = {
    findFiberByHostInstance: Zt,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom'
  },
  Wg = {
    bundleType: ir.bundleType,
    version: ir.version,
    rendererPackageName: ir.rendererPackageName,
    rendererConfig: ir.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: mt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = uf(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: ir.findFiberByHostInstance || Bg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426'
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var xi = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!xi.isDisabled && xi.supportsFiber)
    try {
      ;(vo = xi.inject(Wg)), (Ze = xi)
    } catch {}
}
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $g
Le.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Ea(t)) throw Error(k(200))
  return zg(e, t, null, n)
}
Le.createRoot = function (e, t) {
  if (!Ea(e)) throw Error(k(299))
  var n = !1,
    r = '',
    i = Uh
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Pa(e, 1, !1, null, null, n, !1, r, i)),
    (e[ft] = t.current),
    Dr(e.nodeType === 8 ? e.parentNode : e),
    new Ca(t)
  )
}
Le.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(k(188))
      : ((e = Object.keys(e).join(',')), Error(k(268, e)))
  return (e = uf(t)), (e = e === null ? null : e.stateNode), e
}
Le.flushSync = function (e) {
  return un(e)
}
Le.hydrate = function (e, t, n) {
  if (!Lo(t)) throw Error(k(200))
  return Do(null, e, t, !0, n)
}
Le.hydrateRoot = function (e, t, n) {
  if (!Ea(e)) throw Error(k(405))
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = '',
    s = Uh
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Bh(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[ft] = t.current),
    Dr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i)
  return new Mo(t)
}
Le.render = function (e, t, n) {
  if (!Lo(t)) throw Error(k(200))
  return Do(null, e, t, !1, n)
}
Le.unmountComponentAtNode = function (e) {
  if (!Lo(e)) throw Error(k(40))
  return e._reactRootContainer
    ? (un(function () {
        Do(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[ft] = null)
        })
      }),
      !0)
    : !1
}
Le.unstable_batchedUpdates = xa
Le.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Lo(n)) throw Error(k(200))
  if (e == null || e._reactInternals === void 0) throw Error(k(38))
  return Do(e, t, n, !1, r)
}
Le.version = '18.3.1-next-f1338f8080-20240426'
function $h () {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($h)
    } catch (e) {
      console.error(e)
    }
}
$h(), (Ud.exports = Le)
var Hg = Ud.exports,
  Wh,
  fc = Hg
;(Wh = fc.createRoot), fc.hydrateRoot
const Kg = () =>
  w.jsx('nav', {
    className: 'bg-transparent',
    children: w.jsxs('div', {
      className: 'container p-6 mx-auto',
      children: [
        w.jsx('a', {
          className:
            'block text-2xl font-bold text-center text-white lg:text-3xl hover:text-gray-300 my-8',
          href: '#',
          children: w.jsx('p', {
            className: 'lg:text-5xl text-4xl',
            children: "Suraj's Portfolio"
          })
        }),
        w.jsxs('div', {
          className:
            'flex items-center justify-center mt-6 text-gray-300 capitalize',
          children: [
            w.jsx('a', {
              href: 'https://www.linkedin.com/in/suraj-jadhav-9b4597292/',
              target: '_blank',
              className:
                'border-b-2 border-transparent hover:text-gray-50 hover:border-blue-500 mx-1.5 sm:mx-6',
              children: w.jsx('i', {
                className: 'fa-brands fa-linkedin text-2xl lg:text-4xl'
              })
            }),
            w.jsx('a', {
              href: 'https://github.com/surajj04',
              target: '_blank',
              className:
                'border-b-2 border-transparent hover:text-gray-50 hover:border-blue-500 mx-1.5 sm:mx-6',
              children: w.jsx('i', {
                className: 'fa-brands fa-github text-2xl lg:text-4xl'
              })
            }),
            w.jsx('a', {
              href: '#',
              className:
                'border-b-2 border-transparent hover:text-gray-50 hover:border-blue-500 mx-1.5 sm:mx-6',
              children: w.jsx('i', {
                className: 'fa-brands fa-instagram text-2xl lg:text-4xl'
              })
            }),
            w.jsx('a', {
              href: '#',
              className:
                'border-b-2 border-transparent hover:text-gray-50 hover:border-blue-500 mx-1.5 sm:mx-6',
              children: w.jsx('i', {
                className: 'fa-brands fa-x-twitter text-2xl lg:text-4xl'
              })
            })
          ]
        })
      ]
    })
  })
function Gg (e) {
  if (typeof Proxy > 'u') return e
  const t = new Map(),
    n = (...r) => e(...r)
  return new Proxy(n, {
    get: (r, i) => (i === 'create' ? e : (t.has(i) || t.set(i, e(i)), t.get(i)))
  })
}
function Ur (e) {
  return e !== null && typeof e == 'object' && typeof e.start == 'function'
}
const yl = e => Array.isArray(e)
function Hh (e, t) {
  if (!Array.isArray(t)) return !1
  const n = t.length
  if (n !== e.length) return !1
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1
  return !0
}
function $r (e) {
  return typeof e == 'string' || Array.isArray(e)
}
function hc (e) {
  const t = [{}, {}]
  return (
    e == null ||
      e.values.forEach((n, r) => {
        ;(t[0][r] = n.get()), (t[1][r] = n.getVelocity())
      }),
    t
  )
}
function Aa (e, t, n, r) {
  if (typeof t == 'function') {
    const [i, o] = hc(r)
    t = t(n !== void 0 ? n : e.custom, i, o)
  }
  if (
    (typeof t == 'string' && (t = e.variants && e.variants[t]),
    typeof t == 'function')
  ) {
    const [i, o] = hc(r)
    t = t(n !== void 0 ? n : e.custom, i, o)
  }
  return t
}
function jo (e, t, n) {
  const r = e.getProps()
  return Aa(r, t, n !== void 0 ? n : r.custom, e)
}
const Va = [
    'animate',
    'whileInView',
    'whileFocus',
    'whileHover',
    'whileTap',
    'whileDrag',
    'exit'
  ],
  Na = ['initial', ...Va],
  Zr = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY'
  ],
  Ut = new Set(Zr),
  lt = e => e * 1e3,
  at = e => e / 1e3,
  bg = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  Qg = e => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  }),
  Yg = { type: 'keyframes', duration: 0.8 },
  Xg = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Zg = (e, { keyframes: t }) =>
    t.length > 2 ? Yg : Ut.has(e) ? (e.startsWith('scale') ? Qg(t[1]) : bg) : Xg
function Ma (e, t) {
  return e ? e[t] || e.default || e : void 0
}
const Jg = { skipAnimations: !1, useManualTiming: !1 },
  qg = e => e !== null
function Ro (e, { repeat: t, repeatType: n = 'loop' }, r) {
  const i = e.filter(qg),
    o = t && n !== 'loop' && t % 2 === 1 ? 0 : i.length - 1
  return !o || r === void 0 ? i[o] : r
}
const me = e => e
function ey (e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1
  const o = new WeakSet()
  let s = { delta: 0, timestamp: 0, isProcessing: !1 }
  function l (u) {
    o.has(u) && (a.schedule(u), e()), u(s)
  }
  const a = {
    schedule: (u, c = !1, d = !1) => {
      const g = d && r ? t : n
      return c && o.add(u), g.has(u) || g.add(u), u
    },
    cancel: u => {
      n.delete(u), o.delete(u)
    },
    process: u => {
      if (((s = u), r)) {
        i = !0
        return
      }
      ;(r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(l),
        (r = !1),
        i && ((i = !1), a.process(u))
    }
  }
  return a
}
const wi = [
    'read',
    'resolveKeyframes',
    'update',
    'preRender',
    'render',
    'postRender'
  ],
  ty = 40
function Kh (e, t) {
  let n = !1,
    r = !0
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    s = wi.reduce((p, h) => ((p[h] = ey(o)), p), {}),
    {
      read: l,
      resolveKeyframes: a,
      update: u,
      preRender: c,
      render: d,
      postRender: f
    } = s,
    g = () => {
      const p = performance.now()
      ;(n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, ty), 1)),
        (i.timestamp = p),
        (i.isProcessing = !0),
        l.process(i),
        a.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(g))
    },
    y = () => {
      ;(n = !0), (r = !0), i.isProcessing || e(g)
    }
  return {
    schedule: wi.reduce((p, h) => {
      const m = s[h]
      return (p[h] = (x, S = !1, C = !1) => (n || y(), m.schedule(x, S, C))), p
    }, {}),
    cancel: p => {
      for (let h = 0; h < wi.length; h++) s[wi[h]].cancel(p)
    },
    state: i,
    steps: s
  }
}
const {
    schedule: z,
    cancel: _t,
    state: le,
    steps: fs
  } = Kh(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : me, !0),
  Gh = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  ny = 1e-7,
  ry = 12
function iy (e, t, n, r, i) {
  let o,
    s,
    l = 0
  do (s = t + (n - t) / 2), (o = Gh(s, r, i) - e), o > 0 ? (n = s) : (t = s)
  while (Math.abs(o) > ny && ++l < ry)
  return s
}
function Jr (e, t, n, r) {
  if (e === t && n === r) return me
  const i = o => iy(o, 0, 1, e, n)
  return o => (o === 0 || o === 1 ? o : Gh(i(o), t, r))
}
const bh = e => t => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Qh = e => t => 1 - e(1 - t),
  Yh = Jr(0.33, 1.53, 0.69, 0.99),
  La = Qh(Yh),
  Xh = bh(La),
  Zh = e =>
    (e *= 2) < 1 ? 0.5 * La(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Da = e => 1 - Math.sin(Math.acos(e)),
  Jh = Qh(Da),
  qh = bh(Da),
  ep = e => /^0[^.\s]+$/u.test(e)
function oy (e) {
  return typeof e == 'number'
    ? e === 0
    : e !== null
    ? e === 'none' || e === '0' || ep(e)
    : !0
}
let vl = me
const tp = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  np = e => t => typeof t == 'string' && t.startsWith(e),
  rp = np('--'),
  sy = np('var(--'),
  ja = e => (sy(e) ? ly.test(e.split('/*')[0].trim()) : !1),
  ly =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  ay = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
function uy (e) {
  const t = ay.exec(e)
  if (!t) return [,]
  const [, n, r, i] = t
  return [`--${n ?? r}`, i]
}
function ip (e, t, n = 1) {
  const [r, i] = uy(e)
  if (!r) return
  const o = window.getComputedStyle(t).getPropertyValue(r)
  if (o) {
    const s = o.trim()
    return tp(s) ? parseFloat(s) : s
  }
  return ja(i) ? ip(i, t, n + 1) : i
}
const Ft = (e, t, n) => (n > t ? t : n < e ? e : n),
  Yn = {
    test: e => typeof e == 'number',
    parse: parseFloat,
    transform: e => e
  },
  Wr = { ...Yn, transform: e => Ft(0, 1, e) },
  Si = { ...Yn, default: 1 },
  qr = e => ({
    test: t =>
      typeof t == 'string' && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
  }),
  vt = qr('deg'),
  qe = qr('%'),
  N = qr('px'),
  cy = qr('vh'),
  dy = qr('vw'),
  pc = {
    ...qe,
    parse: e => qe.parse(e) / 100,
    transform: e => qe.transform(e * 100)
  },
  fy = new Set([
    'width',
    'height',
    'top',
    'left',
    'right',
    'bottom',
    'x',
    'y',
    'translateX',
    'translateY'
  ]),
  mc = e => e === Yn || e === N,
  gc = (e, t) => parseFloat(e.split(', ')[t]),
  yc =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === 'none' || !r) return 0
      const i = r.match(/^matrix3d\((.+)\)$/u)
      if (i) return gc(i[1], t)
      {
        const o = r.match(/^matrix\((.+)\)$/u)
        return o ? gc(o[1], e) : 0
      }
    },
  hy = new Set(['x', 'y', 'z']),
  py = Zr.filter(e => !hy.has(e))
function my (e) {
  const t = []
  return (
    py.forEach(n => {
      const r = e.getValue(n)
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith('scale') ? 1 : 0))
    }),
    t
  )
}
const Wn = {
  width: ({ x: e }, { paddingLeft: t = '0', paddingRight: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = '0', paddingBottom: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: yc(4, 13),
  y: yc(5, 14)
}
Wn.translateX = Wn.x
Wn.translateY = Wn.y
const op = e => t => t.test(e),
  gy = { test: e => e === 'auto', parse: e => e },
  sp = [Yn, N, qe, vt, dy, cy, gy],
  vc = e => sp.find(op(e)),
  rn = new Set()
let xl = !1,
  wl = !1
function lp () {
  if (wl) {
    const e = Array.from(rn).filter(r => r.needsMeasurement),
      t = new Set(e.map(r => r.element)),
      n = new Map()
    t.forEach(r => {
      const i = my(r)
      i.length && (n.set(r, i), r.render())
    }),
      e.forEach(r => r.measureInitialState()),
      t.forEach(r => {
        r.render()
        const i = n.get(r)
        i &&
          i.forEach(([o, s]) => {
            var l
            ;(l = r.getValue(o)) === null || l === void 0 || l.set(s)
          })
      }),
      e.forEach(r => r.measureEndState()),
      e.forEach(r => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
      })
  }
  ;(wl = !1), (xl = !1), rn.forEach(e => e.complete()), rn.clear()
}
function ap () {
  rn.forEach(e => {
    e.readKeyframes(), e.needsMeasurement && (wl = !0)
  })
}
function yy () {
  ap(), lp()
}
class Ra {
  constructor (t, n, r, i, o, s = !1) {
    ;(this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = s)
  }
  scheduleResolve () {
    ;(this.isScheduled = !0),
      this.isAsync
        ? (rn.add(this), xl || ((xl = !0), z.read(ap), z.resolveKeyframes(lp)))
        : (this.readKeyframes(), this.complete())
  }
  readKeyframes () {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const s = i == null ? void 0 : i.get(),
            l = t[t.length - 1]
          if (s !== void 0) t[0] = s
          else if (r && n) {
            const a = r.readValue(n, l)
            a != null && (t[0] = a)
          }
          t[0] === void 0 && (t[0] = l), i && s === void 0 && i.set(t[0])
        } else t[o] = t[o - 1]
  }
  setFinalKeyframe () {}
  measureInitialState () {}
  renderEndStyles () {}
  measureEndState () {}
  complete () {
    ;(this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      rn.delete(this)
  }
  cancel () {
    this.isComplete || ((this.isScheduled = !1), rn.delete(this))
  }
  resume () {
    this.isComplete || this.scheduleResolve()
  }
}
const Sr = e => Math.round(e * 1e5) / 1e5,
  _a = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
function vy (e) {
  return e == null
}
const xy =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Fa = (e, t) => n =>
    !!(
      (typeof n == 'string' && xy.test(n) && n.startsWith(e)) ||
      (t && !vy(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  up = (e, t, n) => r => {
    if (typeof r != 'string') return r
    const [i, o, s, l] = r.match(_a)
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: l !== void 0 ? parseFloat(l) : 1
    }
  },
  wy = e => Ft(0, 255, e),
  hs = { ...Yn, transform: e => Math.round(wy(e)) },
  en = {
    test: Fa('rgb', 'red'),
    parse: up('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      'rgba(' +
      hs.transform(e) +
      ', ' +
      hs.transform(t) +
      ', ' +
      hs.transform(n) +
      ', ' +
      Sr(Wr.transform(r)) +
      ')'
  }
function Sy (e) {
  let t = '',
    n = '',
    r = '',
    i = ''
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1
    }
  )
}
const Sl = { test: Fa('#'), parse: Sy, transform: en.transform },
  Cn = {
    test: Fa('hsl', 'hue'),
    parse: up('hue', 'saturation', 'lightness'),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      'hsla(' +
      Math.round(e) +
      ', ' +
      qe.transform(Sr(t)) +
      ', ' +
      qe.transform(Sr(n)) +
      ', ' +
      Sr(Wr.transform(r)) +
      ')'
  },
  fe = {
    test: e => en.test(e) || Sl.test(e) || Cn.test(e),
    parse: e =>
      en.test(e) ? en.parse(e) : Cn.test(e) ? Cn.parse(e) : Sl.parse(e),
    transform: e =>
      typeof e == 'string'
        ? e
        : e.hasOwnProperty('red')
        ? en.transform(e)
        : Cn.transform(e)
  },
  ky =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
function Py (e) {
  var t, n
  return (
    isNaN(e) &&
    typeof e == 'string' &&
    (((t = e.match(_a)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(ky)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  )
}
const cp = 'number',
  dp = 'color',
  Ty = 'var',
  Cy = 'var(',
  xc = '${}',
  Ey =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu
function Hr (e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = []
  let o = 0
  const l = t
    .replace(
      Ey,
      a => (
        fe.test(a)
          ? (r.color.push(o), i.push(dp), n.push(fe.parse(a)))
          : a.startsWith(Cy)
          ? (r.var.push(o), i.push(Ty), n.push(a))
          : (r.number.push(o), i.push(cp), n.push(parseFloat(a))),
        ++o,
        xc
      )
    )
    .split(xc)
  return { values: n, split: l, indexes: r, types: i }
}
function fp (e) {
  return Hr(e).values
}
function hp (e) {
  const { split: t, types: n } = Hr(e),
    r = t.length
  return i => {
    let o = ''
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        const l = n[s]
        l === cp
          ? (o += Sr(i[s]))
          : l === dp
          ? (o += fe.transform(i[s]))
          : (o += i[s])
      }
    return o
  }
}
const Ay = e => (typeof e == 'number' ? 0 : e)
function Vy (e) {
  const t = fp(e)
  return hp(e)(t.map(Ay))
}
const Ot = {
    test: Py,
    parse: fp,
    createTransformer: hp,
    getAnimatableNone: Vy
  },
  Ny = new Set(['brightness', 'contrast', 'saturate', 'opacity'])
function My (e) {
  const [t, n] = e.slice(0, -1).split('(')
  if (t === 'drop-shadow') return e
  const [r] = n.match(_a) || []
  if (!r) return e
  const i = n.replace(r, '')
  let o = Ny.has(t) ? 1 : 0
  return r !== n && (o *= 100), t + '(' + o + i + ')'
}
const Ly = /\b([a-z-]*)\(.*?\)/gu,
  kl = {
    ...Ot,
    getAnimatableNone: e => {
      const t = e.match(Ly)
      return t ? t.map(My).join(' ') : e
    }
  },
  Dy = {
    borderWidth: N,
    borderTopWidth: N,
    borderRightWidth: N,
    borderBottomWidth: N,
    borderLeftWidth: N,
    borderRadius: N,
    radius: N,
    borderTopLeftRadius: N,
    borderTopRightRadius: N,
    borderBottomRightRadius: N,
    borderBottomLeftRadius: N,
    width: N,
    maxWidth: N,
    height: N,
    maxHeight: N,
    top: N,
    right: N,
    bottom: N,
    left: N,
    padding: N,
    paddingTop: N,
    paddingRight: N,
    paddingBottom: N,
    paddingLeft: N,
    margin: N,
    marginTop: N,
    marginRight: N,
    marginBottom: N,
    marginLeft: N,
    backgroundPositionX: N,
    backgroundPositionY: N
  },
  jy = {
    rotate: vt,
    rotateX: vt,
    rotateY: vt,
    rotateZ: vt,
    scale: Si,
    scaleX: Si,
    scaleY: Si,
    scaleZ: Si,
    skew: vt,
    skewX: vt,
    skewY: vt,
    distance: N,
    translateX: N,
    translateY: N,
    translateZ: N,
    x: N,
    y: N,
    z: N,
    perspective: N,
    transformPerspective: N,
    opacity: Wr,
    originX: pc,
    originY: pc,
    originZ: N
  },
  wc = { ...Yn, transform: Math.round },
  Oa = {
    ...Dy,
    ...jy,
    zIndex: wc,
    size: N,
    fillOpacity: Wr,
    strokeOpacity: Wr,
    numOctaves: wc
  },
  Ry = {
    ...Oa,
    color: fe,
    backgroundColor: fe,
    outlineColor: fe,
    fill: fe,
    stroke: fe,
    borderColor: fe,
    borderTopColor: fe,
    borderRightColor: fe,
    borderBottomColor: fe,
    borderLeftColor: fe,
    filter: kl,
    WebkitFilter: kl
  },
  Ia = e => Ry[e]
function pp (e, t) {
  let n = Ia(e)
  return (
    n !== kl && (n = Ot), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  )
}
const _y = new Set(['auto', 'none', '0'])
function Fy (e, t, n) {
  let r = 0,
    i
  for (; r < e.length && !i; ) {
    const o = e[r]
    typeof o == 'string' && !_y.has(o) && Hr(o).values.length && (i = e[r]), r++
  }
  if (i && n) for (const o of t) e[o] = pp(n, i)
}
class mp extends Ra {
  constructor (t, n, r, i, o) {
    super(t, n, r, i, o, !0)
  }
  readKeyframes () {
    const { unresolvedKeyframes: t, element: n, name: r } = this
    if (!n || !n.current) return
    super.readKeyframes()
    for (let a = 0; a < t.length; a++) {
      let u = t[a]
      if (typeof u == 'string' && ((u = u.trim()), ja(u))) {
        const c = ip(u, n.current)
        c !== void 0 && (t[a] = c),
          a === t.length - 1 && (this.finalKeyframe = u)
      }
    }
    if ((this.resolveNoneKeyframes(), !fy.has(r) || t.length !== 2)) return
    const [i, o] = t,
      s = vc(i),
      l = vc(o)
    if (s !== l)
      if (mc(s) && mc(l))
        for (let a = 0; a < t.length; a++) {
          const u = t[a]
          typeof u == 'string' && (t[a] = parseFloat(u))
        }
      else this.needsMeasurement = !0
  }
  resolveNoneKeyframes () {
    const { unresolvedKeyframes: t, name: n } = this,
      r = []
    for (let i = 0; i < t.length; i++) oy(t[i]) && r.push(i)
    r.length && Fy(t, r, n)
  }
  measureInitialState () {
    const { element: t, unresolvedKeyframes: n, name: r } = this
    if (!t || !t.current) return
    r === 'height' && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Wn[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin)
    const i = n[n.length - 1]
    i !== void 0 && t.getValue(r, i).jump(i, !1)
  }
  measureEndState () {
    var t
    const { element: n, name: r, unresolvedKeyframes: i } = this
    if (!n || !n.current) return
    const o = n.getValue(r)
    o && o.jump(this.measuredOrigin, !1)
    const s = i.length - 1,
      l = i[s]
    ;(i[s] = Wn[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([a, u]) => {
          n.getValue(a).set(u)
        }),
      this.resolveNoneKeyframes()
  }
}
function za (e) {
  return typeof e == 'function'
}
let Fi
function Oy () {
  Fi = void 0
}
const et = {
    now: () => (
      Fi === void 0 &&
        et.set(
          le.isProcessing || Jg.useManualTiming
            ? le.timestamp
            : performance.now()
        ),
      Fi
    ),
    set: e => {
      ;(Fi = e), queueMicrotask(Oy)
    }
  },
  Sc = (e, t) =>
    t === 'zIndex'
      ? !1
      : !!(
          typeof e == 'number' ||
          Array.isArray(e) ||
          (typeof e == 'string' &&
            (Ot.test(e) || e === '0') &&
            !e.startsWith('url('))
        )
function Iy (e) {
  const t = e[0]
  if (e.length === 1) return !0
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0
}
function zy (e, t, n, r) {
  const i = e[0]
  if (i === null) return !1
  if (t === 'display' || t === 'visibility') return !0
  const o = e[e.length - 1],
    s = Sc(i, t),
    l = Sc(o, t)
  return !s || !l ? !1 : Iy(e) || ((n === 'spring' || za(n)) && r)
}
const By = 40
class gp {
  constructor ({
    autoplay: t = !0,
    delay: n = 0,
    type: r = 'keyframes',
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: s = 'loop',
    ...l
  }) {
    ;(this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = et.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: o,
        repeatType: s,
        ...l
      }),
      this.updateFinishedPromise()
  }
  calcStartTime () {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > By
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt
  }
  get resolved () {
    return !this._resolved && !this.hasAttemptedResolve && yy(), this._resolved
  }
  onKeyframesResolved (t, n) {
    ;(this.resolvedAt = et.now()), (this.hasAttemptedResolve = !0)
    const {
      name: r,
      type: i,
      velocity: o,
      delay: s,
      onComplete: l,
      onUpdate: a,
      isGenerator: u
    } = this.options
    if (!u && !zy(t, r, i, o))
      if (s) this.options.duration = 0
      else {
        a == null || a(Ro(t, this.options, n)),
          l == null || l(),
          this.resolveFinishedPromise()
        return
      }
    const c = this.initPlayback(t, n)
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved())
  }
  onPostResolved () {}
  then (t, n) {
    return this.currentFinishedPromise.then(t, n)
  }
  updateFinishedPromise () {
    this.currentFinishedPromise = new Promise(t => {
      this.resolveFinishedPromise = t
    })
  }
}
function yp (e, t) {
  return t ? e * (1e3 / t) : 0
}
const Uy = 5
function vp (e, t, n) {
  const r = Math.max(t - Uy, 0)
  return yp(n - e(r), t - r)
}
const ps = 0.001,
  $y = 0.01,
  Wy = 10,
  Hy = 0.05,
  Ky = 1
function Gy ({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1
}) {
  let i,
    o,
    s = 1 - t
  ;(s = Ft(Hy, Ky, s)),
    (e = Ft($y, Wy, at(e))),
    s < 1
      ? ((i = u => {
          const c = u * s,
            d = c * e,
            f = c - n,
            g = Pl(u, s),
            y = Math.exp(-d)
          return ps - (f / g) * y
        }),
        (o = u => {
          const d = u * s * e,
            f = d * n + n,
            g = Math.pow(s, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-d),
            v = Pl(Math.pow(u, 2), s)
          return ((-i(u) + ps > 0 ? -1 : 1) * ((f - g) * y)) / v
        }))
      : ((i = u => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1
          return -ps + c * d
        }),
        (o = u => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e)
          return c * d
        }))
  const l = 5 / e,
    a = Qy(i, o, l)
  if (((e = lt(e)), isNaN(a)))
    return { stiffness: 100, damping: 10, duration: e }
  {
    const u = Math.pow(a, 2) * r
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e }
  }
}
const by = 12
function Qy (e, t, n) {
  let r = n
  for (let i = 1; i < by; i++) r = r - e(r) / t(r)
  return r
}
function Pl (e, t) {
  return e * Math.sqrt(1 - t * t)
}
const Yy = ['duration', 'bounce'],
  Xy = ['stiffness', 'damping', 'mass']
function kc (e, t) {
  return t.some(n => e[n] !== void 0)
}
function Zy (e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  }
  if (!kc(e, Xy) && kc(e, Yy)) {
    const n = Gy(e)
    ;(t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0)
  }
  return t
}
function xp ({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: l,
      damping: a,
      mass: u,
      duration: c,
      velocity: d,
      isResolvedFromDuration: f
    } = Zy({ ...r, velocity: -at(r.velocity || 0) }),
    g = d || 0,
    y = a / (2 * Math.sqrt(l * u)),
    v = o - i,
    P = at(Math.sqrt(l / u)),
    p = Math.abs(v) < 5
  n || (n = p ? 0.01 : 2), t || (t = p ? 0.005 : 0.5)
  let h
  if (y < 1) {
    const m = Pl(P, y)
    h = x => {
      const S = Math.exp(-y * P * x)
      return (
        o - S * (((g + y * P * v) / m) * Math.sin(m * x) + v * Math.cos(m * x))
      )
    }
  } else if (y === 1) h = m => o - Math.exp(-P * m) * (v + (g + P * v) * m)
  else {
    const m = P * Math.sqrt(y * y - 1)
    h = x => {
      const S = Math.exp(-y * P * x),
        C = Math.min(m * x, 300)
      return (
        o - (S * ((g + y * P * v) * Math.sinh(C) + m * v * Math.cosh(C))) / m
      )
    }
  }
  return {
    calculatedDuration: (f && c) || null,
    next: m => {
      const x = h(m)
      if (f) s.done = m >= c
      else {
        let S = 0
        y < 1 && (S = m === 0 ? lt(g) : vp(h, m, x))
        const C = Math.abs(S) <= n,
          A = Math.abs(o - x) <= t
        s.done = C && A
      }
      return (s.value = s.done ? o : x), s
    }
  }
}
function Pc ({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: l,
  max: a,
  restDelta: u = 0.5,
  restSpeed: c
}) {
  const d = e[0],
    f = { done: !1, value: d },
    g = T => (l !== void 0 && T < l) || (a !== void 0 && T > a),
    y = T =>
      l === void 0
        ? a
        : a === void 0 || Math.abs(l - T) < Math.abs(a - T)
        ? l
        : a
  let v = n * t
  const P = d + v,
    p = s === void 0 ? P : s(P)
  p !== P && (v = p - d)
  const h = T => -v * Math.exp(-T / r),
    m = T => p + h(T),
    x = T => {
      const _ = h(T),
        M = m(T)
      ;(f.done = Math.abs(_) <= u), (f.value = f.done ? p : M)
    }
  let S, C
  const A = T => {
    g(f.value) &&
      ((S = T),
      (C = xp({
        keyframes: [f.value, y(f.value)],
        velocity: vp(m, T, f.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c
      })))
  }
  return (
    A(0),
    {
      calculatedDuration: null,
      next: T => {
        let _ = !1
        return (
          !C && S === void 0 && ((_ = !0), x(T), A(T)),
          S !== void 0 && T >= S ? C.next(T - S) : (!_ && x(T), f)
        )
      }
    }
  )
}
const Jy = Jr(0.42, 0, 1, 1),
  qy = Jr(0, 0, 0.58, 1),
  wp = Jr(0.42, 0, 0.58, 1),
  ev = e => Array.isArray(e) && typeof e[0] != 'number',
  Ba = e => Array.isArray(e) && typeof e[0] == 'number',
  Tc = {
    linear: me,
    easeIn: Jy,
    easeInOut: wp,
    easeOut: qy,
    circIn: Da,
    circInOut: qh,
    circOut: Jh,
    backIn: La,
    backInOut: Xh,
    backOut: Yh,
    anticipate: Zh
  },
  Cc = e => {
    if (Ba(e)) {
      vl(e.length === 4)
      const [t, n, r, i] = e
      return Jr(t, n, r, i)
    } else if (typeof e == 'string') return vl(Tc[e] !== void 0), Tc[e]
    return e
  },
  tv = (e, t) => n => t(e(n)),
  ut = (...e) => e.reduce(tv),
  Hn = (e, t, n) => {
    const r = t - e
    return r === 0 ? 1 : (n - e) / r
  },
  K = (e, t, n) => e + (t - e) * n
function ms (e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  )
}
function nv ({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ;(e /= 360), (t /= 100), (n /= 100)
  let i = 0,
    o = 0,
    s = 0
  if (!t) i = o = s = n
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l
    ;(i = ms(a, l, e + 1 / 3)), (o = ms(a, l, e)), (s = ms(a, l, e - 1 / 3))
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r
  }
}
function uo (e, t) {
  return n => (n > 0 ? t : e)
}
const gs = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r
    return i < 0 ? 0 : Math.sqrt(i)
  },
  rv = [Sl, en, Cn],
  iv = e => rv.find(t => t.test(e))
function Ec (e) {
  const t = iv(e)
  if (!t) return !1
  let n = t.parse(e)
  return t === Cn && (n = nv(n)), n
}
const Ac = (e, t) => {
    const n = Ec(e),
      r = Ec(t)
    if (!n || !r) return uo(e, t)
    const i = { ...n }
    return o => (
      (i.red = gs(n.red, r.red, o)),
      (i.green = gs(n.green, r.green, o)),
      (i.blue = gs(n.blue, r.blue, o)),
      (i.alpha = K(n.alpha, r.alpha, o)),
      en.transform(i)
    )
  },
  Tl = new Set(['none', 'hidden'])
function ov (e, t) {
  return Tl.has(e) ? n => (n <= 0 ? e : t) : n => (n >= 1 ? t : e)
}
function sv (e, t) {
  return n => K(e, t, n)
}
function Ua (e) {
  return typeof e == 'number'
    ? sv
    : typeof e == 'string'
    ? ja(e)
      ? uo
      : fe.test(e)
      ? Ac
      : uv
    : Array.isArray(e)
    ? Sp
    : typeof e == 'object'
    ? fe.test(e)
      ? Ac
      : lv
    : uo
}
function Sp (e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => Ua(o)(o, t[s]))
  return o => {
    for (let s = 0; s < r; s++) n[s] = i[s](o)
    return n
  }
}
function lv (e, t) {
  const n = { ...e, ...t },
    r = {}
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Ua(e[i])(e[i], t[i]))
  return i => {
    for (const o in r) n[o] = r[o](i)
    return n
  }
}
function av (e, t) {
  var n
  const r = [],
    i = { color: 0, var: 0, number: 0 }
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o],
      l = e.indexes[s][i[s]],
      a = (n = e.values[l]) !== null && n !== void 0 ? n : 0
    ;(r[o] = a), i[s]++
  }
  return r
}
const uv = (e, t) => {
  const n = Ot.createTransformer(t),
    r = Hr(e),
    i = Hr(t)
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Tl.has(e) && !i.values.length) || (Tl.has(t) && !r.values.length)
      ? ov(e, t)
      : ut(Sp(av(r, i), i.values), n)
    : uo(e, t)
}
function kp (e, t, n) {
  return typeof e == 'number' && typeof t == 'number' && typeof n == 'number'
    ? K(e, t, n)
    : Ua(e)(e, t)
}
function cv (e, t, n) {
  const r = [],
    i = n || kp,
    o = e.length - 1
  for (let s = 0; s < o; s++) {
    let l = i(e[s], e[s + 1])
    if (t) {
      const a = Array.isArray(t) ? t[s] || me : t
      l = ut(a, l)
    }
    r.push(l)
  }
  return r
}
function dv (e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length
  if ((vl(o === t.length), o === 1)) return () => t[0]
  if (o === 2 && e[0] === e[1]) return () => t[1]
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()))
  const s = cv(t, r, i),
    l = s.length,
    a = u => {
      let c = 0
      if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = Hn(e[c], e[c + 1], u)
      return s[c](d)
    }
  return n ? u => a(Ft(e[0], e[o - 1], u)) : a
}
function fv (e, t) {
  const n = e[e.length - 1]
  for (let r = 1; r <= t; r++) {
    const i = Hn(0, t, r)
    e.push(K(n, 1, i))
  }
}
function hv (e) {
  const t = [0]
  return fv(t, e.length - 1), t
}
function pv (e, t) {
  return e.map(n => n * t)
}
function mv (e, t) {
  return e.map(() => t || wp).splice(0, e.length - 1)
}
function co ({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = 'easeInOut'
}) {
  const i = ev(r) ? r.map(Cc) : Cc(r),
    o = { done: !1, value: t[0] },
    s = pv(n && n.length === t.length ? n : hv(t), e),
    l = dv(s, t, { ease: Array.isArray(i) ? i : mv(t, i) })
  return {
    calculatedDuration: e,
    next: a => ((o.value = l(a)), (o.done = a >= e), o)
  }
}
const Vc = 2e4
function gv (e) {
  let t = 0
  const n = 50
  let r = e.next(t)
  for (; !r.done && t < Vc; ) (t += n), (r = e.next(t))
  return t >= Vc ? 1 / 0 : t
}
const yv = e => {
    const t = ({ timestamp: n }) => e(n)
    return {
      start: () => z.update(t, !0),
      stop: () => _t(t),
      now: () => (le.isProcessing ? le.timestamp : et.now())
    }
  },
  vv = { decay: Pc, inertia: Pc, tween: co, keyframes: co, spring: xp },
  xv = e => e / 100
class $a extends gp {
  constructor (t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = 'running'),
      (this.startTime = null),
      (this.state = 'idle'),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle')
        )
          return
        this.teardown()
        const { onStop: a } = this.options
        a && a()
      })
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options,
      s = (i == null ? void 0 : i.KeyframeResolver) || Ra,
      l = (a, u) => this.onKeyframesResolved(a, u)
    ;(this.resolver = new s(o, l, n, r, i)), this.resolver.scheduleResolve()
  }
  initPlayback (t) {
    const {
        type: n = 'keyframes',
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: o,
        velocity: s = 0
      } = this.options,
      l = za(n) ? n : vv[n] || co
    let a, u
    l !== co &&
      typeof t[0] != 'number' &&
      ((a = ut(xv, kp(t[0], t[1]))), (t = [0, 100]))
    const c = l({ ...this.options, keyframes: t })
    o === 'mirror' &&
      (u = l({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      c.calculatedDuration === null && (c.calculatedDuration = gv(c))
    const { calculatedDuration: d } = c,
      f = d + i,
      g = f * (r + 1) - i
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: a,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: g
    }
  }
  onPostResolved () {
    const { autoplay: t = !0 } = this.options
    this.play(),
      this.pendingPlayState === 'paused' || !t
        ? this.pause()
        : (this.state = this.pendingPlayState)
  }
  tick (t, n = !1) {
    const { resolved: r } = this
    if (!r) {
      const { keyframes: T } = this.options
      return { done: !0, value: T[T.length - 1] }
    }
    const {
      finalKeyframe: i,
      generator: o,
      mirroredGenerator: s,
      mapPercentToKeyframes: l,
      keyframes: a,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: d
    } = r
    if (this.startTime === null) return o.next(0)
    const {
      delay: f,
      repeat: g,
      repeatType: y,
      repeatDelay: v,
      onUpdate: P
    } = this.options
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed)
    const p = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? p < 0 : p > c
    ;(this.currentTime = Math.max(p, 0)),
      this.state === 'finished' &&
        this.holdTime === null &&
        (this.currentTime = c)
    let m = this.currentTime,
      x = o
    if (g) {
      const T = Math.min(this.currentTime, c) / d
      let _ = Math.floor(T),
        M = T % 1
      !M && T >= 1 && (M = 1),
        M === 1 && _--,
        (_ = Math.min(_, g + 1)),
        !!(_ % 2) &&
          (y === 'reverse'
            ? ((M = 1 - M), v && (M -= v / d))
            : y === 'mirror' && (x = s)),
        (m = Ft(0, 1, M) * d)
    }
    const S = h ? { done: !1, value: a[0] } : x.next(m)
    l && (S.value = l(S.value))
    let { done: C } = S
    !h &&
      u !== null &&
      (C = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0)
    const A =
      this.holdTime === null &&
      (this.state === 'finished' || (this.state === 'running' && C))
    return (
      A && i !== void 0 && (S.value = Ro(a, this.options, i)),
      P && P(S.value),
      A && this.finish(),
      S
    )
  }
  get duration () {
    const { resolved: t } = this
    return t ? at(t.calculatedDuration) : 0
  }
  get time () {
    return at(this.currentTime)
  }
  set time (t) {
    ;(t = lt(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed)
  }
  get speed () {
    return this.playbackSpeed
  }
  set speed (t) {
    const n = this.playbackSpeed !== t
    ;(this.playbackSpeed = t), n && (this.time = at(this.currentTime))
  }
  play () {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = 'running'
      return
    }
    if (this.isStopped) return
    const { driver: t = yv, onPlay: n, startTime: r } = this.options
    this.driver || (this.driver = t(o => this.tick(o))), n && n()
    const i = this.driver.now()
    this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
      ? this.state === 'finished' && (this.startTime = i)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === 'finished' && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = 'running'),
      this.driver.start()
  }
  pause () {
    var t
    if (!this._resolved) {
      this.pendingPlayState = 'paused'
      return
    }
    ;(this.state = 'paused'),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0)
  }
  complete () {
    this.state !== 'running' && this.play(),
      (this.pendingPlayState = this.state = 'finished'),
      (this.holdTime = null)
  }
  finish () {
    this.teardown(), (this.state = 'finished')
    const { onComplete: t } = this.options
    t && t()
  }
  cancel () {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise()
  }
  teardown () {
    ;(this.state = 'idle'),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel()
  }
  stopDriver () {
    this.driver && (this.driver.stop(), (this.driver = void 0))
  }
  sample (t) {
    return (this.startTime = 0), this.tick(t, !0)
  }
}
const Pp = new Set(['opacity', 'clipPath', 'filter', 'transform']),
  wv = 10,
  Sv = (e, t) => {
    let n = ''
    const r = Math.max(Math.round(t / wv), 2)
    for (let i = 0; i < r; i++) n += e(Hn(0, r - 1, i)) + ', '
    return `linear(${n.substring(0, n.length - 2)})`
  }
function Wa (e) {
  let t
  return () => (t === void 0 && (t = e()), t)
}
const kv = { linearEasing: void 0 }
function Pv (e, t) {
  const n = Wa(e)
  return () => {
    var r
    return (r = kv[t]) !== null && r !== void 0 ? r : n()
  }
}
const fo = Pv(() => {
  try {
    document
      .createElement('div')
      .animate({ opacity: 0 }, { easing: 'linear(0, 1)' })
  } catch {
    return !1
  }
  return !0
}, 'linearEasing')
function Tp (e) {
  return !!(
    (typeof e == 'function' && fo()) ||
    !e ||
    (typeof e == 'string' && (e in Cl || fo())) ||
    Ba(e) ||
    (Array.isArray(e) && e.every(Tp))
  )
}
const cr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Cl = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: cr([0, 0.65, 0.55, 1]),
    circOut: cr([0.55, 0, 1, 0.45]),
    backIn: cr([0.31, 0.01, 0.66, -0.59]),
    backOut: cr([0.33, 1.53, 0.69, 0.99])
  }
function Cp (e, t) {
  if (e)
    return typeof e == 'function' && fo()
      ? Sv(e, t)
      : Ba(e)
      ? cr(e)
      : Array.isArray(e)
      ? e.map(n => Cp(n, t) || Cl.easeOut)
      : Cl[e]
}
function Tv (
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = 'loop',
    ease: l,
    times: a
  } = {}
) {
  const u = { [t]: n }
  a && (u.offset = a)
  const c = Cp(l, i)
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? 'linear' : c,
      fill: 'both',
      iterations: o + 1,
      direction: s === 'reverse' ? 'alternate' : 'normal'
    })
  )
}
function Nc (e, t) {
  ;(e.timeline = t), (e.onfinish = null)
}
const Cv = Wa(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
  ho = 10,
  Ev = 2e4
function Av (e) {
  return za(e.type) || e.type === 'spring' || !Tp(e.ease)
}
function Vv (e, t) {
  const n = new $a({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 })
  let r = { done: !1, value: e[0] }
  const i = []
  let o = 0
  for (; !r.done && o < Ev; ) (r = n.sample(o)), i.push(r.value), (o += ho)
  return { times: void 0, keyframes: i, duration: o - ho, ease: 'linear' }
}
const Ep = { anticipate: Zh, backInOut: Xh, circInOut: qh }
function Nv (e) {
  return e in Ep
}
class Mc extends gp {
  constructor (t) {
    super(t)
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options
    ;(this.resolver = new mp(
      o,
      (s, l) => this.onKeyframesResolved(s, l),
      n,
      r,
      i
    )),
      this.resolver.scheduleResolve()
  }
  initPlayback (t, n) {
    var r
    let {
      duration: i = 300,
      times: o,
      ease: s,
      type: l,
      motionValue: a,
      name: u,
      startTime: c
    } = this.options
    if (!(!((r = a.owner) === null || r === void 0) && r.current)) return !1
    if (
      (typeof s == 'string' && fo() && Nv(s) && (s = Ep[s]), Av(this.options))
    ) {
      const {
          onComplete: f,
          onUpdate: g,
          motionValue: y,
          element: v,
          ...P
        } = this.options,
        p = Vv(t, P)
      ;(t = p.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = p.duration),
        (o = p.times),
        (s = p.ease),
        (l = 'keyframes')
    }
    const d = Tv(a.owner.current, u, t, {
      ...this.options,
      duration: i,
      times: o,
      ease: s
    })
    return (
      (d.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Nc(d, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (d.onfinish = () => {
            const { onComplete: f } = this.options
            a.set(Ro(t, this.options, n)),
              f && f(),
              this.cancel(),
              this.resolveFinishedPromise()
          }),
      { animation: d, duration: i, times: o, type: l, ease: s, keyframes: t }
    )
  }
  get duration () {
    const { resolved: t } = this
    if (!t) return 0
    const { duration: n } = t
    return at(n)
  }
  get time () {
    const { resolved: t } = this
    if (!t) return 0
    const { animation: n } = t
    return at(n.currentTime || 0)
  }
  set time (t) {
    const { resolved: n } = this
    if (!n) return
    const { animation: r } = n
    r.currentTime = lt(t)
  }
  get speed () {
    const { resolved: t } = this
    if (!t) return 1
    const { animation: n } = t
    return n.playbackRate
  }
  set speed (t) {
    const { resolved: n } = this
    if (!n) return
    const { animation: r } = n
    r.playbackRate = t
  }
  get state () {
    const { resolved: t } = this
    if (!t) return 'idle'
    const { animation: n } = t
    return n.playState
  }
  get startTime () {
    const { resolved: t } = this
    if (!t) return null
    const { animation: n } = t
    return n.startTime
  }
  attachTimeline (t) {
    if (!this._resolved) this.pendingTimeline = t
    else {
      const { resolved: n } = this
      if (!n) return me
      const { animation: r } = n
      Nc(r, t)
    }
    return me
  }
  play () {
    if (this.isStopped) return
    const { resolved: t } = this
    if (!t) return
    const { animation: n } = t
    n.playState === 'finished' && this.updateFinishedPromise(), n.play()
  }
  pause () {
    const { resolved: t } = this
    if (!t) return
    const { animation: n } = t
    n.pause()
  }
  stop () {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle'))
      return
    this.resolveFinishedPromise(), this.updateFinishedPromise()
    const { resolved: t } = this
    if (!t) return
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: o,
      ease: s,
      times: l
    } = t
    if (n.playState === 'idle' || n.playState === 'finished') return
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: d,
          element: f,
          ...g
        } = this.options,
        y = new $a({
          ...g,
          keyframes: r,
          duration: i,
          type: o,
          ease: s,
          times: l,
          isGenerator: !0
        }),
        v = lt(this.time)
      u.setWithVelocity(y.sample(v - ho).value, y.sample(v).value, ho)
    }
    const { onStop: a } = this.options
    a && a(), this.cancel()
  }
  complete () {
    const { resolved: t } = this
    t && t.animation.finish()
  }
  cancel () {
    const { resolved: t } = this
    t && t.animation.cancel()
  }
  static supports (t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: o,
      damping: s,
      type: l
    } = t
    return (
      Cv() &&
      r &&
      Pp.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      o !== 'mirror' &&
      s !== 0 &&
      l !== 'inertia'
    )
  }
}
const Mv = Wa(() => window.ScrollTimeline !== void 0)
class Lv {
  constructor (t) {
    ;(this.stop = () => this.runAll('stop')),
      (this.animations = t.filter(Boolean))
  }
  then (t, n) {
    return Promise.all(this.animations).then(t).catch(n)
  }
  getAll (t) {
    return this.animations[0][t]
  }
  setAll (t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n
  }
  attachTimeline (t, n) {
    const r = this.animations.map(i =>
      Mv() && i.attachTimeline ? i.attachTimeline(t) : n(i)
    )
    return () => {
      r.forEach((i, o) => {
        i && i(), this.animations[o].stop()
      })
    }
  }
  get time () {
    return this.getAll('time')
  }
  set time (t) {
    this.setAll('time', t)
  }
  get speed () {
    return this.getAll('speed')
  }
  set speed (t) {
    this.setAll('speed', t)
  }
  get startTime () {
    return this.getAll('startTime')
  }
  get duration () {
    let t = 0
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration)
    return t
  }
  runAll (t) {
    this.animations.forEach(n => n[t]())
  }
  play () {
    this.runAll('play')
  }
  pause () {
    this.runAll('pause')
  }
  cancel () {
    this.runAll('cancel')
  }
  complete () {
    this.runAll('complete')
  }
}
function Dv ({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: l,
  from: a,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length
}
const Ha =
    (e, t, n, r = {}, i, o) =>
    s => {
      const l = Ma(r, e) || {},
        a = l.delay || r.delay || 0
      let { elapsed: u = 0 } = r
      u = u - lt(a)
      let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: 'easeOut',
        velocity: t.getVelocity(),
        ...l,
        delay: -u,
        onUpdate: f => {
          t.set(f), l.onUpdate && l.onUpdate(f)
        },
        onComplete: () => {
          s(), l.onComplete && l.onComplete()
        },
        name: e,
        motionValue: t,
        element: o ? void 0 : i
      }
      Dv(l) || (c = { ...c, ...Zg(e, c) }),
        c.duration && (c.duration = lt(c.duration)),
        c.repeatDelay && (c.repeatDelay = lt(c.repeatDelay)),
        c.from !== void 0 && (c.keyframes[0] = c.from)
      let d = !1
      if (
        ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
          ((c.duration = 0), c.delay === 0 && (d = !0)),
        d && !o && t.get() !== void 0)
      ) {
        const f = Ro(c.keyframes, l)
        if (f !== void 0)
          return (
            z.update(() => {
              c.onUpdate(f), c.onComplete()
            }),
            new Lv([])
          )
      }
      return !o && Mc.supports(c) ? new Mc(c) : new $a(c)
    },
  jv = e => !!(e && typeof e == 'object' && e.mix && e.toValue),
  Rv = e => (yl(e) ? e[e.length - 1] || 0 : e)
function Ka (e, t) {
  e.indexOf(t) === -1 && e.push(t)
}
function Ga (e, t) {
  const n = e.indexOf(t)
  n > -1 && e.splice(n, 1)
}
class ba {
  constructor () {
    this.subscriptions = []
  }
  add (t) {
    return Ka(this.subscriptions, t), () => Ga(this.subscriptions, t)
  }
  notify (t, n, r) {
    const i = this.subscriptions.length
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r)
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o]
          s && s(t, n, r)
        }
  }
  getSize () {
    return this.subscriptions.length
  }
  clear () {
    this.subscriptions.length = 0
  }
}
const Lc = 30,
  _v = e => !isNaN(parseFloat(e))
class Fv {
  constructor (t, n = {}) {
    ;(this.version = '11.11.3'),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const o = et.now()
        this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current)
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner)
  }
  setCurrent (t) {
    ;(this.current = t),
      (this.updatedAt = et.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = _v(this.current))
  }
  setPrevFrameValue (t = this.current) {
    ;(this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt)
  }
  onChange (t) {
    return this.on('change', t)
  }
  on (t, n) {
    this.events[t] || (this.events[t] = new ba())
    const r = this.events[t].add(n)
    return t === 'change'
      ? () => {
          r(),
            z.read(() => {
              this.events.change.getSize() || this.stop()
            })
        }
      : r
  }
  clearListeners () {
    for (const t in this.events) this.events[t].clear()
  }
  attach (t, n) {
    ;(this.passiveEffect = t), (this.stopPassiveEffect = n)
  }
  set (t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify)
  }
  setWithVelocity (t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r)
  }
  jump (t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect()
  }
  get () {
    return this.current
  }
  getPrevious () {
    return this.prev
  }
  getVelocity () {
    const t = et.now()
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Lc
    )
      return 0
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Lc)
    return yp(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
  }
  start (t) {
    return (
      this.stop(),
      new Promise(n => {
        ;(this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify()
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation()
      })
    )
  }
  stop () {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation()
  }
  isAnimating () {
    return !!this.animation
  }
  clearAnimation () {
    delete this.animation
  }
  destroy () {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect()
  }
}
function Kr (e, t) {
  return new Fv(e, t)
}
function Ov (e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Kr(n))
}
function Iv (e, t) {
  const n = jo(e, t)
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {}
  o = { ...o, ...r }
  for (const s in o) {
    const l = Rv(o[s])
    Ov(e, s, l)
  }
}
const _o = e => e.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
  zv = 'framerAppearId',
  Ap = 'data-' + _o(zv)
function Vp (e) {
  return e.props[Ap]
}
const pe = e => !!(e && e.getVelocity)
function Bv (e) {
  return !!(pe(e) && e.add)
}
function Np (e) {
  if (Ut.has(e)) return 'transform'
  if (Pp.has(e)) return _o(e)
}
function El (e, t) {
  var n
  if (!e.applyWillChange) return
  const r = e.getValue('willChange')
  if (Bv(r)) return r.add(t)
  !(!((n = e.props.style) === null || n === void 0) && n.willChange) &&
    Np(t) &&
    e.setStaticValue('willChange', 'transform')
}
function Uv ({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0
  return (t[n] = !1), r
}
function Mp (e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o
  let { transition: s = e.getDefaultTransition(), transitionEnd: l, ...a } = t
  r && (s = r)
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i]
  for (const d in a) {
    const f = e.getValue(
        d,
        (o = e.latestValues[d]) !== null && o !== void 0 ? o : null
      ),
      g = a[d]
    if (g === void 0 || (c && Uv(c, d))) continue
    const y = { delay: n, ...Ma(s || {}, d) }
    let v = !1
    if (window.MotionHandoffAnimation) {
      const p = Vp(e)
      if (p) {
        const h = window.MotionHandoffAnimation(p, d, z)
        h !== null && ((y.startTime = h), (v = !0))
      }
    }
    El(e, d),
      f.start(
        Ha(d, f, g, e.shouldReduceMotion && Ut.has(d) ? { type: !1 } : y, e, v)
      )
    const P = f.animation
    P && u.push(P)
  }
  return (
    l &&
      Promise.all(u).then(() => {
        z.update(() => {
          l && Iv(e, l)
        })
      }),
    u
  )
}
function Al (e, t, n = {}) {
  var r
  const i = jo(
    e,
    t,
    n.type === 'exit'
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  )
  let { transition: o = e.getDefaultTransition() || {} } = i || {}
  n.transitionOverride && (o = n.transitionOverride)
  const s = i ? () => Promise.all(Mp(e, i, n)) : () => Promise.resolve(),
    l =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f
            } = o
            return $v(e, t, c + u, d, f, n)
          }
        : () => Promise.resolve(),
    { when: a } = o
  if (a) {
    const [u, c] = a === 'beforeChildren' ? [s, l] : [l, s]
    return u().then(() => c())
  } else return Promise.all([s(), l(n.delay)])
}
function $v (e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    l = (e.variantChildren.size - 1) * r,
    a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r
  return (
    Array.from(e.variantChildren)
      .sort(Wv)
      .forEach((u, c) => {
        u.notify('AnimationStart', t),
          s.push(
            Al(u, t, { ...o, delay: n + a(c) }).then(() =>
              u.notify('AnimationComplete', t)
            )
          )
      }),
    Promise.all(s)
  )
}
function Wv (e, t) {
  return e.sortNodePosition(t)
}
function Hv (e, t, n = {}) {
  e.notify('AnimationStart', t)
  let r
  if (Array.isArray(t)) {
    const i = t.map(o => Al(e, o, n))
    r = Promise.all(i)
  } else if (typeof t == 'string') r = Al(e, t, n)
  else {
    const i = typeof t == 'function' ? jo(e, t, n.custom) : t
    r = Promise.all(Mp(e, i, n))
  }
  return r.then(() => {
    e.notify('AnimationComplete', t)
  })
}
const Kv = Na.length
function Lp (e) {
  if (!e) return
  if (!e.isControllingVariants) {
    const n = e.parent ? Lp(e.parent) || {} : {}
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n
  }
  const t = {}
  for (let n = 0; n < Kv; n++) {
    const r = Na[n],
      i = e.props[r]
    ;($r(i) || i === !1) && (t[r] = i)
  }
  return t
}
const Gv = [...Va].reverse(),
  bv = Va.length
function Qv (e) {
  return t => Promise.all(t.map(({ animation: n, options: r }) => Hv(e, n, r)))
}
function Yv (e) {
  let t = Qv(e),
    n = Dc(),
    r = !0
  const i = a => (u, c) => {
    var d
    const f = jo(
      e,
      c,
      a === 'exit'
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0
    )
    if (f) {
      const { transition: g, transitionEnd: y, ...v } = f
      u = { ...u, ...v, ...y }
    }
    return u
  }
  function o (a) {
    t = a(e)
  }
  function s (a) {
    const { props: u } = e,
      c = Lp(e.parent) || {},
      d = [],
      f = new Set()
    let g = {},
      y = 1 / 0
    for (let P = 0; P < bv; P++) {
      const p = Gv[P],
        h = n[p],
        m = u[p] !== void 0 ? u[p] : c[p],
        x = $r(m),
        S = p === a ? h.isActive : null
      S === !1 && (y = P)
      let C = m === c[p] && m !== u[p] && x
      if (
        (C && r && e.manuallyAnimateOnMount && (C = !1),
        (h.protectedKeys = { ...g }),
        (!h.isActive && S === null) ||
          (!m && !h.prevProp) ||
          Ur(m) ||
          typeof m == 'boolean')
      )
        continue
      const A = Xv(h.prevProp, m)
      let T = A || (p === a && h.isActive && !C && x) || (P > y && x),
        _ = !1
      const M = Array.isArray(m) ? m : [m]
      let ne = M.reduce(i(p), {})
      S === !1 && (ne = {})
      const { prevResolvedValues: gt = {} } = h,
        Wt = { ...gt, ...ne },
        Xn = q => {
          ;(T = !0),
            f.has(q) && ((_ = !0), f.delete(q)),
            (h.needsAnimating[q] = !0)
          const E = e.getValue(q)
          E && (E.liveStyle = !1)
        }
      for (const q in Wt) {
        const E = ne[q],
          L = gt[q]
        if (g.hasOwnProperty(q)) continue
        let j = !1
        yl(E) && yl(L) ? (j = !Hh(E, L)) : (j = E !== L),
          j
            ? E != null
              ? Xn(q)
              : f.add(q)
            : E !== void 0 && f.has(q)
            ? Xn(q)
            : (h.protectedKeys[q] = !0)
      }
      ;(h.prevProp = m),
        (h.prevResolvedValues = ne),
        h.isActive && (g = { ...g, ...ne }),
        r && e.blockInitialAnimation && (T = !1),
        T &&
          (!(C && A) || _) &&
          d.push(...M.map(q => ({ animation: q, options: { type: p } })))
    }
    if (f.size) {
      const P = {}
      f.forEach(p => {
        const h = e.getBaseTarget(p),
          m = e.getValue(p)
        m && (m.liveStyle = !0), (P[p] = h ?? null)
      }),
        d.push({ animation: P })
    }
    let v = !!d.length
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (v = !1),
      (r = !1),
      v ? t(d) : Promise.resolve()
    )
  }
  function l (a, u) {
    var c
    if (n[a].isActive === u) return Promise.resolve()
    ;(c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach(f => {
        var g
        return (g = f.animationState) === null || g === void 0
          ? void 0
          : g.setActive(a, u)
      }),
      (n[a].isActive = u)
    const d = s(a)
    for (const f in n) n[f].protectedKeys = {}
    return d
  }
  return {
    animateChanges: s,
    setActive: l,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      ;(n = Dc()), (r = !0)
    }
  }
}
function Xv (e, t) {
  return typeof t == 'string' ? t !== e : Array.isArray(t) ? !Hh(t, e) : !1
}
function Gt (e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  }
}
function Dc () {
  return {
    animate: Gt(!0),
    whileInView: Gt(),
    whileHover: Gt(),
    whileTap: Gt(),
    whileDrag: Gt(),
    whileFocus: Gt(),
    exit: Gt()
  }
}
class $t {
  constructor (t) {
    ;(this.isMounted = !1), (this.node = t)
  }
  update () {}
}
class Zv extends $t {
  constructor (t) {
    super(t), t.animationState || (t.animationState = Yv(t))
  }
  updateAnimationControlsSubscription () {
    const { animate: t } = this.node.getProps()
    Ur(t) && (this.unmountControls = t.subscribe(this.node))
  }
  mount () {
    this.updateAnimationControlsSubscription()
  }
  update () {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {}
    t !== n && this.updateAnimationControlsSubscription()
  }
  unmount () {
    var t
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this)
  }
}
let Jv = 0
class qv extends $t {
  constructor () {
    super(...arguments), (this.id = Jv++)
  }
  update () {
    if (!this.node.presenceContext) return
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {}
    if (!this.node.animationState || t === r) return
    const i = this.node.animationState.setActive('exit', !t)
    n && !t && i.then(() => n(this.id))
  }
  mount () {
    const { register: t } = this.node.presenceContext || {}
    t && (this.unmount = t(this.id))
  }
  unmount () {}
}
const e1 = { animation: { Feature: Zv }, exit: { Feature: qv } },
  Dp = e =>
    e.pointerType === 'mouse'
      ? typeof e.button != 'number' || e.button <= 0
      : e.isPrimary !== !1
function Fo (e, t = 'page') {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } }
}
const t1 = e => t => Dp(t) && e(t, Fo(t))
function ot (e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}
function ct (e, t, n, r) {
  return ot(e, t, t1(n), r)
}
const jc = (e, t) => Math.abs(e - t)
function n1 (e, t) {
  const n = jc(e.x, t.x),
    r = jc(e.y, t.y)
  return Math.sqrt(n ** 2 + r ** 2)
}
class jp {
  constructor (
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return
        const d = vs(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          g = n1(d.offset, { x: 0, y: 0 }) >= 3
        if (!f && !g) return
        const { point: y } = d,
          { timestamp: v } = le
        this.history.push({ ...y, timestamp: v })
        const { onStart: P, onMove: p } = this.handlers
        f ||
          (P && P(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, d)
      }),
      (this.handlePointerMove = (d, f) => {
        ;(this.lastMoveEvent = d),
          (this.lastMoveEventInfo = ys(f, this.transformPagePoint)),
          z.update(this.updatePoint, !0)
      }),
      (this.handlePointerUp = (d, f) => {
        this.end()
        const { onEnd: g, onSessionEnd: y, resumeAnimation: v } = this.handlers
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return
        const P = vs(
          d.type === 'pointercancel'
            ? this.lastMoveEventInfo
            : ys(f, this.transformPagePoint),
          this.history
        )
        this.startEvent && g && g(d, P), y && y(d, P)
      }),
      !Dp(t))
    )
      return
    ;(this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window)
    const s = Fo(t),
      l = ys(s, this.transformPagePoint),
      { point: a } = l,
      { timestamp: u } = le
    this.history = [{ ...a, timestamp: u }]
    const { onSessionStart: c } = n
    c && c(t, vs(l, this.history)),
      (this.removeListeners = ut(
        ct(this.contextWindow, 'pointermove', this.handlePointerMove),
        ct(this.contextWindow, 'pointerup', this.handlePointerUp),
        ct(this.contextWindow, 'pointercancel', this.handlePointerUp)
      ))
  }
  updateHandlers (t) {
    this.handlers = t
  }
  end () {
    this.removeListeners && this.removeListeners(), _t(this.updatePoint)
  }
}
function ys (e, t) {
  return t ? { point: t(e.point) } : e
}
function Rc (e, t) {
  return { x: e.x - t.x, y: e.y - t.y }
}
function vs ({ point: e }, t) {
  return {
    point: e,
    delta: Rc(e, Rp(t)),
    offset: Rc(e, r1(t)),
    velocity: i1(t, 0.1)
  }
}
function r1 (e) {
  return e[0]
}
function Rp (e) {
  return e[e.length - 1]
}
function i1 (e, t) {
  if (e.length < 2) return { x: 0, y: 0 }
  let n = e.length - 1,
    r = null
  const i = Rp(e)
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > lt(t))); ) n--
  if (!r) return { x: 0, y: 0 }
  const o = at(i.timestamp - r.timestamp)
  if (o === 0) return { x: 0, y: 0 }
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o }
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
}
function _p (e) {
  let t = null
  return () => {
    const n = () => {
      t = null
    }
    return t === null ? ((t = e), n) : !1
  }
}
const _c = _p('dragHorizontal'),
  Fc = _p('dragVertical')
function Fp (e) {
  let t = !1
  if (e === 'y') t = Fc()
  else if (e === 'x') t = _c()
  else {
    const n = _c(),
      r = Fc()
    n && r
      ? (t = () => {
          n(), r()
        })
      : (n && n(), r && r())
  }
  return t
}
function Op () {
  const e = Fp(!0)
  return e ? (e(), !1) : !0
}
function En (e) {
  return (
    e &&
    typeof e == 'object' &&
    Object.prototype.hasOwnProperty.call(e, 'current')
  )
}
const Ip = 1e-4,
  o1 = 1 - Ip,
  s1 = 1 + Ip,
  zp = 0.01,
  l1 = 0 - zp,
  a1 = 0 + zp
function Me (e) {
  return e.max - e.min
}
function u1 (e, t, n) {
  return Math.abs(e - t) <= n
}
function Oc (e, t, n, r = 0.5) {
  ;(e.origin = r),
    (e.originPoint = K(t.min, t.max, e.origin)),
    (e.scale = Me(n) / Me(t)),
    (e.translate = K(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= o1 && e.scale <= s1) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= l1 && e.translate <= a1) || isNaN(e.translate)) &&
      (e.translate = 0)
}
function kr (e, t, n, r) {
  Oc(e.x, t.x, n.x, r ? r.originX : void 0),
    Oc(e.y, t.y, n.y, r ? r.originY : void 0)
}
function Ic (e, t, n) {
  ;(e.min = n.min + t.min), (e.max = e.min + Me(t))
}
function c1 (e, t, n) {
  Ic(e.x, t.x, n.x), Ic(e.y, t.y, n.y)
}
function zc (e, t, n) {
  ;(e.min = t.min - n.min), (e.max = e.min + Me(t))
}
function Pr (e, t, n) {
  zc(e.x, t.x, n.x), zc(e.y, t.y, n.y)
}
function d1 (e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? K(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? K(n, e, r.max) : Math.min(e, n)),
    e
  )
}
function Bc (e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  }
}
function f1 (e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Bc(e.x, n, i), y: Bc(e.y, t, r) }
}
function Uc (e, t) {
  let n = t.min - e.min,
    r = t.max - e.max
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r }
}
function h1 (e, t) {
  return { x: Uc(e.x, t.x), y: Uc(e.y, t.y) }
}
function p1 (e, t) {
  let n = 0.5
  const r = Me(e),
    i = Me(t)
  return (
    i > r
      ? (n = Hn(t.min, t.max - r, e.min))
      : r > i && (n = Hn(e.min, e.max - i, t.min)),
    Ft(0, 1, n)
  )
}
function m1 (e, t) {
  const n = {}
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  )
}
const Vl = 0.35
function g1 (e = Vl) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Vl),
    { x: $c(e, 'left', 'right'), y: $c(e, 'top', 'bottom') }
  )
}
function $c (e, t, n) {
  return { min: Wc(e, t), max: Wc(e, n) }
}
function Wc (e, t) {
  return typeof e == 'number' ? e : e[t] || 0
}
const Hc = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  An = () => ({ x: Hc(), y: Hc() }),
  Kc = () => ({ min: 0, max: 0 }),
  X = () => ({ x: Kc(), y: Kc() })
function Re (e) {
  return [e('x'), e('y')]
}
function Bp ({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } }
}
function y1 ({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min }
}
function v1 (e, t) {
  if (!t) return e
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom })
  return { top: n.y, left: n.x, bottom: r.y, right: r.x }
}
function xs (e) {
  return e === void 0 || e === 1
}
function Nl ({ scale: e, scaleX: t, scaleY: n }) {
  return !xs(e) || !xs(t) || !xs(n)
}
function Yt (e) {
  return (
    Nl(e) ||
    Up(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  )
}
function Up (e) {
  return Gc(e.x) || Gc(e.y)
}
function Gc (e) {
  return e && e !== '0%'
}
function po (e, t, n) {
  const r = e - n,
    i = t * r
  return n + i
}
function bc (e, t, n, r, i) {
  return i !== void 0 && (e = po(e, i, r)), po(e, n, r) + t
}
function Ml (e, t = 0, n = 1, r, i) {
  ;(e.min = bc(e.min, t, n, r, i)), (e.max = bc(e.max, t, n, r, i))
}
function $p (e, { x: t, y: n }) {
  Ml(e.x, t.translate, t.scale, t.originPoint),
    Ml(e.y, n.translate, n.scale, n.originPoint)
}
const Qc = 0.999999999999,
  Yc = 1.0000000000001
function x1 (e, t, n, r = !1) {
  const i = n.length
  if (!i) return
  t.x = t.y = 1
  let o, s
  for (let l = 0; l < i; l++) {
    ;(o = n[l]), (s = o.projectionDelta)
    const { visualElement: a } = o.options
    ;(a && a.props.style && a.props.style.display === 'contents') ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        Nn(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), $p(e, s)),
      r && Yt(o.latestValues) && Nn(e, o.latestValues))
  }
  t.x < Yc && t.x > Qc && (t.x = 1), t.y < Yc && t.y > Qc && (t.y = 1)
}
function Vn (e, t) {
  ;(e.min = e.min + t), (e.max = e.max + t)
}
function Xc (e, t, n, r, i = 0.5) {
  const o = K(e.min, e.max, i)
  Ml(e, t, n, o, r)
}
function Nn (e, t) {
  Xc(e.x, t.x, t.scaleX, t.scale, t.originX),
    Xc(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function Wp (e, t) {
  return Bp(v1(e.getBoundingClientRect(), t))
}
function w1 (e, t, n) {
  const r = Wp(e, n),
    { scroll: i } = t
  return i && (Vn(r.x, i.offset.x), Vn(r.y, i.offset.y)), r
}
const Hp = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  S1 = new WeakMap()
class k1 {
  constructor (t) {
    ;(this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = X()),
      (this.visualElement = t)
  }
  start (t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement
    if (r && r.isPresent === !1) return
    const i = c => {
        const { dragSnapToOrigin: d } = this.getProps()
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Fo(c, 'page').point)
      },
      o = (c, d) => {
        const { drag: f, dragPropagation: g, onDragStart: y } = this.getProps()
        if (
          f &&
          !g &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Fp(f)),
          !this.openGlobalLock)
        )
          return
        ;(this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Re(P => {
            let p = this.getAxisMotionValue(P).get() || 0
            if (qe.test(p)) {
              const { projection: h } = this.visualElement
              if (h && h.layout) {
                const m = h.layout.layoutBox[P]
                m && (p = Me(m) * (parseFloat(p) / 100))
              }
            }
            this.originPoint[P] = p
          }),
          y && z.postRender(() => y(c, d)),
          El(this.visualElement, 'transform')
        const { animationState: v } = this.visualElement
        v && v.setActive('whileDrag', !0)
      },
      s = (c, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: g,
          onDirectionLock: y,
          onDrag: v
        } = this.getProps()
        if (!f && !this.openGlobalLock) return
        const { offset: P } = d
        if (g && this.currentDirection === null) {
          ;(this.currentDirection = P1(P)),
            this.currentDirection !== null && y && y(this.currentDirection)
          return
        }
        this.updateAxis('x', d.point, P),
          this.updateAxis('y', d.point, P),
          this.visualElement.render(),
          v && v(c, d)
      },
      l = (c, d) => this.stop(c, d),
      a = () =>
        Re(c => {
          var d
          return (
            this.getAnimationState(c) === 'paused' &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          )
        }),
      { dragSnapToOrigin: u } = this.getProps()
    this.panSession = new jp(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: l,
        resumeAnimation: a
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: Hp(this.visualElement)
      }
    )
  }
  stop (t, n) {
    const r = this.isDragging
    if ((this.cancel(), !r)) return
    const { velocity: i } = n
    this.startAnimation(i)
    const { onDragEnd: o } = this.getProps()
    o && z.postRender(() => o(t, n))
  }
  cancel () {
    this.isDragging = !1
    const { projection: t, animationState: n } = this.visualElement
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0)
    const { dragPropagation: r } = this.getProps()
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive('whileDrag', !1)
  }
  updateAxis (t, n, r) {
    const { drag: i } = this.getProps()
    if (!r || !ki(t, i, this.currentDirection)) return
    const o = this.getAxisMotionValue(t)
    let s = this.originPoint[t] + r[t]
    this.constraints &&
      this.constraints[t] &&
      (s = d1(s, this.constraints[t], this.elastic[t])),
      o.set(s)
  }
  resolveConstraints () {
    var t
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      o = this.constraints
    n && En(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = f1(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = g1(r)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Re(s => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = m1(i.layoutBox[s], this.constraints[s]))
        })
  }
  resolveRefConstraints () {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps()
    if (!t || !En(t)) return !1
    const r = t.current,
      { projection: i } = this.visualElement
    if (!i || !i.layout) return !1
    const o = w1(r, i.root, this.visualElement.getTransformPagePoint())
    let s = h1(i.layout.layoutBox, o)
    if (n) {
      const l = n(y1(s))
      ;(this.hasMutatedConstraints = !!l), l && (s = Bp(l))
    }
    return s
  }
  startAnimation (t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: l
      } = this.getProps(),
      a = this.constraints || {},
      u = Re(c => {
        if (!ki(c, n, this.currentDirection)) return
        let d = (a && a[c]) || {}
        s && (d = { min: 0, max: 0 })
        const f = i ? 200 : 1e6,
          g = i ? 40 : 1e7,
          y = {
            type: 'inertia',
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...d
          }
        return this.startAxisValueAnimation(c, y)
      })
    return Promise.all(u).then(l)
  }
  startAxisValueAnimation (t, n) {
    const r = this.getAxisMotionValue(t)
    return (
      El(this.visualElement, t), r.start(Ha(t, r, 0, n, this.visualElement, !1))
    )
  }
  stopAnimation () {
    Re(t => this.getAxisMotionValue(t).stop())
  }
  pauseAnimation () {
    Re(t => {
      var n
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause()
    })
  }
  getAnimationState (t) {
    var n
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state
  }
  getAxisMotionValue (t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n]
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    )
  }
  snapToCursor (t) {
    Re(n => {
      const { drag: r } = this.getProps()
      if (!ki(n, r, this.currentDirection)) return
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n)
      if (i && i.layout) {
        const { min: s, max: l } = i.layout.layoutBox[n]
        o.set(t[n] - K(s, l, 0.5))
      }
    })
  }
  scalePositionWithinConstraints () {
    if (!this.visualElement.current) return
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement
    if (!En(n) || !r || !this.constraints) return
    this.stopAnimation()
    const i = { x: 0, y: 0 }
    Re(s => {
      const l = this.getAxisMotionValue(s)
      if (l && this.constraints !== !1) {
        const a = l.get()
        i[s] = p1({ min: a, max: a }, this.constraints[s])
      }
    })
    const { transformTemplate: o } = this.visualElement.getProps()
    ;(this.visualElement.current.style.transform = o ? o({}, '') : 'none'),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Re(s => {
        if (!ki(s, t, null)) return
        const l = this.getAxisMotionValue(s),
          { min: a, max: u } = this.constraints[s]
        l.set(K(a, u, i[s]))
      })
  }
  addListeners () {
    if (!this.visualElement.current) return
    S1.set(this.visualElement, this)
    const t = this.visualElement.current,
      n = ct(t, 'pointerdown', a => {
        const { drag: u, dragListener: c = !0 } = this.getProps()
        u && c && this.start(a)
      }),
      r = () => {
        const { dragConstraints: a } = this.getProps()
        En(a) && a.current && (this.constraints = this.resolveRefConstraints())
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener('measure', r)
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      z.read(r)
    const s = ot(window, 'resize', () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        'didUpdate',
        ({ delta: a, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Re(c => {
              const d = this.getAxisMotionValue(c)
              d &&
                ((this.originPoint[c] += a[c].translate),
                d.set(d.get() + a[c].translate))
            }),
            this.visualElement.render())
        }
      )
    return () => {
      s(), n(), o(), l && l()
    }
  }
  getProps () {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = Vl,
        dragMomentum: l = !0
      } = t
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: l
    }
  }
}
function ki (e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e)
}
function P1 (e, t = 10) {
  let n = null
  return Math.abs(e.y) > t ? (n = 'y') : Math.abs(e.x) > t && (n = 'x'), n
}
class T1 extends $t {
  constructor (t) {
    super(t),
      (this.removeGroupControls = me),
      (this.removeListeners = me),
      (this.controls = new k1(t))
  }
  mount () {
    const { dragControls: t } = this.node.getProps()
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || me)
  }
  unmount () {
    this.removeGroupControls(), this.removeListeners()
  }
}
const Zc = e => (t, n) => {
  e && z.postRender(() => e(t, n))
}
class C1 extends $t {
  constructor () {
    super(...arguments), (this.removePointerDownListener = me)
  }
  onPointerDown (t) {
    this.session = new jp(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Hp(this.node)
    })
  }
  createPanHandlers () {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i
    } = this.node.getProps()
    return {
      onSessionStart: Zc(t),
      onStart: Zc(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && z.postRender(() => i(o, s))
      }
    }
  }
  mount () {
    this.removePointerDownListener = ct(this.node.current, 'pointerdown', t =>
      this.onPointerDown(t)
    )
  }
  update () {
    this.session && this.session.updateHandlers(this.createPanHandlers())
  }
  unmount () {
    this.removePointerDownListener(), this.session && this.session.end()
  }
}
const Qa = D.createContext(null)
function E1 () {
  const e = D.useContext(Qa)
  if (e === null) return [!0, null]
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = D.useId()
  D.useEffect(() => r(i), [])
  const o = D.useCallback(() => n && n(i), [i, n])
  return !t && n ? [!1, o] : [!0]
}
const Kp = D.createContext({}),
  Gp = D.createContext({}),
  Oi = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }
function Jc (e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100
}
const or = {
    correct: (e, t) => {
      if (!t.target) return e
      if (typeof e == 'string')
        if (N.test(e)) e = parseFloat(e)
        else return e
      const n = Jc(e, t.target.x),
        r = Jc(e, t.target.y)
      return `${n}% ${r}%`
    }
  },
  A1 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Ot.parse(e)
      if (i.length > 5) return r
      const o = Ot.createTransformer(e),
        s = typeof i[0] != 'number' ? 1 : 0,
        l = n.x.scale * t.x,
        a = n.y.scale * t.y
      ;(i[0 + s] /= l), (i[1 + s] /= a)
      const u = K(l, a, 0.5)
      return (
        typeof i[2 + s] == 'number' && (i[2 + s] /= u),
        typeof i[3 + s] == 'number' && (i[3 + s] /= u),
        o(i)
      )
    }
  },
  mo = {}
function V1 (e) {
  Object.assign(mo, e)
}
const { schedule: Ya, cancel: Nw } = Kh(queueMicrotask, !1)
class N1 extends D.Component {
  componentDidMount () {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i
      } = this.props,
      { projection: o } = t
    V1(M1),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener('animationComplete', () => {
          this.safeToRemove()
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove()
        })),
      (Oi.hasEverUpdated = !0)
  }
  getSnapshotBeforeUpdate (t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o
      } = this.props,
      s = r.projection
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              z.postRender(() => {
                const l = s.getStack()
                ;(!l || !l.members.length) && this.safeToRemove()
              }))),
      null
    )
  }
  componentDidUpdate () {
    const { projection: t } = this.props.visualElement
    t &&
      (t.root.didUpdate(),
      Ya.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove()
      }))
  }
  componentWillUnmount () {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r
      } = this.props,
      { projection: i } = t
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i))
  }
  safeToRemove () {
    const { safeToRemove: t } = this.props
    t && t()
  }
  render () {
    return null
  }
}
function bp (e) {
  const [t, n] = E1(),
    r = D.useContext(Kp)
  return w.jsx(N1, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: D.useContext(Gp),
    isPresent: t,
    safeToRemove: n
  })
}
const M1 = {
    borderRadius: {
      ...or,
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius'
      ]
    },
    borderTopLeftRadius: or,
    borderTopRightRadius: or,
    borderBottomLeftRadius: or,
    borderBottomRightRadius: or,
    boxShadow: A1
  },
  Qp = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  L1 = Qp.length,
  qc = e => (typeof e == 'string' ? parseFloat(e) : e),
  ed = e => typeof e == 'number' || N.test(e)
function D1 (e, t, n, r, i, o) {
  i
    ? ((e.opacity = K(0, n.opacity !== void 0 ? n.opacity : 1, j1(r))),
      (e.opacityExit = K(t.opacity !== void 0 ? t.opacity : 1, 0, R1(r))))
    : o &&
      (e.opacity = K(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ))
  for (let s = 0; s < L1; s++) {
    const l = `border${Qp[s]}Radius`
    let a = td(t, l),
      u = td(n, l)
    if (a === void 0 && u === void 0) continue
    a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || ed(a) === ed(u)
        ? ((e[l] = Math.max(K(qc(a), qc(u), r), 0)),
          (qe.test(u) || qe.test(a)) && (e[l] += '%'))
        : (e[l] = u)
  }
  ;(t.rotate || n.rotate) && (e.rotate = K(t.rotate || 0, n.rotate || 0, r))
}
function td (e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius
}
const j1 = Yp(0, 0.5, Jh),
  R1 = Yp(0.5, 0.95, me)
function Yp (e, t, n) {
  return r => (r < e ? 0 : r > t ? 1 : n(Hn(e, t, r)))
}
function nd (e, t) {
  ;(e.min = t.min), (e.max = t.max)
}
function je (e, t) {
  nd(e.x, t.x), nd(e.y, t.y)
}
function rd (e, t) {
  ;(e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin)
}
function id (e, t, n, r, i) {
  return (
    (e -= t), (e = po(e, 1 / n, r)), i !== void 0 && (e = po(e, 1 / i, r)), e
  )
}
function _1 (e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (qe.test(t) &&
      ((t = parseFloat(t)), (t = K(s.min, s.max, t / 100) - s.min)),
    typeof t != 'number')
  )
    return
  let l = K(o.min, o.max, r)
  e === o && (l -= t),
    (e.min = id(e.min, t, n, l, i)),
    (e.max = id(e.max, t, n, l, i))
}
function od (e, t, [n, r, i], o, s) {
  _1(e, t[n], t[r], t[i], t.scale, o, s)
}
const F1 = ['x', 'scaleX', 'originX'],
  O1 = ['y', 'scaleY', 'originY']
function sd (e, t, n, r) {
  od(e.x, t, F1, n ? n.x : void 0, r ? r.x : void 0),
    od(e.y, t, O1, n ? n.y : void 0, r ? r.y : void 0)
}
function ld (e) {
  return e.translate === 0 && e.scale === 1
}
function Xp (e) {
  return ld(e.x) && ld(e.y)
}
function ad (e, t) {
  return e.min === t.min && e.max === t.max
}
function I1 (e, t) {
  return ad(e.x, t.x) && ad(e.y, t.y)
}
function ud (e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  )
}
function Zp (e, t) {
  return ud(e.x, t.x) && ud(e.y, t.y)
}
function cd (e) {
  return Me(e.x) / Me(e.y)
}
function dd (e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  )
}
class z1 {
  constructor () {
    this.members = []
  }
  add (t) {
    Ka(this.members, t), t.scheduleRender()
  }
  remove (t) {
    if (
      (Ga(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1]
      n && this.promote(n)
    }
  }
  relegate (t) {
    const n = this.members.findIndex(i => t === i)
    if (n === 0) return !1
    let r
    for (let i = n; i >= 0; i--) {
      const o = this.members[i]
      if (o.isPresent !== !1) {
        r = o
        break
      }
    }
    return r ? (this.promote(r), !0) : !1
  }
  promote (t, n) {
    const r = this.lead
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0)
      const { crossfade: i } = t.options
      i === !1 && r.hide()
    }
  }
  exitAnimationComplete () {
    this.members.forEach(t => {
      const { options: n, resumingFrom: r } = t
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete()
    })
  }
  scheduleRender () {
    this.members.forEach(t => {
      t.instance && t.scheduleRender(!1)
    })
  }
  removeLeadSnapshot () {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
  }
}
function B1 (e, t, n) {
  let r = ''
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: f,
      skewX: g,
      skewY: y
    } = n
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      g && (r += `skewX(${g}deg) `),
      y && (r += `skewY(${y}deg) `)
  }
  const l = e.x.scale * t.x,
    a = e.y.scale * t.y
  return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || 'none'
}
const U1 = (e, t) => e.depth - t.depth
class $1 {
  constructor () {
    ;(this.children = []), (this.isDirty = !1)
  }
  add (t) {
    Ka(this.children, t), (this.isDirty = !0)
  }
  remove (t) {
    Ga(this.children, t), (this.isDirty = !0)
  }
  forEach (t) {
    this.isDirty && this.children.sort(U1),
      (this.isDirty = !1),
      this.children.forEach(t)
  }
}
function Ii (e) {
  const t = pe(e) ? e.get() : e
  return jv(t) ? t.toValue() : t
}
function W1 (e, t) {
  const n = et.now(),
    r = ({ timestamp: i }) => {
      const o = i - n
      o >= t && (_t(r), e(o - t))
    }
  return z.read(r, !0), () => _t(r)
}
function H1 (e) {
  return e instanceof SVGElement && e.tagName !== 'svg'
}
function K1 (e, t, n) {
  const r = pe(e) ? e : Kr(e)
  return r.start(Ha('', r, t, n)), r.animation
}
const Xt = {
    type: 'projectionFrame',
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
  },
  dr = typeof window < 'u' && window.MotionDebug !== void 0,
  ws = ['', 'X', 'Y', 'Z'],
  G1 = { visibility: 'hidden' },
  fd = 1e3
let b1 = 0
function Ss (e, t, n, r) {
  const { latestValues: i } = t
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0))
}
function Jp (e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return
  const { visualElement: t } = e.options
  if (!t) return
  const n = Vp(t)
  if (window.MotionHasOptimisedAnimation(n, 'transform')) {
    const { layout: i, layoutId: o } = e.options
    window.MotionCancelOptimisedAnimation(n, 'transform', z, !(i || o))
  }
  const { parent: r } = e
  r && !r.hasCheckedOptimisedAppear && Jp(r)
}
function qp ({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i
}) {
  return class {
    constructor (s = {}, l = t == null ? void 0 : t()) {
      ;(this.id = b1++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots())
        }),
        (this.updateProjection = () => {
          ;(this.projectionUpdateScheduled = !1),
            dr &&
              (Xt.totalNodes =
                Xt.resolvedTargetDeltas =
                Xt.recalculatedProjection =
                  0),
            this.nodes.forEach(X1),
            this.nodes.forEach(tx),
            this.nodes.forEach(nx),
            this.nodes.forEach(Z1),
            dr && window.MotionDebug.record(Xt)
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0)
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0
      this.root === this && (this.nodes = new $1())
    }
    addEventListener (s, l) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new ba()),
        this.eventHandlers.get(s).add(l)
      )
    }
    notifyListeners (s, ...l) {
      const a = this.eventHandlers.get(s)
      a && a.notify(...l)
    }
    hasListeners (s) {
      return this.eventHandlers.has(s)
    }
    mount (s, l = this.root.hasTreeAnimated) {
      if (this.instance) return
      ;(this.isSVG = H1(s)), (this.instance = s)
      const { layoutId: a, layout: u, visualElement: c } = this.options
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        l && (u || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d
        const f = () => (this.root.updateBlockedByResize = !1)
        e(s, () => {
          ;(this.root.updateBlockedByResize = !0),
            d && d(),
            (d = W1(f, 250)),
            Oi.hasAnimatedSinceResize &&
              ((Oi.hasAnimatedSinceResize = !1), this.nodes.forEach(pd))
        })
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || u) &&
          this.addEventListener(
            'didUpdate',
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: g,
              layout: y
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ;(this.target = void 0), (this.relativeTarget = void 0)
                return
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || lx,
                { onLayoutAnimationStart: P, onLayoutAnimationComplete: p } =
                  c.getProps(),
                h = !this.targetLayout || !Zp(this.targetLayout, y) || g,
                m = !f && g
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                m ||
                (f && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, m)
                const x = { ...Ma(v, 'layout'), onPlay: P, onComplete: p }
                ;(c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x)
              } else
                f || pd(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete()
              this.targetLayout = y
            }
          )
    }
    unmount () {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this)
      const s = this.getStack()
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        _t(this.updateProjection)
    }
    blockUpdate () {
      this.updateManuallyBlocked = !0
    }
    unblockUpdate () {
      this.updateManuallyBlocked = !1
    }
    isUpdateBlocked () {
      return this.updateManuallyBlocked || this.updateBlockedByResize
    }
    isTreeAnimationBlocked () {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      )
    }
    startUpdate () {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(rx),
        this.animationId++)
    }
    getTransformTemplate () {
      const { visualElement: s } = this.options
      return s && s.getProps().transformTemplate
    }
    willUpdate (s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete()
        return
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Jp(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return
      this.isLayoutDirty = !0
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c]
        ;(d.shouldResetTransform = !0),
          d.updateScroll('snapshot'),
          d.options.layoutRoot && d.willUpdate(!1)
      }
      const { layoutId: l, layout: a } = this.options
      if (l === void 0 && !a) return
      const u = this.getTransformTemplate()
      ;(this.prevTransformTemplateValue = u
        ? u(this.latestValues, '')
        : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners('willUpdate')
    }
    update () {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(hd)
        return
      }
      this.isUpdating || this.nodes.forEach(q1),
        (this.isUpdating = !1),
        this.nodes.forEach(ex),
        this.nodes.forEach(Q1),
        this.nodes.forEach(Y1),
        this.clearAllSnapshots()
      const l = et.now()
      ;(le.delta = Ft(0, 1e3 / 60, l - le.timestamp)),
        (le.timestamp = l),
        (le.isProcessing = !0),
        fs.update.process(le),
        fs.preRender.process(le),
        fs.render.process(le),
        (le.isProcessing = !1)
    }
    didUpdate () {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Ya.read(this.scheduleUpdate))
    }
    clearAllSnapshots () {
      this.nodes.forEach(J1), this.sharedNodes.forEach(ix)
    }
    scheduleUpdateProjection () {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        z.preRender(this.updateProjection, !1, !0))
    }
    scheduleCheckAfterUnmount () {
      z.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed()
      })
    }
    updateSnapshot () {
      this.snapshot || !this.instance || (this.snapshot = this.measure())
    }
    updateLayout () {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll()
      const s = this.layout
      ;(this.layout = this.measure(!1)),
        (this.layoutCorrected = X()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox)
      const { visualElement: l } = this.options
      l &&
        l.notify(
          'LayoutMeasure',
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        )
    }
    updateScroll (s = 'measure') {
      let l = !!(this.options.layoutScroll && this.instance)
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (l = !1),
        l)
      ) {
        const a = r(this.instance)
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: a,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : a
        }
      }
    }
    resetTransform () {
      if (!i) return
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        l = this.projectionDelta && !Xp(this.projectionDelta),
        a = this.getTransformTemplate(),
        u = a ? a(this.latestValues, '') : void 0,
        c = u !== this.prevTransformTemplateValue
      s &&
        (l || Yt(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender())
    }
    measure (s = !0) {
      const l = this.measurePageBox()
      let a = this.removeElementScroll(l)
      return (
        s && (a = this.removeTransform(a)),
        ax(a),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: a,
          latestValues: {},
          source: this.id
        }
      )
    }
    measurePageBox () {
      var s
      const { visualElement: l } = this.options
      if (!l) return X()
      const a = l.measureViewportBox()
      if (
        !(
          ((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) ||
          this.path.some(ux)
        )
      ) {
        const { scroll: c } = this.root
        c && (Vn(a.x, c.offset.x), Vn(a.y, c.offset.y))
      }
      return a
    }
    removeElementScroll (s) {
      var l
      const a = X()
      if (
        (je(a, s), !((l = this.scroll) === null || l === void 0) && l.wasRoot)
      )
        return a
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: f } = c
        c !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && je(a, s), Vn(a.x, d.offset.x), Vn(a.y, d.offset.y))
      }
      return a
    }
    applyTransform (s, l = !1) {
      const a = X()
      je(a, s)
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u]
        !l &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Nn(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Yt(c.latestValues) && Nn(a, c.latestValues)
      }
      return Yt(this.latestValues) && Nn(a, this.latestValues), a
    }
    removeTransform (s) {
      const l = X()
      je(l, s)
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a]
        if (!u.instance || !Yt(u.latestValues)) continue
        Nl(u.latestValues) && u.updateSnapshot()
        const c = X(),
          d = u.measurePageBox()
        je(c, d),
          sd(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
      }
      return Yt(this.latestValues) && sd(l, this.latestValues), l
    }
    setTargetDelta (s) {
      ;(this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0)
    }
    setOptions (s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0
      }
    }
    clearMeasurements () {
      ;(this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1)
    }
    forceRelativeParentToResolveTarget () {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== le.timestamp &&
        this.relativeParent.resolveTargetDelta(!0)
    }
    resolveTargetDelta (s = !1) {
      var l
      const a = this.getLead()
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty)
      const u = !!this.resumingFrom || this !== a
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return
      const { layout: d, layoutId: f } = this.options
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = le.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent()
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = X()),
              (this.relativeTargetOrigin = X()),
              Pr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox
              ),
              je(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0)
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = X()), (this.targetWithTransforms = X())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                c1(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : je(this.target, this.layout.layoutBox),
                $p(this.target, this.targetDelta))
              : je(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1
            const g = this.getClosestProjectingParent()
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = g),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = X()),
                (this.relativeTargetOrigin = X()),
                Pr(this.relativeTargetOrigin, this.target, g.target),
                je(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0)
          }
          dr && Xt.resolvedTargetDeltas++
        }
      }
    }
    getClosestProjectingParent () {
      if (
        !(
          !this.parent ||
          Nl(this.parent.latestValues) ||
          Up(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent()
    }
    isProjecting () {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      )
    }
    calcProjection () {
      var s
      const l = this.getLead(),
        a = !!this.resumingFrom || this !== l
      let u = !0
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === le.timestamp && (u = !1),
        u)
      )
        return
      const { layout: c, layoutId: d } = this.options
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return
      je(this.layoutCorrected, this.layout.layoutBox)
      const f = this.treeScale.x,
        g = this.treeScale.y
      x1(this.layoutCorrected, this.treeScale, this.path, a),
        l.layout &&
          !l.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((l.target = l.layout.layoutBox), (l.targetWithTransforms = X()))
      const { target: y } = l
      if (!y) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender())
        return
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (rd(this.prevProjectionDelta.x, this.projectionDelta.x),
          rd(this.prevProjectionDelta.y, this.projectionDelta.y)),
        kr(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== g ||
          !dd(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !dd(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', y)),
        dr && Xt.recalculatedProjection++
    }
    hide () {
      this.isVisible = !1
    }
    show () {
      this.isVisible = !0
    }
    scheduleRender (s = !0) {
      var l
      if (
        ((l = this.options.visualElement) === null ||
          l === void 0 ||
          l.scheduleRender(),
        s)
      ) {
        const a = this.getStack()
        a && a.scheduleRender()
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0)
    }
    createProjectionDeltas () {
      ;(this.prevProjectionDelta = An()),
        (this.projectionDelta = An()),
        (this.projectionDeltaWithTransform = An())
    }
    setAnimationOrigin (s, l = !1) {
      const a = this.snapshot,
        u = a ? a.latestValues : {},
        c = { ...this.latestValues },
        d = An()
      ;(!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l)
      const f = X(),
        g = a ? a.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        v = g !== y,
        P = this.getStack(),
        p = !P || P.members.length <= 1,
        h = !!(v && !p && this.options.crossfade === !0 && !this.path.some(sx))
      this.animationProgress = 0
      let m
      ;(this.mixTargetDelta = x => {
        const S = x / 1e3
        md(d.x, s.x, S),
          md(d.y, s.y, S),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Pr(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            ox(this.relativeTarget, this.relativeTargetOrigin, f, S),
            m && I1(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = X()),
            je(m, this.relativeTarget)),
          v &&
            ((this.animationValues = c), D1(c, u, this.latestValues, S, h, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S)
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
    }
    startAnimation (s) {
      this.notifyListeners('animationStart'),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (_t(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = z.update(() => {
          ;(Oi.hasAnimatedSinceResize = !0),
            (this.currentAnimation = K1(0, fd, {
              ...s,
              onUpdate: l => {
                this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l)
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation()
              }
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0)
        }))
    }
    completeAnimation () {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0))
      const s = this.getStack()
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners('animationComplete')
    }
    finishAnimation () {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(fd),
        this.currentAnimation.stop()),
        this.completeAnimation()
    }
    applyTransformsToTarget () {
      const s = this.getLead()
      let { targetWithTransforms: l, target: a, layout: u, latestValues: c } = s
      if (!(!l || !a || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          em(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          a = this.target || X()
          const d = Me(this.layout.layoutBox.x)
          ;(a.x.min = s.target.x.min), (a.x.max = a.x.min + d)
          const f = Me(this.layout.layoutBox.y)
          ;(a.y.min = s.target.y.min), (a.y.max = a.y.min + f)
        }
        je(l, a),
          Nn(l, c),
          kr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c)
      }
    }
    registerSharedNode (s, l) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new z1()),
        this.sharedNodes.get(s).add(l)
      const u = l.options.initialPromotionConfig
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(l)
            : void 0
      })
    }
    isLead () {
      const s = this.getStack()
      return s ? s.lead === this : !0
    }
    getLead () {
      var s
      const { layoutId: l } = this.options
      return l
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this
    }
    getPrevLead () {
      var s
      const { layoutId: l } = this.options
      return l
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0
    }
    getStack () {
      const { layoutId: s } = this.options
      if (s) return this.root.sharedNodes.get(s)
    }
    promote ({ needsReset: s, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack()
      u && u.promote(this, a),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l })
    }
    relegate () {
      const s = this.getStack()
      return s ? s.relegate(this) : !1
    }
    resetSkewAndRotation () {
      const { visualElement: s } = this.options
      if (!s) return
      let l = !1
      const { latestValues: a } = s
      if (
        ((a.z ||
          a.rotate ||
          a.rotateX ||
          a.rotateY ||
          a.rotateZ ||
          a.skewX ||
          a.skewY) &&
          (l = !0),
        !l)
      )
        return
      const u = {}
      a.z && Ss('z', s, u, this.animationValues)
      for (let c = 0; c < ws.length; c++)
        Ss(`rotate${ws[c]}`, s, u, this.animationValues),
          Ss(`skew${ws[c]}`, s, u, this.animationValues)
      s.render()
      for (const c in u)
        s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c])
      s.scheduleRender()
    }
    getProjectionStyles (s) {
      var l, a
      if (!this.instance || this.isSVG) return
      if (!this.isVisible) return G1
      const u = { visibility: '' },
        c = this.getTransformTemplate()
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ''),
          (u.pointerEvents = Ii(s == null ? void 0 : s.pointerEvents) || ''),
          (u.transform = c ? c(this.latestValues, '') : 'none'),
          u
        )
      const d = this.getLead()
      if (!this.projectionDelta || !this.layout || !d.target) {
        const v = {}
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = Ii(s == null ? void 0 : s.pointerEvents) || '')),
          this.hasProjected &&
            !Yt(this.latestValues) &&
            ((v.transform = c ? c({}, '') : 'none'), (this.hasProjected = !1)),
          v
        )
      }
      const f = d.animationValues || d.latestValues
      this.applyTransformsToTarget(),
        (u.transform = B1(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        c && (u.transform = c(f, u.transform))
      const { x: g, y } = this.projectionDelta
      ;(u.transformOrigin = `${g.origin * 100}% ${y.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (a =
                    (l = f.opacity) !== null && l !== void 0
                      ? l
                      : this.latestValues.opacity) !== null && a !== void 0
                  ? a
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ''
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0)
      for (const v in mo) {
        if (f[v] === void 0) continue
        const { correct: P, applyTo: p } = mo[v],
          h = u.transform === 'none' ? f[v] : P(f[v], d)
        if (p) {
          const m = p.length
          for (let x = 0; x < m; x++) u[p[x]] = h
        } else u[v] = h
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? Ii(s == null ? void 0 : s.pointerEvents) || ''
              : 'none'),
        u
      )
    }
    clearSnapshot () {
      this.resumeFrom = this.snapshot = void 0
    }
    resetTree () {
      this.root.nodes.forEach(s => {
        var l
        return (l = s.currentAnimation) === null || l === void 0
          ? void 0
          : l.stop()
      }),
        this.root.nodes.forEach(hd),
        this.root.sharedNodes.clear()
    }
  }
}
function Q1 (e) {
  e.updateLayout()
}
function Y1 (e) {
  var t
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot
  if (e.isLead() && e.layout && n && e.hasListeners('didUpdate')) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source
    o === 'size'
      ? Re(d => {
          const f = s ? n.measuredBox[d] : n.layoutBox[d],
            g = Me(f)
          ;(f.min = r[d].min), (f.max = f.min + g)
        })
      : em(o, n.layoutBox, r) &&
        Re(d => {
          const f = s ? n.measuredBox[d] : n.layoutBox[d],
            g = Me(r[d])
          ;(f.max = f.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + g))
        })
    const l = An()
    kr(l, r, n.layoutBox)
    const a = An()
    s ? kr(a, e.applyTransform(i, !0), n.measuredBox) : kr(a, r, n.layoutBox)
    const u = !Xp(l)
    let c = !1
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent()
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: g } = d
        if (f && g) {
          const y = X()
          Pr(y, n.layoutBox, f.layoutBox)
          const v = X()
          Pr(v, r, g.layoutBox),
            Zp(y, v) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = d))
        }
      }
    }
    e.notifyListeners('didUpdate', {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c
    })
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options
    r && r()
  }
  e.options.transition = void 0
}
function X1 (e) {
  dr && Xt.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function Z1 (e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function J1 (e) {
  e.clearSnapshot()
}
function hd (e) {
  e.clearMeasurements()
}
function q1 (e) {
  e.isLayoutDirty = !1
}
function ex (e) {
  const { visualElement: t } = e.options
  t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'),
    e.resetTransform()
}
function pd (e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0)
}
function tx (e) {
  e.resolveTargetDelta()
}
function nx (e) {
  e.calcProjection()
}
function rx (e) {
  e.resetSkewAndRotation()
}
function ix (e) {
  e.removeLeadSnapshot()
}
function md (e, t, n) {
  ;(e.translate = K(t.translate, 0, n)),
    (e.scale = K(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint)
}
function gd (e, t, n, r) {
  ;(e.min = K(t.min, n.min, r)), (e.max = K(t.max, n.max, r))
}
function ox (e, t, n, r) {
  gd(e.x, t.x, n.x, r), gd(e.y, t.y, n.y, r)
}
function sx (e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0
}
const lx = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  yd = e =>
    typeof navigator < 'u' &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  vd = yd('applewebkit/') && !yd('chrome/') ? Math.round : me
function xd (e) {
  ;(e.min = vd(e.min)), (e.max = vd(e.max))
}
function ax (e) {
  xd(e.x), xd(e.y)
}
function em (e, t, n) {
  return e === 'position' || (e === 'preserve-aspect' && !u1(cd(t), cd(n), 0.2))
}
function ux (e) {
  var t
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  )
}
const cx = qp({
    attachResizeListener: (e, t) => ot(e, 'resize', t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
  }),
  ks = { current: void 0 },
  tm = qp({
    measureScroll: e => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!ks.current) {
        const e = new cx({})
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (ks.current = e)
      }
      return ks.current
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : 'none'
    },
    checkIsScrollRoot: e => window.getComputedStyle(e).position === 'fixed'
  }),
  dx = {
    pan: { Feature: C1 },
    drag: { Feature: T1, ProjectionNode: tm, MeasureLayout: bp }
  }
function wd (e, t) {
  const n = t ? 'pointerenter' : 'pointerleave',
    r = t ? 'onHoverStart' : 'onHoverEnd',
    i = (o, s) => {
      if (o.pointerType === 'touch' || Op()) return
      const l = e.getProps()
      e.animationState &&
        l.whileHover &&
        e.animationState.setActive('whileHover', t)
      const a = l[r]
      a && z.postRender(() => a(o, s))
    }
  return ct(e.current, n, i, { passive: !e.getProps()[r] })
}
class fx extends $t {
  mount () {
    this.unmount = ut(wd(this.node, !0), wd(this.node, !1))
  }
  unmount () {}
}
class hx extends $t {
  constructor () {
    super(...arguments), (this.isActive = !1)
  }
  onFocus () {
    let t = !1
    try {
      t = this.node.current.matches(':focus-visible')
    } catch {
      t = !0
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !0),
      (this.isActive = !0))
  }
  onBlur () {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive('whileFocus', !1),
      (this.isActive = !1))
  }
  mount () {
    this.unmount = ut(
      ot(this.node.current, 'focus', () => this.onFocus()),
      ot(this.node.current, 'blur', () => this.onBlur())
    )
  }
  unmount () {}
}
const nm = (e, t) => (t ? (e === t ? !0 : nm(e, t.parentElement)) : !1)
function Ps (e, t) {
  if (!t) return
  const n = new PointerEvent('pointer' + e)
  t(n, Fo(n))
}
class px extends $t {
  constructor () {
    super(...arguments),
      (this.removeStartListeners = me),
      (this.removeEndListeners = me),
      (this.removeAccessibleListeners = me),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return
        this.removeEndListeners()
        const r = this.node.getProps(),
          o = ct(
            window,
            'pointerup',
            (l, a) => {
              if (!this.checkPressEnd()) return
              const {
                  onTap: u,
                  onTapCancel: c,
                  globalTapTarget: d
                } = this.node.getProps(),
                f = !d && !nm(this.node.current, l.target) ? c : u
              f && z.update(() => f(l, a))
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = ct(window, 'pointercancel', (l, a) => this.cancelPress(l, a), {
            passive: !(r.onTapCancel || r.onPointerCancel)
          })
        ;(this.removeEndListeners = ut(o, s)), this.startPress(t, n)
      }),
      (this.startAccessiblePress = () => {
        const t = o => {
            if (o.key !== 'Enter' || this.isPressing) return
            const s = l => {
              l.key !== 'Enter' ||
                !this.checkPressEnd() ||
                Ps('up', (a, u) => {
                  const { onTap: c } = this.node.getProps()
                  c && z.postRender(() => c(a, u))
                })
            }
            this.removeEndListeners(),
              (this.removeEndListeners = ot(this.node.current, 'keyup', s)),
              Ps('down', (l, a) => {
                this.startPress(l, a)
              })
          },
          n = ot(this.node.current, 'keydown', t),
          r = () => {
            this.isPressing && Ps('cancel', (o, s) => this.cancelPress(o, s))
          },
          i = ot(this.node.current, 'blur', r)
        this.removeAccessibleListeners = ut(n, i)
      })
  }
  startPress (t, n) {
    this.isPressing = !0
    const { onTapStart: r, whileTap: i } = this.node.getProps()
    i &&
      this.node.animationState &&
      this.node.animationState.setActive('whileTap', !0),
      r && z.postRender(() => r(t, n))
  }
  checkPressEnd () {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive('whileTap', !1),
      !Op()
    )
  }
  cancelPress (t, n) {
    if (!this.checkPressEnd()) return
    const { onTapCancel: r } = this.node.getProps()
    r && z.postRender(() => r(t, n))
  }
  mount () {
    const t = this.node.getProps(),
      n = ct(
        t.globalTapTarget ? window : this.node.current,
        'pointerdown',
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = ot(this.node.current, 'focus', this.startAccessiblePress)
    this.removeStartListeners = ut(n, r)
  }
  unmount () {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners()
  }
}
const Ll = new WeakMap(),
  Ts = new WeakMap(),
  mx = e => {
    const t = Ll.get(e.target)
    t && t(e)
  },
  gx = e => {
    e.forEach(mx)
  }
function yx ({ root: e, ...t }) {
  const n = e || document
  Ts.has(n) || Ts.set(n, {})
  const r = Ts.get(n),
    i = JSON.stringify(t)
  return r[i] || (r[i] = new IntersectionObserver(gx, { root: e, ...t })), r[i]
}
function vx (e, t, n) {
  const r = yx(t)
  return (
    Ll.set(e, n),
    r.observe(e),
    () => {
      Ll.delete(e), r.unobserve(e)
    }
  )
}
const xx = { some: 0, all: 1 }
class wx extends $t {
  constructor () {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1)
  }
  startObserver () {
    this.unmount()
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = 'some', once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == 'number' ? i : xx[i]
      },
      l = a => {
        const { isIntersecting: u } = a
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive('whileInView', u)
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d
        f && f(a)
      }
    return vx(this.node.current, s, l)
  }
  mount () {
    this.startObserver()
  }
  update () {
    if (typeof IntersectionObserver > 'u') return
    const { props: t, prevProps: n } = this.node
    ;['amount', 'margin', 'root'].some(Sx(t, n)) && this.startObserver()
  }
  unmount () {}
}
function Sx ({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return n => e[n] !== t[n]
}
const kx = {
    inView: { Feature: wx },
    tap: { Feature: px },
    focus: { Feature: hx },
    hover: { Feature: fx }
  },
  Px = { layout: { ProjectionNode: tm, MeasureLayout: bp } },
  rm = D.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: 'never'
  }),
  Oo = D.createContext({}),
  Xa = typeof window < 'u',
  Tx = Xa ? D.useLayoutEffect : D.useEffect,
  im = D.createContext({ strict: !1 })
function Cx (e, t, n, r, i) {
  var o, s
  const { visualElement: l } = D.useContext(Oo),
    a = D.useContext(im),
    u = D.useContext(Qa),
    c = D.useContext(rm).reducedMotion,
    d = D.useRef()
  ;(r = r || a.renderer),
    !d.current &&
      r &&
      (d.current = r(e, {
        visualState: t,
        parent: l,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c
      }))
  const f = d.current,
    g = D.useContext(Gp)
  f &&
    !f.projection &&
    i &&
    (f.type === 'html' || f.type === 'svg') &&
    Ex(d.current, n, i, g),
    D.useInsertionEffect(() => {
      f && f.update(n, u)
    })
  const y = n[Ap],
    v = D.useRef(
      !!y &&
        !(
          !((o = window.MotionHandoffIsComplete) === null || o === void 0) &&
          o.call(window, y)
        ) &&
        ((s = window.MotionHasOptimisedAnimation) === null || s === void 0
          ? void 0
          : s.call(window, y))
    )
  return (
    Tx(() => {
      f &&
        ((window.MotionIsMounted = !0),
        f.updateFeatures(),
        Ya.render(f.render),
        v.current && f.animationState && f.animationState.animateChanges())
    }),
    D.useEffect(() => {
      f &&
        (!v.current && f.animationState && f.animationState.animateChanges(),
        v.current &&
          (queueMicrotask(() => {
            var P
            ;(P = window.MotionHandoffMarkAsComplete) === null ||
              P === void 0 ||
              P.call(window, y)
          }),
          (v.current = !1)))
    }),
    f
  )
}
function Ex (e, t, n, r) {
  const {
    layoutId: i,
    layout: o,
    drag: s,
    dragConstraints: l,
    layoutScroll: a,
    layoutRoot: u
  } = t
  ;(e.projection = new n(
    e.latestValues,
    t['data-framer-portal-id'] ? void 0 : om(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!s || (l && En(l)),
      visualElement: e,
      animationType: typeof o == 'string' ? o : 'both',
      initialPromotionConfig: r,
      layoutScroll: a,
      layoutRoot: u
    })
}
function om (e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : om(e.parent)
}
function Ax (e, t, n) {
  return D.useCallback(
    r => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == 'function' ? n(r) : En(n) && (n.current = r))
    },
    [t]
  )
}
function Io (e) {
  return Ur(e.animate) || Na.some(t => $r(e[t]))
}
function sm (e) {
  return !!(Io(e) || e.variants)
}
function Vx (e, t) {
  if (Io(e)) {
    const { initial: n, animate: r } = e
    return {
      initial: n === !1 || $r(n) ? n : void 0,
      animate: $r(r) ? r : void 0
    }
  }
  return e.inherit !== !1 ? t : {}
}
function Nx (e) {
  const { initial: t, animate: n } = Vx(e, D.useContext(Oo))
  return D.useMemo(() => ({ initial: t, animate: n }), [Sd(t), Sd(n)])
}
function Sd (e) {
  return Array.isArray(e) ? e.join(' ') : e
}
const kd = {
    animation: [
      'animate',
      'variants',
      'whileHover',
      'whileTap',
      'exit',
      'whileInView',
      'whileFocus',
      'whileDrag'
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId']
  },
  Kn = {}
for (const e in kd) Kn[e] = { isEnabled: t => kd[e].some(n => !!t[n]) }
function Mx (e) {
  for (const t in e) Kn[t] = { ...Kn[t], ...e[t] }
}
const Lx = Symbol.for('motionComponentSymbol')
function Dx ({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i
}) {
  e && Mx(e)
  function o (l, a) {
    let u
    const c = { ...D.useContext(rm), ...l, layoutId: jx(l) },
      { isStatic: d } = c,
      f = Nx(l),
      g = r(l, d)
    if (!d && Xa) {
      Rx()
      const y = _x(c)
      ;(u = y.MeasureLayout),
        (f.visualElement = Cx(i, g, c, t, y.ProjectionNode))
    }
    return w.jsxs(Oo.Provider, {
      value: f,
      children: [
        u && f.visualElement
          ? w.jsx(u, { visualElement: f.visualElement, ...c })
          : null,
        n(i, l, Ax(g, f.visualElement, a), g, d, f.visualElement)
      ]
    })
  }
  const s = D.forwardRef(o)
  return (s[Lx] = i), s
}
function jx ({ layoutId: e }) {
  const t = D.useContext(Kp).id
  return t && e !== void 0 ? t + '-' + e : e
}
function Rx (e, t) {
  D.useContext(im).strict
}
function _x (e) {
  const { drag: t, layout: n } = Kn
  if (!t && !n) return {}
  const r = { ...t, ...n }
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode
  }
}
const Fx = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view'
]
function Za (e) {
  return typeof e != 'string' || e.includes('-')
    ? !1
    : !!(Fx.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function lm (e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r))
  for (const o in n) e.style.setProperty(o, n[o])
}
const am = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust'
])
function um (e, t, n, r) {
  lm(e, t, void 0, r)
  for (const i in t.attrs) e.setAttribute(am.has(i) ? i : _o(i), t.attrs[i])
}
function cm (e, { layout: t, layoutId: n }) {
  return (
    Ut.has(e) ||
    e.startsWith('origin') ||
    ((t || n !== void 0) && (!!mo[e] || e === 'opacity'))
  )
}
function Ja (e, t, n) {
  var r
  const { style: i } = e,
    o = {}
  for (const s in i)
    (pe(i[s]) ||
      (t.style && pe(t.style[s])) ||
      cm(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (o[s] = i[s])
  return (
    n && i && typeof i.willChange == 'string' && (n.applyWillChange = !1), o
  )
}
function dm (e, t, n) {
  const r = Ja(e, t, n)
  for (const i in e)
    if (pe(e[i]) || pe(t[i])) {
      const o =
        Zr.indexOf(i) !== -1
          ? 'attr' + i.charAt(0).toUpperCase() + i.substring(1)
          : i
      r[o] = e[i]
    }
  return r
}
function Ox (e) {
  const t = D.useRef(null)
  return t.current === null && (t.current = e()), t.current
}
function Ix (
  {
    applyWillChange: e = !1,
    scrapeMotionValuesFromProps: t,
    createRenderState: n,
    onMount: r
  },
  i,
  o,
  s,
  l
) {
  const a = { latestValues: zx(i, o, s, l ? !1 : e, t), renderState: n() }
  return r && (a.mount = u => r(i, u, a)), a
}
const fm = e => (t, n) => {
  const r = D.useContext(Oo),
    i = D.useContext(Qa),
    o = () => Ix(e, t, r, i, n)
  return n ? o() : Ox(o)
}
function Pd (e, t, n) {
  const r = Array.isArray(t) ? t : [t]
  for (let i = 0; i < r.length; i++) {
    const o = Aa(e, r[i])
    if (o) {
      const { transitionEnd: s, transition: l, ...a } = o
      n(a, s)
    }
  }
}
function zx (e, t, n, r, i) {
  var o
  const s = {}
  let l =
    r &&
    ((o = e.style) === null || o === void 0 ? void 0 : o.willChange) === void 0
  const a = i(e, {})
  for (const v in a) s[v] = Ii(a[v])
  let { initial: u, animate: c } = e
  const d = Io(e),
    f = sm(e)
  t &&
    f &&
    !d &&
    e.inherit !== !1 &&
    (u === void 0 && (u = t.initial), c === void 0 && (c = t.animate))
  let g = n ? n.initial === !1 : !1
  g = g || u === !1
  const y = g ? c : u
  return (
    y &&
      typeof y != 'boolean' &&
      !Ur(y) &&
      Pd(e, y, (v, P) => {
        for (const p in v) {
          let h = v[p]
          if (Array.isArray(h)) {
            const m = g ? h.length - 1 : 0
            h = h[m]
          }
          h !== null && (s[p] = h)
        }
        for (const p in P) s[p] = P[p]
      }),
    l &&
      c &&
      u !== !1 &&
      !Ur(c) &&
      Pd(e, c, v => {
        for (const P in v)
          if (Np(P)) {
            s.willChange = 'transform'
            return
          }
      }),
    s
  )
}
const qa = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  hm = () => ({ ...qa(), attrs: {} }),
  pm = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
  Bx = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    transformPerspective: 'perspective'
  },
  Ux = Zr.length
function $x (e, t, n) {
  let r = '',
    i = !0
  for (let o = 0; o < Ux; o++) {
    const s = Zr[o],
      l = e[s]
    if (l === void 0) continue
    let a = !0
    if (
      (typeof l == 'number'
        ? (a = l === (s.startsWith('scale') ? 1 : 0))
        : (a = parseFloat(l) === 0),
      !a || n)
    ) {
      const u = pm(l, Oa[s])
      if (!a) {
        i = !1
        const c = Bx[s] || s
        r += `${c}(${u}) `
      }
      n && (t[s] = u)
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? '' : r)) : i && (r = 'none'), r
}
function eu (e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e
  let s = !1,
    l = !1
  for (const a in t) {
    const u = t[a]
    if (Ut.has(a)) {
      s = !0
      continue
    } else if (rp(a)) {
      i[a] = u
      continue
    } else {
      const c = pm(u, Oa[a])
      a.startsWith('origin') ? ((l = !0), (o[a] = c)) : (r[a] = c)
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = $x(t, e.transform, n))
        : r.transform && (r.transform = 'none')),
    l)
  ) {
    const { originX: a = '50%', originY: u = '50%', originZ: c = 0 } = o
    r.transformOrigin = `${a} ${u} ${c}`
  }
}
function Td (e, t, n) {
  return typeof e == 'string' ? e : N.transform(t + n * e)
}
function Wx (e, t, n) {
  const r = Td(t, e.x, e.width),
    i = Td(n, e.y, e.height)
  return `${r} ${i}`
}
const Hx = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  Kx = { offset: 'strokeDashoffset', array: 'strokeDasharray' }
function Gx (e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1
  const o = i ? Hx : Kx
  e[o.offset] = N.transform(-r)
  const s = N.transform(t),
    l = N.transform(n)
  e[o.array] = `${s} ${l}`
}
function tu (
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
  },
  c,
  d
) {
  if ((eu(e, u, d), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox)
    return
  }
  ;(e.attrs = e.style), (e.style = {})
  const { attrs: f, style: g, dimensions: y } = e
  f.transform && (y && (g.transform = f.transform), delete f.transform),
    y &&
      (i !== void 0 || o !== void 0 || g.transform) &&
      (g.transformOrigin = Wx(
        y,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    s !== void 0 && Gx(f, s, l, a, !1)
}
const nu = e => typeof e == 'string' && e.toLowerCase() === 'svg',
  bx = {
    useVisualState: fm({
      scrapeMotionValuesFromProps: dm,
      createRenderState: hm,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        z.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == 'function'
                ? t.getBBox()
                : t.getBoundingClientRect()
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 }
          }
        }),
          z.render(() => {
            tu(n, r, nu(t.tagName), e.transformTemplate), um(t, n)
          })
      }
    })
  },
  Qx = {
    useVisualState: fm({
      applyWillChange: !0,
      scrapeMotionValuesFromProps: Ja,
      createRenderState: qa
    })
  }
function mm (e, t, n) {
  for (const r in t) !pe(t[r]) && !cm(r, n) && (e[r] = t[r])
}
function Yx ({ transformTemplate: e }, t) {
  return D.useMemo(() => {
    const n = qa()
    return eu(n, t, e), Object.assign({}, n.vars, n.style)
  }, [t])
}
function Xx (e, t) {
  const n = e.style || {},
    r = {}
  return mm(r, n, e), Object.assign(r, Yx(e, t)), r
}
function Zx (e, t) {
  const n = {},
    r = Xx(e, t)
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = 'none'),
      (r.touchAction =
        e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  )
}
const Jx = new Set([
  'animate',
  'exit',
  'variants',
  'initial',
  'style',
  'values',
  'variants',
  'transition',
  'transformTemplate',
  'custom',
  'inherit',
  'onBeforeLayoutMeasure',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDragStart',
  'onDrag',
  'onDragEnd',
  'onMeasureDragConstraints',
  'onDirectionLock',
  'onDragTransitionEnd',
  '_dragX',
  '_dragY',
  'onHoverStart',
  'onHoverEnd',
  'onViewportEnter',
  'onViewportLeave',
  'globalTapTarget',
  'ignoreStrict',
  'viewport'
])
function go (e) {
  return (
    e.startsWith('while') ||
    (e.startsWith('drag') && e !== 'draggable') ||
    e.startsWith('layout') ||
    e.startsWith('onTap') ||
    e.startsWith('onPan') ||
    e.startsWith('onLayout') ||
    Jx.has(e)
  )
}
let gm = e => !go(e)
function qx (e) {
  e && (gm = t => (t.startsWith('on') ? !go(t) : e(t)))
}
try {
  qx(require('@emotion/is-prop-valid').default)
} catch {}
function ew (e, t, n) {
  const r = {}
  for (const i in e)
    (i === 'values' && typeof e.values == 'object') ||
      ((gm(i) ||
        (n === !0 && go(i)) ||
        (!t && !go(i)) ||
        (e.draggable && i.startsWith('onDrag'))) &&
        (r[i] = e[i]))
  return r
}
function tw (e, t, n, r) {
  const i = D.useMemo(() => {
    const o = hm()
    return (
      tu(o, t, nu(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    )
  }, [t])
  if (e.style) {
    const o = {}
    mm(o, e.style, e), (i.style = { ...o, ...i.style })
  }
  return i
}
function nw (e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const a = (Za(n) ? tw : Zx)(r, o, s, n),
      u = ew(r, typeof n == 'string', e),
      c = n !== D.Fragment ? { ...u, ...a, ref: i } : {},
      { children: d } = r,
      f = D.useMemo(() => (pe(d) ? d.get() : d), [d])
    return D.createElement(n, { ...c, children: f })
  }
}
function rw (e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const s = {
      ...(Za(r) ? bx : Qx),
      preloadedFeatures: e,
      useRender: nw(i),
      createVisualElement: t,
      Component: r
    }
    return Dx(s)
  }
}
const Dl = { current: null },
  ym = { current: !1 }
function iw () {
  if (((ym.current = !0), !!Xa))
    if (window.matchMedia) {
      const e = window.matchMedia('(prefers-reduced-motion)'),
        t = () => (Dl.current = e.matches)
      e.addListener(t), t()
    } else Dl.current = !1
}
function ow (e, t, n) {
  for (const r in t) {
    const i = t[r],
      o = n[r]
    if (pe(i)) e.addValue(r, i)
    else if (pe(o)) e.addValue(r, Kr(i, { owner: e }))
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r)
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i)
      } else {
        const s = e.getStaticValue(r)
        e.addValue(r, Kr(s !== void 0 ? s : i, { owner: e }))
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r)
  return t
}
const Cd = new WeakMap(),
  sw = [...sp, fe, Ot],
  lw = e => sw.find(op(e)),
  Ed = [
    'AnimationStart',
    'AnimationComplete',
    'Update',
    'BeforeLayoutMeasure',
    'LayoutMeasure',
    'LayoutAnimationStart',
    'LayoutAnimationComplete'
  ]
class aw {
  scrapeMotionValuesFromProps (t, n, r) {
    return {}
  }
  constructor (
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: o,
      visualState: s
    },
    l = {}
  ) {
    ;(this.applyWillChange = !1),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Ra),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ))
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const f = et.now()
        this.renderScheduledAt < f &&
          ((this.renderScheduledAt = f), z.render(this.render, !1, !0))
      })
    const { latestValues: a, renderState: u } = s
    ;(this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = l),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = Io(n)),
      (this.isVariantNode = sm(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current))
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    )
    for (const f in d) {
      const g = d[f]
      a[f] !== void 0 && pe(g) && g.set(a[f], !1)
    }
  }
  mount (t) {
    ;(this.current = t),
      Cd.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      ym.current || iw(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
          ? !0
          : Dl.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext)
  }
  unmount () {
    Cd.delete(this.current),
      this.projection && this.projection.unmount(),
      _t(this.notifyUpdate),
      _t(this.render),
      this.valueSubscriptions.forEach(t => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this)
    for (const t in this.events) this.events[t].clear()
    for (const t in this.features) {
      const n = this.features[t]
      n && (n.unmount(), (n.isMounted = !1))
    }
    this.current = null
  }
  bindToMotionValue (t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)()
    const r = Ut.has(t),
      i = n.on('change', l => {
        ;(this.latestValues[t] = l),
          this.props.onUpdate && z.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0)
      }),
      o = n.on('renderRequest', this.scheduleRender)
    let s
    window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), o(), s && s(), n.owner && n.stop()
      })
  }
  sortNodePosition (t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current)
  }
  updateFeatures () {
    let t = 'animation'
    for (t in Kn) {
      const n = Kn[t]
      if (!n) continue
      const { isEnabled: r, Feature: i } = n
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const o = this.features[t]
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0))
      }
    }
  }
  triggerBuild () {
    this.build(this.renderState, this.latestValues, this.props)
  }
  measureViewportBox () {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : X()
  }
  getStaticValue (t) {
    return this.latestValues[t]
  }
  setStaticValue (t, n) {
    this.latestValues[t] = n
  }
  update (t, n) {
    ;(t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n)
    for (let r = 0; r < Ed.length; r++) {
      const i = Ed[r]
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i])
      const o = 'on' + i,
        s = t[o]
      s && (this.propEventSubscriptions[i] = this.on(i, s))
    }
    ;(this.prevMotionValues = ow(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue()
  }
  getProps () {
    return this.props
  }
  getVariant (t) {
    return this.props.variants ? this.props.variants[t] : void 0
  }
  getDefaultTransition () {
    return this.props.transition
  }
  getTransformPagePoint () {
    return this.props.transformPagePoint
  }
  getClosestVariantNode () {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0
  }
  addVariantChild (t) {
    const n = this.getClosestVariantNode()
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      )
  }
  addValue (t, n) {
    const r = this.values.get(t)
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()))
  }
  removeValue (t) {
    this.values.delete(t)
    const n = this.valueSubscriptions.get(t)
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState)
  }
  hasValue (t) {
    return this.values.has(t)
  }
  getValue (t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t]
    let r = this.values.get(t)
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Kr(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    )
  }
  readValue (t, n) {
    var r
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options)
    return (
      i != null &&
        (typeof i == 'string' && (tp(i) || ep(i))
          ? (i = parseFloat(i))
          : !lw(i) && Ot.test(n) && (i = pp(t, n)),
        this.setBaseTarget(t, pe(i) ? i.get() : i)),
      pe(i) ? i.get() : i
    )
  }
  setBaseTarget (t, n) {
    this.baseTarget[t] = n
  }
  getBaseTarget (t) {
    var n
    const { initial: r } = this.props
    let i
    if (typeof r == 'string' || typeof r == 'object') {
      const s = Aa(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      )
      s && (i = s[t])
    }
    if (r && i !== void 0) return i
    const o = this.getBaseTargetFromProps(this.props, t)
    return o !== void 0 && !pe(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t]
  }
  on (t, n) {
    return this.events[t] || (this.events[t] = new ba()), this.events[t].add(n)
  }
  notify (t, ...n) {
    this.events[t] && this.events[t].notify(...n)
  }
}
class vm extends aw {
  constructor () {
    super(...arguments), (this.KeyframeResolver = mp)
  }
  sortInstanceNodePosition (t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1
  }
  getBaseTargetFromProps (t, n) {
    return t.style ? t.style[n] : void 0
  }
  removeValueFromRenderState (t, { vars: n, style: r }) {
    delete n[t], delete r[t]
  }
}
function uw (e) {
  return window.getComputedStyle(e)
}
class cw extends vm {
  constructor () {
    super(...arguments),
      (this.type = 'html'),
      (this.applyWillChange = !0),
      (this.renderInstance = lm)
  }
  readValueFromInstance (t, n) {
    if (Ut.has(n)) {
      const r = Ia(n)
      return (r && r.default) || 0
    } else {
      const r = uw(t),
        i = (rp(n) ? r.getPropertyValue(n) : r[n]) || 0
      return typeof i == 'string' ? i.trim() : i
    }
  }
  measureInstanceViewportBox (t, { transformPagePoint: n }) {
    return Wp(t, n)
  }
  build (t, n, r) {
    eu(t, n, r.transformTemplate)
  }
  scrapeMotionValuesFromProps (t, n, r) {
    return Ja(t, n, r)
  }
  handleChildMotionValue () {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription)
    const { children: t } = this.props
    pe(t) &&
      (this.childSubscription = t.on('change', n => {
        this.current && (this.current.textContent = `${n}`)
      }))
  }
}
class dw extends vm {
  constructor () {
    super(...arguments),
      (this.type = 'svg'),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = X)
  }
  getBaseTargetFromProps (t, n) {
    return t[n]
  }
  readValueFromInstance (t, n) {
    if (Ut.has(n)) {
      const r = Ia(n)
      return (r && r.default) || 0
    }
    return (n = am.has(n) ? n : _o(n)), t.getAttribute(n)
  }
  scrapeMotionValuesFromProps (t, n, r) {
    return dm(t, n, r)
  }
  build (t, n, r) {
    tu(t, n, this.isSVGTag, r.transformTemplate)
  }
  renderInstance (t, n, r, i) {
    um(t, n, r, i)
  }
  mount (t) {
    ;(this.isSVGTag = nu(t.tagName)), super.mount(t)
  }
}
const fw = (e, t) =>
    Za(e) ? new dw(t) : new cw(t, { allowProjection: e !== D.Fragment }),
  hw = rw({ ...e1, ...kx, ...dx, ...Px }, fw),
  O = Gg(hw),
  Ad = '/assets/profile-BJl4HqXF.png',
  pw = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  },
  Pi = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  },
  Vd = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'backOut' }
    }
  },
  mw = () =>
    w.jsx('section', {
      className: 'py-8 lg:py-24 overflow-hidden relative',
      children: w.jsxs('div', {
        className: 'container mx-auto px-4 relative z-10',
        children: [
          w.jsx(O.div, {
            className: 'flex lg:hidden justify-center mb-8',
            initial: 'hidden',
            animate: 'visible',
            variants: Vd,
            children: w.jsxs('div', {
              className: 'relative w-48 h-48 sm:w-56 sm:h-56',
              children: [
                w.jsx('div', {
                  className:
                    'relative z-10 w-full h-full overflow-hidden rounded-full border-4 border-red-500 shadow-lg',
                  children: w.jsx('img', {
                    src: Ad,
                    alt: 'Suraj Jadhav',
                    className: 'w-full h-full object-cover',
                    style: { objectPosition: 'center top' }
                  })
                }),
                w.jsx('div', {
                  className:
                    'absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-stone-600/30 blur-xl z-0'
                })
              ]
            })
          }),
          w.jsxs('div', {
            className:
              'flex flex-col-reverse lg:flex-row items-center justify-between gap-8',
            children: [
              w.jsxs(O.div, {
                className:
                  'w-full lg:w-1/2 flex flex-col items-center lg:items-start',
                initial: 'hidden',
                animate: 'visible',
                variants: pw,
                children: [
                  w.jsx(O.h1, {
                    className:
                      'text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 text-center lg:text-left',
                    variants: Pi,
                    children: 'Suraj Jadhav'
                  }),
                  w.jsx(O.h2, {
                    className:
                      'text-2xl md:text-3xl bg-gradient-to-r from-gray-300 to-stone-500 bg-clip-text text-transparent mb-6 font-medium text-center lg:text-left',
                    variants: Pi,
                    children: 'Full Stack Developer'
                  }),
                  w.jsx(O.p, {
                    className:
                      'text-stone-300 text-lg md:text-xl leading-relaxed mb-8 max-w-lg text-center lg:text-left',
                    variants: Pi,
                    children:
                      "I'm a Java full-stack developer skilled in Spring, Spring Boot, and microservices. I build scalable backend systems while completing my Bachelor's degree. Passionate about creating efficient solutions for real-world applications."
                  }),
                  w.jsx(O.div, {
                    variants: Pi,
                    children: w.jsxs('a', {
                      href: 'https://drive.google.com/file/d/13r1QWQiciACiVUhFW_-Dl6j_j4GiqC_V/view?usp=drive_link',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className:
                        'inline-flex items-center px-8 py-3 bg-stone-700 hover:bg-stone-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-stone-500/30 group',
                      children: [
                        'Resume',
                        w.jsx('svg', {
                          xmlns: 'http://www.w3.org/2000/svg',
                          className:
                            'h-5 w-5 ml-2 group-hover:translate-y-1 transition-transform',
                          viewBox: '0 0 24 24',
                          fill: 'currentColor',
                          children: w.jsx('path', {
                            d: 'M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8.414A2 2 0 0019.414 7L14 1.586A2 2 0 0012.586 1H6zm7 1.414L18.586 8H13a1 1 0 01-1-1V3.414z'
                          })
                        })
                      ]
                    })
                  })
                ]
              }),
              w.jsx(O.div, {
                className: 'hidden lg:flex w-full lg:w-1/2 justify-center',
                initial: 'hidden',
                animate: 'visible',
                variants: Vd,
                children: w.jsxs('div', {
                  className:
                    'relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-112 xl:h-112',
                  children: [
                    w.jsx('div', {
                      className:
                        'relative z-10 w-full h-full overflow-hidden rounded-full border-4 border-red-500 shadow-lg',
                      children: w.jsx('img', {
                        src: Ad,
                        alt: 'Suraj Jadhav',
                        className: 'w-full h-full object-cover',
                        style: { objectPosition: 'center top' }
                      })
                    }),
                    w.jsx('div', {
                      className:
                        'absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-stone-600/30 blur-xl z-0'
                    })
                  ]
                })
              })
            ]
          })
        ]
      })
    }),
  gw = e => ({
    initial: { y: -20, opacity: 0, scale: 0.8 },
    animate: {
      y: [10, -10],
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: 1 / 0,
        repeatType: 'reverse',
        delay: e * 0.1
      }
    }
  }),
  yw = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.3, duration: 0.6 }
    }
  },
  vw = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 150, damping: 10 }
    },
    hover: { y: -5, transition: { duration: 0.2 } }
  },
  xw = () => {
    const e = [
      {
        name: 'Programming Languages',
        items: [
          {
            icon: 'fa-brands fa-java',
            name: 'Java',
            color: 'text-red-500',
            bg: 'bg-red-500/10'
          },
          {
            icon: 'fa-brands fa-js',
            name: 'JavaScript',
            color: 'text-yellow-400',
            bg: 'bg-yellow-400/10'
          },
          {
            icon: 'fa-brands fa-html5',
            name: 'HTML5',
            color: 'text-orange-500',
            bg: 'bg-orange-500/10'
          },
          {
            icon: 'fa-brands fa-css3-alt',
            name: 'CSS3',
            color: 'text-blue-500',
            bg: 'bg-blue-500/10'
          },
          {
            icon: 'fa-solid fa-database',
            name: 'SQL',
            color: 'text-blue-700',
            bg: 'bg-blue-700/10'
          }
        ]
      },
      {
        name: 'Frameworks & Libraries',
        items: [
          {
            icon: 'fa-brands fa-react',
            name: 'ReactJS',
            color: 'text-cyan-400',
            bg: 'bg-cyan-400/10'
          },
          {
            icon: 'fa-solid fa-leaf',
            name: 'Spring',
            color: 'text-green-600',
            bg: 'bg-green-600/10'
          },
          {
            icon: 'fa-solid fa-leaf',
            name: 'Spring Boot',
            color: 'text-green-500',
            bg: 'bg-green-500/10'
          },
          {
            icon: 'fa-solid fa-layer-group',
            name: 'Hibernate',
            color: 'text-purple-600',
            bg: 'bg-purple-600/10'
          },
          {
            icon: 'fa-brands fa-bootstrap',
            name: 'Bootstrap',
            color: 'text-purple-500',
            bg: 'bg-purple-500/10'
          },
          {
            icon: 'fa-brands fa-node-js',
            name: 'NodeJS',
            color: 'text-green-400',
            bg: 'bg-green-400/10'
          }
        ]
      },
      {
        name: 'Backend Technologies',
        items: [
          {
            icon: 'fa-solid fa-code',
            name: 'JSP / Servlet',
            color: 'text-amber-600',
            bg: 'bg-amber-600/10'
          },
          {
            icon: 'fa-solid fa-database',
            name: 'JDBC',
            color: 'text-blue-600',
            bg: 'bg-blue-600/10'
          }
        ]
      },
      {
        name: 'Database',
        items: [
          {
            icon: 'fa-solid fa-database',
            name: 'MySQL',
            color: 'text-blue-400',
            bg: 'bg-blue-400/10'
          }
        ]
      },
      {
        name: 'Developer Tools',
        items: [
          {
            icon: 'fa-brands fa-git-alt',
            name: 'Git/GitHub',
            color: 'text-orange-600',
            bg: 'bg-orange-600/10'
          },
          {
            icon: 'fa-solid fa-code',
            name: 'VS Code',
            color: 'text-blue-400',
            bg: 'bg-blue-400/10'
          },
          {
            icon: 'fa-solid fa-jet-fighter',
            name: 'IntelliJ',
            color: 'text-purple-500',
            bg: 'bg-purple-500/10'
          },
          {
            icon: 'fa-solid fa-moon',
            name: 'Eclipse',
            color: 'text-indigo-600',
            bg: 'bg-indigo-600/10'
          },
          {
            icon: 'fa-solid fa-paper-plane',
            name: 'Postman',
            color: 'text-orange-500',
            bg: 'bg-orange-500/10'
          }
        ]
      }
    ]
    return w.jsx('section', {
      id: 'technologies',
      className: 'py-20 ',
      children: w.jsxs('div', {
        className: 'container mx-auto px-4 max-w-6xl',
        children: [
          w.jsxs(O.div, {
            initial: { opacity: 0, y: -50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            viewport: { once: !0 },
            className: 'text-center mb-16',
            children: [
              w.jsxs('h2', {
                className:
                  'text-4xl md:text-5xl font-bold text-stone-800 dark:text-stone-200 mb-4',
                children: [
                  'Technical',
                  ' ',
                  w.jsx('span', {
                    className: 'text-indigo-600 dark:text-indigo-400',
                    children: 'Skills'
                  })
                ]
              }),
              w.jsx('p', {
                className:
                  'text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto',
                children:
                  'My core competencies and tools I use to build exceptional applications'
              })
            ]
          }),
          w.jsx('div', {
            className: 'space-y-12',
            children: e.map((t, n) =>
              w.jsxs(
                O.div,
                {
                  initial: 'hidden',
                  whileInView: 'visible',
                  viewport: { once: !0, margin: '-50px' },
                  variants: yw,
                  children: [
                    w.jsxs(O.h3, {
                      className:
                        'text-2xl font-bold mb-6 text-stone-800 dark:text-stone-200',
                      variants: {
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      },
                      children: [
                        t.name,
                        w.jsx('div', {
                          className: 'w-16 h-1 bg-indigo-500 rounded-full mt-2'
                        })
                      ]
                    }),
                    w.jsx('div', {
                      className:
                        'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4',
                      children: t.items.map((r, i) =>
                        w.jsxs(
                          O.div,
                          {
                            variants: vw,
                            whileHover: 'hover',
                            className: `flex flex-col items-center p-4 rounded-lg ${r.bg} border border-stone-200 dark:border-stone-700`,
                            children: [
                              w.jsx(O.div, {
                                initial: 'initial',
                                animate: 'animate',
                                variants: gw(i),
                                className: `text-4xl ${r.color} mb-3`,
                                children: w.jsx('i', { className: r.icon })
                              }),
                              w.jsx('span', {
                                className:
                                  'text-sm font-medium text-stone-700 dark:text-stone-300 text-center',
                                children: r.name
                              })
                            ]
                          },
                          i
                        )
                      )
                    })
                  ]
                },
                n
              )
            )
          }),
          w.jsxs(O.div, {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            transition: { delay: 0.4 },
            viewport: { once: !0 },
            className: 'mt-16 bg-stone-100 dark:bg-stone-800/50 rounded-lg p-6',
            children: [
              w.jsx('h4', {
                className:
                  'text-lg font-semibold text-stone-800 dark:text-stone-200 mb-2',
                children: 'Additional Technical Skills'
              }),
              w.jsxs('ul', {
                className:
                  'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-stone-600 dark:text-stone-400',
                children: [
                  w.jsxs('li', {
                    className: 'flex items-center',
                    children: [
                      w.jsx('span', {
                        className: 'w-2 h-2 bg-indigo-500 rounded-full mr-2'
                      }),
                      'Data Structures & Algorithms'
                    ]
                  }),
                  w.jsxs('li', {
                    className: 'flex items-center',
                    children: [
                      w.jsx('span', {
                        className: 'w-2 h-2 bg-indigo-500 rounded-full mr-2'
                      }),
                      'Object-Oriented Programming'
                    ]
                  }),
                  w.jsxs('li', {
                    className: 'flex items-center',
                    children: [
                      w.jsx('span', {
                        className: 'w-2 h-2 bg-indigo-500 rounded-full mr-2'
                      }),
                      'Problem Solving'
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    })
  },
  Nd = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  },
  ww = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.1, 0.7, 0.3, 1],
        type: 'spring',
        stiffness: 80,
        damping: 15
      }
    }
  },
  Sw = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 150, damping: 10 }
    }
  },
  kw = () => {
    const e = [
      {
        title: 'StudyHub – Collaborative Learning Platform',
        description:
          'Developed StudyHub, a collaborative platform for students to upload, share, and access study materials through seamless integration with the Google Drive API.',
        technologies: [
          'Spring Boot',
          'Google Drive API',
          'PostgreSQL',
          'Thymeleaf'
        ],
        image: 'ScreenShots/study-hub.png',
        link: 'https://studyhub-8p65.onrender.com/'
      },
      {
        title: 'Data Migration Tool',
        description:
          'Developed a tool using Spring Batch to read customer data from CSV files, clean it, apply filters, and store it in a MySQL database. Ensured efficient data processing and maintained data integrity throughout the migration process.',
        technologies: ['SpringBoot', 'SpringDataJPA', 'SpringBatch', 'MySQL'],
        image:
          'https://assets.techrepublic.com/uploads/2022/10/tr-what-is-data-migration.jpeg',
        link: 'https://github.com/surajj04/DataMigrationTool.git'
      },
      {
        title: 'Pocket (Expense Tracking)',
        description:
          'An intuitive Expense Tracking web application built with React.js and Spring Boot that allows users to manage budgets, track spending, and generate monthly reports efficiently.',
        technologies: ['React.js', 'Spring Boot', 'MySQL', 'Bootstrap'],
        image: 'ScreenShots/expense-tracking.png',
        link: 'https://pocket-rgsd.onrender.com/'
      },
      {
        title: 'Smart-Attend',
        description:
          'Attendance Management System that automated attendance tracking, reduced manual errors by 60%, and decreased processing time. Improved record-keeping for educational institutions.',
        technologies: [
          'Java',
          'SpringBoot',
          'MySQL',
          'Spring Data JPA',
          'React JS'
        ],
        image: 'ScreenShots/attendance-app.png',
        link: 'https://smart-attend-beta.vercel.app/'
      },
      {
        title: 'Weather App',
        description:
          'Fetches current weather data and forecasts worldwide using OpenWeather API. Features temperature, humidity, and weather conditions with a responsive interface.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
        image: 'ScreenShots/weather.png',
        link: 'https://weather-app-04.netlify.app/'
      }
    ]
    return w.jsx('section', {
      id: 'projects',
      className: 'py-20',
      children: w.jsxs('div', {
        className: 'container mx-auto px-4 max-w-6xl',
        children: [
          w.jsxs(O.div, {
            initial: { opacity: 0, y: -50 },
            whileInView: {
              opacity: 1,
              y: 0,
              transition: { type: 'spring', stiffness: 100, damping: 10 }
            },
            viewport: { once: !0, margin: '-50px' },
            className: 'text-center mb-16',
            children: [
              w.jsxs('h2', {
                className:
                  'text-4xl md:text-5xl font-bold text-stone-800 dark:text-stone-200 mb-4',
                children: [
                  'My',
                  ' ',
                  w.jsx('span', {
                    className: 'text-indigo-600 dark:text-indigo-400',
                    children: 'Projects'
                  })
                ]
              }),
              w.jsx('p', {
                className:
                  'text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto',
                children:
                  'Selected work showcasing my development skills and problem-solving approach'
              })
            ]
          }),
          w.jsx(O.div, {
            variants: Nd,
            initial: 'hidden',
            whileInView: 'visible',
            viewport: { once: !0, margin: '-100px' },
            className: 'space-y-24',
            children: e.map((t, n) =>
              w.jsxs(
                O.div,
                {
                  variants: ww,
                  className: `flex flex-col ${
                    n % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 items-center`,
                  children: [
                    w.jsx('div', {
                      className: 'w-full lg:w-1/2',
                      children: w.jsx(O.div, {
                        whileHover: { scale: 1.02 },
                        whileTap: { scale: 0.98 },
                        transition: {
                          type: 'spring',
                          stiffness: 400,
                          damping: 15
                        },
                        className:
                          'overflow-hidden rounded-xl shadow-lg border border-stone-200 dark:border-stone-700 hover:shadow-indigo-200/20 dark:hover:shadow-indigo-500/10 transition-shadow',
                        children: w.jsx('img', {
                          src: t.image,
                          alt: t.title,
                          className:
                            'w-full h-auto object-cover transition-transform duration-500 hover:scale-105'
                        })
                      })
                    }),
                    w.jsxs('div', {
                      className: 'w-full lg:w-1/2',
                      children: [
                        w.jsxs('div', {
                          className: 'flex items-center gap-2 mb-3',
                          children: [
                            w.jsx(O.h3, {
                              className:
                                'text-2xl md:text-3xl font-bold text-stone-800 dark:text-stone-200',
                              whileHover: { x: 5 },
                              transition: { type: 'spring', stiffness: 300 },
                              children: t.title
                            }),
                            w.jsx(O.a, {
                              href: t.link,
                              target: '_blank',
                              rel: 'noopener noreferrer',
                              className:
                                'text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors',
                              'aria-label': `View ${t.title} project`,
                              whileHover: { scale: 1.2 },
                              whileTap: { scale: 0.9 },
                              children: w.jsx('i', {
                                className:
                                  'fa-solid fa-arrow-up-right-from-square text-xl'
                              })
                            })
                          ]
                        }),
                        w.jsx(O.p, {
                          className: 'text-stone-600 dark:text-stone-400 mb-6',
                          initial: { opacity: 0 },
                          whileInView: { opacity: 1 },
                          transition: { delay: 0.3 },
                          viewport: { once: !0 },
                          children: t.description
                        }),
                        w.jsx(O.div, {
                          className: 'flex flex-wrap gap-2',
                          variants: Nd,
                          children: t.technologies.map((r, i) =>
                            w.jsx(
                              O.span,
                              {
                                variants: Sw,
                                whileHover: {
                                  y: -3,
                                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                  transition: { duration: 0.2 }
                                },
                                className:
                                  'inline-block px-3 py-1 rounded-full text-sm font-medium bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors',
                                children: r
                              },
                              i
                            )
                          )
                        })
                      ]
                    })
                  ]
                },
                n
              )
            )
          })
        ]
      })
    })
  },
  Pw = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  },
  Tw = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.1, 0.7, 0.3, 1] }
    }
  },
  Cw = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: 'spring', stiffness: 200, damping: 15 }
    }
  },
  Ew = () => {
    const e = [
      {
        type: 'education',
        title: 'Parvatibai Genba Moze College of Engineering',
        subtitle: 'Savitribai Phule Pune University',
        description: 'Bachelor of Engineering in Computer Engineering',
        date: '2021 - 2025',
        tags: [
          {
            text: 'CGPA: 7.60',
            bg: 'bg-stone-100 dark:bg-stone-700/50',
            textColor: 'text-stone-700 dark:text-stone-200'
          },
          {
            text: 'Degree Awarded',
            bg: 'bg-indigo-100 dark:bg-indigo-900/30',
            textColor: 'text-indigo-700 dark:text-indigo-300'
          }
        ]
      },
      {
        type: 'education',
        title: 'Marathwada Mitra Mandal College of Commerce & Science',
        description: 'Higher Secondary School Certificate (HSC)',
        date: '2019 - 2021',
        tags: [
          {
            text: 'Percentage: 72.17%',
            bg: 'bg-stone-100 dark:bg-stone-700/50',
            textColor: 'text-stone-700 dark:text-stone-200'
          },
          {
            text: 'Completed',
            bg: 'bg-indigo-100 dark:bg-indigo-900/30',
            textColor: 'text-indigo-700 dark:text-indigo-300'
          }
        ]
      }
    ]
    return w.jsx('section', {
      id: 'experience',
      className: 'py-28 ',
      children: w.jsxs('div', {
        className: 'container mx-auto px-4',
        children: [
          w.jsxs(O.div, {
            initial: { opacity: 0, y: -50 },
            whileInView: {
              opacity: 1,
              y: 0,
              transition: { type: 'spring', stiffness: 100, damping: 10 }
            },
            viewport: { once: !0, margin: '-50px' },
            className: 'text-center mb-16',
            children: [
              w.jsxs('h2', {
                className:
                  'text-4xl md:text-5xl font-bold text-stone-800 dark:text-stone-200 mb-4',
                children: [
                  'Education &',
                  ' ',
                  w.jsx('span', {
                    className: 'text-indigo-600 dark:text-indigo-400',
                    children: 'Experience'
                  })
                ]
              }),
              w.jsx('p', {
                className:
                  'text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto',
                children: 'My academic background and professional journey'
              })
            ]
          }),
          w.jsxs('div', {
            className: 'relative max-w-5xl mx-auto',
            children: [
              w.jsx(O.div, {
                initial: { scaleY: 0 },
                whileInView: { scaleY: 1 },
                transition: { duration: 1, ease: 'easeOut' },
                viewport: { once: !0 },
                className:
                  'absolute left-1/4 h-full w-0.5 bg-gradient-to-b from-indigo-200/20 via-indigo-500 to-indigo-200/20 dark:from-indigo-900/20 dark:via-indigo-500 dark:to-indigo-900/20 origin-top'
              }),
              w.jsx(O.div, {
                variants: Pw,
                initial: 'hidden',
                whileInView: 'visible',
                viewport: { once: !0, margin: '-100px' },
                className: 'space-y-12',
                children: e.map((t, n) =>
                  w.jsxs(
                    O.div,
                    {
                      variants: Tw,
                      className: 'flex flex-col lg:flex-row',
                      children: [
                        w.jsx('div', {
                          className: 'w-full lg:w-1/4 mb-4 lg:mb-0 lg:pr-8',
                          children: w.jsxs('div', {
                            className: 'flex items-center',
                            children: [
                              w.jsx(O.div, {
                                variants: Cw,
                                className:
                                  'w-4 h-4 rounded-full bg-indigo-500 border-2 border-indigo-300 shadow-lg shadow-indigo-500/30 dark:shadow-indigo-500/20 flex-shrink-0'
                              }),
                              w.jsx(O.p, {
                                className:
                                  'ml-4 text-sm md:text-base text-indigo-600 dark:text-indigo-300 font-medium',
                                initial: { opacity: 0 },
                                whileInView: { opacity: 1 },
                                transition: { delay: 0.3 },
                                viewport: { once: !0 },
                                children: t.date
                              })
                            ]
                          })
                        }),
                        w.jsxs(O.div, {
                          whileHover: {
                            y: -5,
                            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)',
                            borderColor: 'rgba(99, 102, 241, 0.5)'
                          },
                          transition: { type: 'spring', stiffness: 300 },
                          className:
                            'w-full lg:w-3/4 bg-white dark:bg-stone-800/80 backdrop-blur-sm rounded-xl p-6 border border-stone-200 dark:border-stone-700 shadow-sm hover:shadow-md transition-all duration-300',
                          children: [
                            w.jsxs('h3', {
                              className:
                                'text-xl md:text-2xl font-bold text-stone-800 dark:text-white mb-1',
                              children: [
                                t.title,
                                t.company &&
                                  w.jsx('span', {
                                    className:
                                      'text-indigo-600 dark:text-indigo-400 text-lg ml-2',
                                    children: t.company
                                  })
                              ]
                            }),
                            t.subtitle &&
                              w.jsx('p', {
                                className:
                                  'text-stone-500 dark:text-stone-400 italic mb-3',
                                children: t.subtitle
                              }),
                            t.description &&
                              w.jsx('p', {
                                className:
                                  'text-stone-600 dark:text-stone-300 mb-4',
                                children: t.description
                              }),
                            t.bullets &&
                              w.jsx('ul', {
                                className:
                                  'text-stone-600 dark:text-stone-300 mb-4 list-disc list-inside space-y-2',
                                children: t.bullets.map((r, i) =>
                                  w.jsx(
                                    O.li,
                                    {
                                      initial: { opacity: 0, x: -10 },
                                      whileInView: { opacity: 1, x: 0 },
                                      transition: { delay: 0.1 * i },
                                      viewport: { once: !0 },
                                      children: r
                                    },
                                    i
                                  )
                                )
                              }),
                            w.jsx('div', {
                              className: 'flex flex-wrap gap-2',
                              children: t.tags.map((r, i) =>
                                w.jsx(
                                  O.span,
                                  {
                                    initial: { opacity: 0, scale: 0.8 },
                                    whileInView: { opacity: 1, scale: 1 },
                                    transition: { delay: 0.1 * i },
                                    viewport: { once: !0 },
                                    whileHover: {
                                      y: -2,
                                      backgroundColor:
                                        t.type === 'experience'
                                          ? 'rgba(224, 231, 255, 0.8)'
                                          : 'rgba(255, 228, 230, 0.8)',
                                      transition: { duration: 0.2 }
                                    },
                                    className: `inline-block px-3 py-1 rounded-full text-sm font-medium ${r.bg} ${r.textColor} border border-stone-200 dark:border-stone-600 transition-colors`,
                                    children: r.text
                                  },
                                  i
                                )
                              )
                            })
                          ]
                        })
                      ]
                    },
                    n
                  )
                )
              })
            ]
          })
        ]
      })
    })
  },
  Aw = () =>
    w.jsxs('div', {
      className: 'border-t border-stone-900 pb-20',
      children: [
        w.jsx(O.h2, {
          whileInView: { opacity: 1, y: 0 },
          initial: { opacity: 1, y: -100 },
          transition: { duration: 0.5 },
          className: 'my-10 text-center text-4xl',
          children: 'Get in Touch'
        }),
        w.jsx('div', {
          className: 'text-center tracking-tighter',
          children: w.jsx('a', {
            href: 'mailtp:surajjadhav015@outlook.com',
            className: 'border-b',
            children: 'surajjadhav015@outlook.com'
          })
        })
      ]
    }),
  Vw = () =>
    w.jsxs('div', {
      className: 'overflow-x-hidden text-stone-300 antialiased',
      children: [
        w.jsx('div', {
          className: 'fixed inset-0 -z-10',
          children: w.jsx('div', {
            class:
              'absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'
          })
        }),
        w.jsxs('div', {
          className: 'container mx-auto px-8',
          children: [
            w.jsx(Kg, {}),
            w.jsx(mw, {}),
            w.jsx(Ew, {}),
            w.jsx(xw, {}),
            w.jsx(kw, {}),
            w.jsx(Aw, {})
          ]
        })
      ]
    })
Wh(document.getElementById('root')).render(
  w.jsx(D.StrictMode, { children: w.jsx(Vw, {}) })
)
