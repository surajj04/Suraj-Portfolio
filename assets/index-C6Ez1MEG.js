;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
  new MutationObserver(i => {
    for (const s of i)
      if (s.type === 'childList')
        for (const o of s.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function n (i) {
    const s = {}
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    )
  }
  function r (i) {
    if (i.ep) return
    i.ep = !0
    const s = n(i)
    fetch(i.href, s)
  }
})()
var Vf = { exports: {} },
  ys = {},
  Mf = { exports: {} },
  R = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qr = Symbol.for('react.element'),
  ym = Symbol.for('react.portal'),
  vm = Symbol.for('react.fragment'),
  xm = Symbol.for('react.strict_mode'),
  wm = Symbol.for('react.profiler'),
  Sm = Symbol.for('react.provider'),
  Pm = Symbol.for('react.context'),
  Tm = Symbol.for('react.forward_ref'),
  km = Symbol.for('react.suspense'),
  Cm = Symbol.for('react.memo'),
  Em = Symbol.for('react.lazy'),
  su = Symbol.iterator
function Nm (e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (su && e[su]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var jf = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  Df = Object.assign,
  Lf = {}
function Qn (e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Lf),
    (this.updater = n || jf)
}
Qn.prototype.isReactComponent = {}
Qn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
Qn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function Rf () {}
Rf.prototype = Qn.prototype
function Rl (e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Lf),
    (this.updater = n || jf)
}
var _l = (Rl.prototype = new Rf())
_l.constructor = Rl
Df(_l, Qn.prototype)
_l.isPureReactComponent = !0
var ou = Array.isArray,
  _f = Object.prototype.hasOwnProperty,
  Fl = { current: null },
  Ff = { key: !0, ref: !0, __self: !0, __source: !0 }
function If (e, t, n) {
  var r,
    i = {},
    s = null,
    o = null
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = '' + t.key),
    t))
      _f.call(t, r) && !Ff.hasOwnProperty(r) && (i[r] = t[r])
  var l = arguments.length - 2
  if (l === 1) i.children = n
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2]
    i.children = a
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r])
  return { $$typeof: Qr, type: e, key: s, ref: o, props: i, _owner: Fl.current }
}
function Am (e, t) {
  return {
    $$typeof: Qr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  }
}
function Il (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Qr
}
function Vm (e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var lu = /\/+/g
function Bs (e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Vm('' + e.key)
    : t.toString(36)
}
function Ci (e, t, n, r, i) {
  var s = typeof e
  ;(s === 'undefined' || s === 'boolean') && (e = null)
  var o = !1
  if (e === null) o = !0
  else
    switch (s) {
      case 'string':
      case 'number':
        o = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case Qr:
          case ym:
            o = !0
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === '' ? '.' + Bs(o, 0) : r),
      ou(i)
        ? ((n = ''),
          e != null && (n = e.replace(lu, '$&/') + '/'),
          Ci(i, t, n, '', function (u) {
            return u
          }))
        : i != null &&
          (Il(i) &&
            (i = Am(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ''
                  : ('' + i.key).replace(lu, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    )
  if (((o = 0), (r = r === '' ? '.' : r + ':'), ou(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l]
      var a = r + Bs(s, l)
      o += Ci(s, t, n, a, i)
    }
  else if (((a = Nm(e)), typeof a == 'function'))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + Bs(s, l++)), (o += Ci(s, t, n, a, i))
  else if (s === 'object')
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
  return o
}
function ii (e, t, n) {
  if (e == null) return e
  var r = [],
    i = 0
  return (
    Ci(e, r, '', '', function (s) {
      return t.call(n, s, i++)
    }),
    r
  )
}
function Mm (e) {
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
  Ei = { transition: null },
  jm = {
    ReactCurrentDispatcher: xe,
    ReactCurrentBatchConfig: Ei,
    ReactCurrentOwner: Fl
  }
function Of () {
  throw Error('act(...) is not supported in production builds of React.')
}
R.Children = {
  map: ii,
  forEach: function (e, t, n) {
    ii(
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
      ii(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      ii(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Il(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return e
  }
}
R.Component = Qn
R.Fragment = vm
R.Profiler = wm
R.PureComponent = Rl
R.StrictMode = xm
R.Suspense = km
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jm
R.act = Of
R.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    )
  var r = Df({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = Fl.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps
    for (a in t)
      _f.call(t, a) &&
        !Ff.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
  }
  var a = arguments.length - 2
  if (a === 1) r.children = n
  else if (1 < a) {
    l = Array(a)
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2]
    r.children = l
  }
  return { $$typeof: Qr, type: e.type, key: i, ref: s, props: r, _owner: o }
}
R.createContext = function (e) {
  return (
    (e = {
      $$typeof: Pm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }),
    (e.Provider = { $$typeof: Sm, _context: e }),
    (e.Consumer = e)
  )
}
R.createElement = If
R.createFactory = function (e) {
  var t = If.bind(null, e)
  return (t.type = e), t
}
R.createRef = function () {
  return { current: null }
}
R.forwardRef = function (e) {
  return { $$typeof: Tm, render: e }
}
R.isValidElement = Il
R.lazy = function (e) {
  return { $$typeof: Em, _payload: { _status: -1, _result: e }, _init: Mm }
}
R.memo = function (e, t) {
  return { $$typeof: Cm, type: e, compare: t === void 0 ? null : t }
}
R.startTransition = function (e) {
  var t = Ei.transition
  Ei.transition = {}
  try {
    e()
  } finally {
    Ei.transition = t
  }
}
R.unstable_act = Of
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
Mf.exports = R
var D = Mf.exports
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dm = D,
  Lm = Symbol.for('react.element'),
  Rm = Symbol.for('react.fragment'),
  _m = Object.prototype.hasOwnProperty,
  Fm = Dm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Im = { key: !0, ref: !0, __self: !0, __source: !0 }
function zf (e, t, n) {
  var r,
    i = {},
    s = null,
    o = null
  n !== void 0 && (s = '' + n),
    t.key !== void 0 && (s = '' + t.key),
    t.ref !== void 0 && (o = t.ref)
  for (r in t) _m.call(t, r) && !Im.hasOwnProperty(r) && (i[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r])
  return { $$typeof: Lm, type: e, key: s, ref: o, props: i, _owner: Fm.current }
}
ys.Fragment = Rm
ys.jsx = zf
ys.jsxs = zf
Vf.exports = ys
var x = Vf.exports,
  Bf = { exports: {} },
  je = {},
  Uf = { exports: {} },
  $f = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t (E, j) {
    var L = E.length
    E.push(j)
    e: for (; 0 < L; ) {
      var X = (L - 1) >>> 1,
        re = E[X]
      if (0 < i(re, j)) (E[X] = j), (E[L] = re), (L = X)
      else break e
    }
  }
  function n (E) {
    return E.length === 0 ? null : E[0]
  }
  function r (E) {
    if (E.length === 0) return null
    var j = E[0],
      L = E.pop()
    if (L !== j) {
      E[0] = L
      e: for (var X = 0, re = E.length, ni = re >>> 1; X < ni; ) {
        var Ht = 2 * (X + 1) - 1,
          zs = E[Ht],
          Kt = Ht + 1,
          ri = E[Kt]
        if (0 > i(zs, L))
          Kt < re && 0 > i(ri, zs)
            ? ((E[X] = ri), (E[Kt] = L), (X = Kt))
            : ((E[X] = zs), (E[Ht] = L), (X = Ht))
        else if (Kt < re && 0 > i(ri, L)) (E[X] = ri), (E[Kt] = L), (X = Kt)
        else break e
      }
    }
    return j
  }
  function i (E, j) {
    var L = E.sortIndex - j.sortIndex
    return L !== 0 ? L : E.id - j.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var s = performance
    e.unstable_now = function () {
      return s.now()
    }
  } else {
    var o = Date,
      l = o.now()
    e.unstable_now = function () {
      return o.now() - l
    }
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    g = !1,
    y = !1,
    v = !1,
    T = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function m (E) {
    for (var j = n(u); j !== null; ) {
      if (j.callback === null) r(u)
      else if (j.startTime <= E) r(u), (j.sortIndex = j.expirationTime), t(a, j)
      else break
      j = n(u)
    }
  }
  function w (E) {
    if (((v = !1), m(E), !y))
      if (n(a) !== null) (y = !0), ti(S)
      else {
        var j = n(u)
        j !== null && b(w, j.startTime - E)
      }
  }
  function S (E, j) {
    ;(y = !1), v && ((v = !1), p(k), (k = -1)), (g = !0)
    var L = d
    try {
      for (
        m(j), f = n(a);
        f !== null && (!(f.expirationTime > j) || (E && !ne()));

      ) {
        var X = f.callback
        if (typeof X == 'function') {
          ;(f.callback = null), (d = f.priorityLevel)
          var re = X(f.expirationTime <= j)
          ;(j = e.unstable_now()),
            typeof re == 'function' ? (f.callback = re) : f === n(a) && r(a),
            m(j)
        } else r(a)
        f = n(a)
      }
      if (f !== null) var ni = !0
      else {
        var Ht = n(u)
        Ht !== null && b(w, Ht.startTime - j), (ni = !1)
      }
      return ni
    } finally {
      ;(f = null), (d = L), (g = !1)
    }
  }
  var C = !1,
    N = null,
    k = -1,
    _ = 5,
    M = -1
  function ne () {
    return !(e.unstable_now() - M < _)
  }
  function gt () {
    if (N !== null) {
      var E = e.unstable_now()
      M = E
      var j = !0
      try {
        j = N(!0, E)
      } finally {
        j ? Wt() : ((C = !1), (N = null))
      }
    } else C = !1
  }
  var Wt
  if (typeof h == 'function')
    Wt = function () {
      h(gt)
    }
  else if (typeof MessageChannel < 'u') {
    var Jn = new MessageChannel(),
      iu = Jn.port2
    ;(Jn.port1.onmessage = gt),
      (Wt = function () {
        iu.postMessage(null)
      })
  } else
    Wt = function () {
      T(gt, 0)
    }
  function ti (E) {
    ;(N = E), C || ((C = !0), Wt())
  }
  function b (E, j) {
    k = T(function () {
      E(e.unstable_now())
    }, j)
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
      y || g || ((y = !0), ti(S))
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (_ = 0 < E ? Math.floor(1e3 / E) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a)
    }),
    (e.unstable_next = function (E) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var j = 3
          break
        default:
          j = d
      }
      var L = d
      d = j
      try {
        return E()
      } finally {
        d = L
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, j) {
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
      var L = d
      d = E
      try {
        return j()
      } finally {
        d = L
      }
    }),
    (e.unstable_scheduleCallback = function (E, j, L) {
      var X = e.unstable_now()
      switch (
        (typeof L == 'object' && L !== null
          ? ((L = L.delay), (L = typeof L == 'number' && 0 < L ? X + L : X))
          : (L = X),
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
        (re = L + re),
        (E = {
          id: c++,
          callback: j,
          priorityLevel: E,
          startTime: L,
          expirationTime: re,
          sortIndex: -1
        }),
        L > X
          ? ((E.sortIndex = L),
            t(u, E),
            n(a) === null &&
              E === n(u) &&
              (v ? (p(k), (k = -1)) : (v = !0), b(w, L - X)))
          : ((E.sortIndex = re), t(a, E), y || g || ((y = !0), ti(S))),
        E
      )
    }),
    (e.unstable_shouldYield = ne),
    (e.unstable_wrapCallback = function (E) {
      var j = d
      return function () {
        var L = d
        d = j
        try {
          return E.apply(this, arguments)
        } finally {
          d = L
        }
      }
    })
})($f)
Uf.exports = $f
var Om = Uf.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zm = D,
  Ve = Om
function P (e) {
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
var Wf = new Set(),
  Cr = {}
function cn (e, t) {
  In(e, t), In(e + 'Capture', t)
}
function In (e, t) {
  for (Cr[e] = t, e = 0; e < t.length; e++) Wf.add(t[e])
}
var ft = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Eo = Object.prototype.hasOwnProperty,
  Bm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  au = {},
  uu = {}
function Um (e) {
  return Eo.call(uu, e)
    ? !0
    : Eo.call(au, e)
    ? !1
    : Bm.test(e)
    ? (uu[e] = !0)
    : ((au[e] = !0), !1)
}
function $m (e, t, n, r) {
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
function Wm (e, t, n, r) {
  if (t === null || typeof t > 'u' || $m(e, t, n, r)) return !0
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
function we (e, t, n, r, i, s, o) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o)
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
function zl (e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ol, zl)
    ue[t] = new we(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ol, zl)
    ue[t] = new we(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Ol, zl)
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
function Bl (e, t, n, r) {
  var i = ue.hasOwnProperty(t) ? ue[t] : null
  ;(i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Wm(t, n, i, r) && (n = null),
    r || i === null
      ? Um(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var mt = zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  si = Symbol.for('react.element'),
  pn = Symbol.for('react.portal'),
  mn = Symbol.for('react.fragment'),
  Ul = Symbol.for('react.strict_mode'),
  No = Symbol.for('react.profiler'),
  Hf = Symbol.for('react.provider'),
  Kf = Symbol.for('react.context'),
  $l = Symbol.for('react.forward_ref'),
  Ao = Symbol.for('react.suspense'),
  Vo = Symbol.for('react.suspense_list'),
  Wl = Symbol.for('react.memo'),
  xt = Symbol.for('react.lazy'),
  Gf = Symbol.for('react.offscreen'),
  cu = Symbol.iterator
function qn (e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (cu && e[cu]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var Q = Object.assign,
  Us
function lr (e) {
  if (Us === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      Us = (t && t[1]) || ''
    }
  return (
    `
` +
    Us +
    e
  )
}
var $s = !1
function Ws (e, t) {
  if (!e || $s) return ''
  $s = !0
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
          s = r.stack.split(`
`),
          o = i.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && i[o] !== s[l];

      )
        l--
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== s[l])) {
                var a =
                  `
` + i[o].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                )
              }
            while (1 <= o && 0 <= l)
          break
        }
    }
  } finally {
    ;($s = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? lr(e) : ''
}
function Hm (e) {
  switch (e.tag) {
    case 5:
      return lr(e.type)
    case 16:
      return lr('Lazy')
    case 13:
      return lr('Suspense')
    case 19:
      return lr('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = Ws(e.type, !1)), e
    case 11:
      return (e = Ws(e.type.render, !1)), e
    case 1:
      return (e = Ws(e.type, !0)), e
    default:
      return ''
  }
}
function Mo (e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case mn:
      return 'Fragment'
    case pn:
      return 'Portal'
    case No:
      return 'Profiler'
    case Ul:
      return 'StrictMode'
    case Ao:
      return 'Suspense'
    case Vo:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Kf:
        return (e.displayName || 'Context') + '.Consumer'
      case Hf:
        return (e._context.displayName || 'Context') + '.Provider'
      case $l:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case Wl:
        return (
          (t = e.displayName || null), t !== null ? t : Mo(e.type) || 'Memo'
        )
      case xt:
        ;(t = e._payload), (e = e._init)
        try {
          return Mo(e(t))
        } catch {}
    }
  return null
}
function Km (e) {
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
      return Mo(t)
    case 8:
      return t === Ul ? 'StrictMode' : 'Mode'
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
function Lt (e) {
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
function Qf (e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function Gm (e) {
  var t = Qf(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      s = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this)
        },
        set: function (o) {
          ;(r = '' + o), s.call(this, o)
        }
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (o) {
          r = '' + o
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        }
      }
    )
  }
}
function oi (e) {
  e._valueTracker || (e._valueTracker = Gm(e))
}
function Yf (e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = Qf(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function Bi (e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function jo (e, t) {
  var n = t.checked
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked
  })
}
function fu (e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = Lt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null
    })
}
function Xf (e, t) {
  ;(t = t.checked), t != null && Bl(e, 'checked', t, !1)
}
function Do (e, t) {
  Xf(e, t)
  var n = Lt(t.value),
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
    ? Lo(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Lo(e, t.type, Lt(t.defaultValue)),
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
function Lo (e, t, n) {
  ;(t !== 'number' || Bi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var ar = Array.isArray
function jn (e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + Lt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ;(e[i].selected = !0), r && (e[i].defaultSelected = !0)
        return
      }
      t !== null || e[i].disabled || (t = e[i])
    }
    t !== null && (t.selected = !0)
  }
}
function Ro (e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91))
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue
  })
}
function hu (e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92))
      if (ar(n)) {
        if (1 < n.length) throw Error(P(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: Lt(n) }
}
function Zf (e, t) {
  var n = Lt(t.value),
    r = Lt(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function pu (e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function Jf (e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function _o (e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Jf(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var li,
  qf = (function (e) {
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
        li = li || document.createElement('div'),
          li.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = li.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Er (e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var hr = {
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
  Qm = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(hr).forEach(function (e) {
  Qm.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (hr[t] = hr[e])
  })
})
function bf (e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (hr.hasOwnProperty(e) && hr[e])
    ? ('' + t).trim()
    : t + 'px'
}
function ed (e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = bf(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i)
    }
}
var Ym = Q(
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
function Fo (e, t) {
  if (t) {
    if (Ym[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(P(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(P(62))
  }
}
function Io (e, t) {
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
var Oo = null
function Hl (e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var zo = null,
  Dn = null,
  Ln = null
function mu (e) {
  if ((e = Zr(e))) {
    if (typeof zo != 'function') throw Error(P(280))
    var t = e.stateNode
    t && ((t = Ps(t)), zo(e.stateNode, e.type, t))
  }
}
function td (e) {
  Dn ? (Ln ? Ln.push(e) : (Ln = [e])) : (Dn = e)
}
function nd () {
  if (Dn) {
    var e = Dn,
      t = Ln
    if (((Ln = Dn = null), mu(e), t)) for (e = 0; e < t.length; e++) mu(t[e])
  }
}
function rd (e, t) {
  return e(t)
}
function id () {}
var Hs = !1
function sd (e, t, n) {
  if (Hs) return e(t, n)
  Hs = !0
  try {
    return rd(e, t, n)
  } finally {
    ;(Hs = !1), (Dn !== null || Ln !== null) && (id(), nd())
  }
}
function Nr (e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = Ps(n)
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
  if (n && typeof n != 'function') throw Error(P(231, t, typeof n))
  return n
}
var Bo = !1
if (ft)
  try {
    var bn = {}
    Object.defineProperty(bn, 'passive', {
      get: function () {
        Bo = !0
      }
    }),
      window.addEventListener('test', bn, bn),
      window.removeEventListener('test', bn, bn)
  } catch {
    Bo = !1
  }
function Xm (e, t, n, r, i, s, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, u)
  } catch (c) {
    this.onError(c)
  }
}
var pr = !1,
  Ui = null,
  $i = !1,
  Uo = null,
  Zm = {
    onError: function (e) {
      ;(pr = !0), (Ui = e)
    }
  }
function Jm (e, t, n, r, i, s, o, l, a) {
  ;(pr = !1), (Ui = null), Xm.apply(Zm, arguments)
}
function qm (e, t, n, r, i, s, o, l, a) {
  if ((Jm.apply(this, arguments), pr)) {
    if (pr) {
      var u = Ui
      ;(pr = !1), (Ui = null)
    } else throw Error(P(198))
    $i || (($i = !0), (Uo = u))
  }
}
function fn (e) {
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
function od (e) {
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
function gu (e) {
  if (fn(e) !== e) throw Error(P(188))
}
function bm (e) {
  var t = e.alternate
  if (!t) {
    if (((t = fn(e)), t === null)) throw Error(P(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var i = n.return
    if (i === null) break
    var s = i.alternate
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return gu(i), e
        if (s === r) return gu(i), t
        s = s.sibling
      }
      throw Error(P(188))
    }
    if (n.return !== r.return) (n = i), (r = s)
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          ;(o = !0), (n = i), (r = s)
          break
        }
        if (l === r) {
          ;(o = !0), (r = i), (n = s)
          break
        }
        l = l.sibling
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            ;(o = !0), (n = s), (r = i)
            break
          }
          if (l === r) {
            ;(o = !0), (r = s), (n = i)
            break
          }
          l = l.sibling
        }
        if (!o) throw Error(P(189))
      }
    }
    if (n.alternate !== r) throw Error(P(190))
  }
  if (n.tag !== 3) throw Error(P(188))
  return n.stateNode.current === n ? e : t
}
function ld (e) {
  return (e = bm(e)), e !== null ? ad(e) : null
}
function ad (e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = ad(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var ud = Ve.unstable_scheduleCallback,
  yu = Ve.unstable_cancelCallback,
  eg = Ve.unstable_shouldYield,
  tg = Ve.unstable_requestPaint,
  J = Ve.unstable_now,
  ng = Ve.unstable_getCurrentPriorityLevel,
  Kl = Ve.unstable_ImmediatePriority,
  cd = Ve.unstable_UserBlockingPriority,
  Wi = Ve.unstable_NormalPriority,
  rg = Ve.unstable_LowPriority,
  fd = Ve.unstable_IdlePriority,
  vs = null,
  Je = null
function ig (e) {
  if (Je && typeof Je.onCommitFiberRoot == 'function')
    try {
      Je.onCommitFiberRoot(vs, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Ke = Math.clz32 ? Math.clz32 : lg,
  sg = Math.log,
  og = Math.LN2
function lg (e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((sg(e) / og) | 0)) | 0
}
var ai = 64,
  ui = 4194304
function ur (e) {
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
function Hi (e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455
  if (o !== 0) {
    var l = o & ~i
    l !== 0 ? (r = ur(l)) : ((s &= o), s !== 0 && (r = ur(s)))
  } else (o = n & ~i), o !== 0 ? (r = ur(o)) : s !== 0 && (r = ur(s))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ke(t)), (i = 1 << n), (r |= e[n]), (t &= ~i)
  return r
}
function ag (e, t) {
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
function ug (e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - Ke(s),
      l = 1 << o,
      a = i[o]
    a === -1
      ? (!(l & n) || l & r) && (i[o] = ag(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l)
  }
}
function $o (e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function dd () {
  var e = ai
  return (ai <<= 1), !(ai & 4194240) && (ai = 64), e
}
function Ks (e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function Yr (e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ke(t)),
    (e[t] = n)
}
function cg (e, t) {
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
      s = 1 << i
    ;(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s)
  }
}
function Gl (e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - Ke(n),
      i = 1 << r
    ;(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i)
  }
}
var O = 0
function hd (e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var pd,
  Ql,
  md,
  gd,
  yd,
  Wo = !1,
  ci = [],
  Ct = null,
  Et = null,
  Nt = null,
  Ar = new Map(),
  Vr = new Map(),
  St = [],
  fg =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function vu (e, t) {
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
      Nt = null
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
function er (e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
      }),
      t !== null && ((t = Zr(t)), t !== null && Ql(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e)
}
function dg (e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (Ct = er(Ct, e, t, n, r, i)), !0
    case 'dragenter':
      return (Et = er(Et, e, t, n, r, i)), !0
    case 'mouseover':
      return (Nt = er(Nt, e, t, n, r, i)), !0
    case 'pointerover':
      var s = i.pointerId
      return Ar.set(s, er(Ar.get(s) || null, e, t, n, r, i)), !0
    case 'gotpointercapture':
      return (
        (s = i.pointerId), Vr.set(s, er(Vr.get(s) || null, e, t, n, r, i)), !0
      )
  }
  return !1
}
function vd (e) {
  var t = Jt(e.target)
  if (t !== null) {
    var n = fn(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = od(n)), t !== null)) {
          ;(e.blockedOn = t),
            yd(e.priority, function () {
              md(n)
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
function Ni (e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ho(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(Oo = r), n.target.dispatchEvent(r), (Oo = null)
    } else return (t = Zr(n)), t !== null && Ql(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function xu (e, t, n) {
  Ni(e) && n.delete(t)
}
function hg () {
  ;(Wo = !1),
    Ct !== null && Ni(Ct) && (Ct = null),
    Et !== null && Ni(Et) && (Et = null),
    Nt !== null && Ni(Nt) && (Nt = null),
    Ar.forEach(xu),
    Vr.forEach(xu)
}
function tr (e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Wo ||
      ((Wo = !0), Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, hg)))
}
function Mr (e) {
  function t (i) {
    return tr(i, e)
  }
  if (0 < ci.length) {
    tr(ci[0], e)
    for (var n = 1; n < ci.length; n++) {
      var r = ci[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    Ct !== null && tr(Ct, e),
      Et !== null && tr(Et, e),
      Nt !== null && tr(Nt, e),
      Ar.forEach(t),
      Vr.forEach(t),
      n = 0;
    n < St.length;
    n++
  )
    (r = St[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < St.length && ((n = St[0]), n.blockedOn === null); )
    vd(n), n.blockedOn === null && St.shift()
}
var Rn = mt.ReactCurrentBatchConfig,
  Ki = !0
function pg (e, t, n, r) {
  var i = O,
    s = Rn.transition
  Rn.transition = null
  try {
    ;(O = 1), Yl(e, t, n, r)
  } finally {
    ;(O = i), (Rn.transition = s)
  }
}
function mg (e, t, n, r) {
  var i = O,
    s = Rn.transition
  Rn.transition = null
  try {
    ;(O = 4), Yl(e, t, n, r)
  } finally {
    ;(O = i), (Rn.transition = s)
  }
}
function Yl (e, t, n, r) {
  if (Ki) {
    var i = Ho(e, t, n, r)
    if (i === null) to(e, t, r, Gi, n), vu(e, r)
    else if (dg(i, e, t, n, r)) r.stopPropagation()
    else if ((vu(e, r), t & 4 && -1 < fg.indexOf(e))) {
      for (; i !== null; ) {
        var s = Zr(i)
        if (
          (s !== null && pd(s),
          (s = Ho(e, t, n, r)),
          s === null && to(e, t, r, Gi, n),
          s === i)
        )
          break
        i = s
      }
      i !== null && r.stopPropagation()
    } else to(e, t, r, null, n)
  }
}
var Gi = null
function Ho (e, t, n, r) {
  if (((Gi = null), (e = Hl(r)), (e = Jt(e)), e !== null))
    if (((t = fn(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = od(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Gi = e), null
}
function xd (e) {
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
      switch (ng()) {
        case Kl:
          return 1
        case cd:
          return 4
        case Wi:
        case rg:
          return 16
        case fd:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Tt = null,
  Xl = null,
  Ai = null
function wd () {
  if (Ai) return Ai
  var e,
    t = Xl,
    n = t.length,
    r,
    i = 'value' in Tt ? Tt.value : Tt.textContent,
    s = i.length
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
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
function fi () {
  return !0
}
function wu () {
  return !1
}
function De (e) {
  function t (n, r, i, s, o) {
    ;(this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null)
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]))
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? fi
        : wu),
      (this.isPropagationStopped = wu),
      this
    )
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = fi))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = fi))
      },
      persist: function () {},
      isPersistent: fi
    }),
    t
  )
}
var Yn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  Zl = De(Yn),
  Xr = Q({}, Yn, { view: 0, detail: 0 }),
  gg = De(Xr),
  Gs,
  Qs,
  nr,
  xs = Q({}, Xr, {
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
    getModifierState: Jl,
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
        : (e !== nr &&
            (nr && e.type === 'mousemove'
              ? ((Gs = e.screenX - nr.screenX), (Qs = e.screenY - nr.screenY))
              : (Qs = Gs = 0),
            (nr = e)),
          Gs)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Qs
    }
  }),
  Su = De(xs),
  yg = Q({}, xs, { dataTransfer: 0 }),
  vg = De(yg),
  xg = Q({}, Xr, { relatedTarget: 0 }),
  Ys = De(xg),
  wg = Q({}, Yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sg = De(wg),
  Pg = Q({}, Yn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    }
  }),
  Tg = De(Pg),
  kg = Q({}, Yn, { data: 0 }),
  Pu = De(kg),
  Cg = {
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
  Eg = {
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
  Ng = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function Ag (e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = Ng[e]) ? !!t[e] : !1
}
function Jl () {
  return Ag
}
var Vg = Q({}, Xr, {
    key: function (e) {
      if (e.key) {
        var t = Cg[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = Vi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Eg[e.keyCode] || 'Unidentified'
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
    getModifierState: Jl,
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
  Mg = De(Vg),
  jg = Q({}, xs, {
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
  Tu = De(jg),
  Dg = Q({}, Xr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Jl
  }),
  Lg = De(Dg),
  Rg = Q({}, Yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _g = De(Rg),
  Fg = Q({}, xs, {
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
  Ig = De(Fg),
  Og = [9, 13, 27, 32],
  ql = ft && 'CompositionEvent' in window,
  mr = null
ft && 'documentMode' in document && (mr = document.documentMode)
var zg = ft && 'TextEvent' in window && !mr,
  Sd = ft && (!ql || (mr && 8 < mr && 11 >= mr)),
  ku = ' ',
  Cu = !1
function Pd (e, t) {
  switch (e) {
    case 'keyup':
      return Og.indexOf(t.keyCode) !== -1
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
function Td (e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var gn = !1
function Bg (e, t) {
  switch (e) {
    case 'compositionend':
      return Td(t)
    case 'keypress':
      return t.which !== 32 ? null : ((Cu = !0), ku)
    case 'textInput':
      return (e = t.data), e === ku && Cu ? null : e
    default:
      return null
  }
}
function Ug (e, t) {
  if (gn)
    return e === 'compositionend' || (!ql && Pd(e, t))
      ? ((e = wd()), (Ai = Xl = Tt = null), (gn = !1), e)
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
      return Sd && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var $g = {
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
function Eu (e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!$g[e.type] : t === 'textarea'
}
function kd (e, t, n, r) {
  td(r),
    (t = Qi(t, 'onChange')),
    0 < t.length &&
      ((n = new Zl('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var gr = null,
  jr = null
function Wg (e) {
  _d(e, 0)
}
function ws (e) {
  var t = xn(e)
  if (Yf(t)) return e
}
function Hg (e, t) {
  if (e === 'change') return t
}
var Cd = !1
if (ft) {
  var Xs
  if (ft) {
    var Zs = 'oninput' in document
    if (!Zs) {
      var Nu = document.createElement('div')
      Nu.setAttribute('oninput', 'return;'),
        (Zs = typeof Nu.oninput == 'function')
    }
    Xs = Zs
  } else Xs = !1
  Cd = Xs && (!document.documentMode || 9 < document.documentMode)
}
function Au () {
  gr && (gr.detachEvent('onpropertychange', Ed), (jr = gr = null))
}
function Ed (e) {
  if (e.propertyName === 'value' && ws(jr)) {
    var t = []
    kd(t, jr, e, Hl(e)), sd(Wg, t)
  }
}
function Kg (e, t, n) {
  e === 'focusin'
    ? (Au(), (gr = t), (jr = n), gr.attachEvent('onpropertychange', Ed))
    : e === 'focusout' && Au()
}
function Gg (e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return ws(jr)
}
function Qg (e, t) {
  if (e === 'click') return ws(t)
}
function Yg (e, t) {
  if (e === 'input' || e === 'change') return ws(t)
}
function Xg (e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Qe = typeof Object.is == 'function' ? Object.is : Xg
function Dr (e, t) {
  if (Qe(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var i = n[r]
    if (!Eo.call(t, i) || !Qe(e[i], t[i])) return !1
  }
  return !0
}
function Vu (e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function Mu (e, t) {
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
function Nd (e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Nd(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function Ad () {
  for (var e = window, t = Bi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Bi(e.document)
  }
  return t
}
function bl (e) {
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
function Zg (e) {
  var t = Ad(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Nd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && bl(n)) {
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
          s = Math.min(r.start, i)
        ;(r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Mu(n, s))
        var o = Mu(n, r)
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var Jg = ft && 'documentMode' in document && 11 >= document.documentMode,
  yn = null,
  Ko = null,
  yr = null,
  Go = !1
function ju (e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  Go ||
    yn == null ||
    yn !== Bi(r) ||
    ((r = yn),
    'selectionStart' in r && bl(r)
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
    (yr && Dr(yr, r)) ||
      ((yr = r),
      (r = Qi(Ko, 'onSelect')),
      0 < r.length &&
        ((t = new Zl('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = yn))))
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
var vn = {
    animationend: di('Animation', 'AnimationEnd'),
    animationiteration: di('Animation', 'AnimationIteration'),
    animationstart: di('Animation', 'AnimationStart'),
    transitionend: di('Transition', 'TransitionEnd')
  },
  Js = {},
  Vd = {}
ft &&
  ((Vd = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete vn.animationend.animation,
    delete vn.animationiteration.animation,
    delete vn.animationstart.animation),
  'TransitionEvent' in window || delete vn.transitionend.transition)
function Ss (e) {
  if (Js[e]) return Js[e]
  if (!vn[e]) return e
  var t = vn[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in Vd) return (Js[e] = t[n])
  return e
}
var Md = Ss('animationend'),
  jd = Ss('animationiteration'),
  Dd = Ss('animationstart'),
  Ld = Ss('transitionend'),
  Rd = new Map(),
  Du =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function Ot (e, t) {
  Rd.set(e, t), cn(t, [e])
}
for (var qs = 0; qs < Du.length; qs++) {
  var bs = Du[qs],
    qg = bs.toLowerCase(),
    bg = bs[0].toUpperCase() + bs.slice(1)
  Ot(qg, 'on' + bg)
}
Ot(Md, 'onAnimationEnd')
Ot(jd, 'onAnimationIteration')
Ot(Dd, 'onAnimationStart')
Ot('dblclick', 'onDoubleClick')
Ot('focusin', 'onFocus')
Ot('focusout', 'onBlur')
Ot(Ld, 'onTransitionEnd')
In('onMouseEnter', ['mouseout', 'mouseover'])
In('onMouseLeave', ['mouseout', 'mouseover'])
In('onPointerEnter', ['pointerout', 'pointerover'])
In('onPointerLeave', ['pointerout', 'pointerover'])
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
var cr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  ey = new Set('cancel close invalid load scroll toggle'.split(' ').concat(cr))
function Lu (e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), qm(r, t, void 0, e), (e.currentTarget = null)
}
function _d (e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event
    r = r.listeners
    e: {
      var s = void 0
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            a = l.instance,
            u = l.currentTarget
          if (((l = l.listener), a !== s && i.isPropagationStopped())) break e
          Lu(i, l, u), (s = a)
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== s && i.isPropagationStopped())
          )
            break e
          Lu(i, l, u), (s = a)
        }
    }
  }
  if ($i) throw ((e = Uo), ($i = !1), (Uo = null), e)
}
function U (e, t) {
  var n = t[Jo]
  n === void 0 && (n = t[Jo] = new Set())
  var r = e + '__bubble'
  n.has(r) || (Fd(t, e, 2, !1), n.add(r))
}
function eo (e, t, n) {
  var r = 0
  t && (r |= 4), Fd(n, e, r, t)
}
var hi = '_reactListening' + Math.random().toString(36).slice(2)
function Lr (e) {
  if (!e[hi]) {
    ;(e[hi] = !0),
      Wf.forEach(function (n) {
        n !== 'selectionchange' && (ey.has(n) || eo(n, !1, e), eo(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[hi] || ((t[hi] = !0), eo('selectionchange', !1, t))
  }
}
function Fd (e, t, n, r) {
  switch (xd(t)) {
    case 1:
      var i = pg
      break
    case 4:
      i = mg
      break
    default:
      i = Yl
  }
  ;(n = i.bind(null, t, n, e)),
    (i = void 0),
    !Bo ||
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
function to (e, t, n, r, i) {
  var s = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var o = r.tag
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return
            o = o.return
          }
        for (; l !== null; ) {
          if (((o = Jt(l)), o === null)) return
          if (((a = o.tag), a === 5 || a === 6)) {
            r = s = o
            continue e
          }
          l = l.parentNode
        }
      }
      r = r.return
    }
  sd(function () {
    var u = s,
      c = Hl(n),
      f = []
    e: {
      var d = Rd.get(e)
      if (d !== void 0) {
        var g = Zl,
          y = e
        switch (e) {
          case 'keypress':
            if (Vi(n) === 0) break e
          case 'keydown':
          case 'keyup':
            g = Mg
            break
          case 'focusin':
            ;(y = 'focus'), (g = Ys)
            break
          case 'focusout':
            ;(y = 'blur'), (g = Ys)
            break
          case 'beforeblur':
          case 'afterblur':
            g = Ys
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
            g = Su
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = vg
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = Lg
            break
          case Md:
          case jd:
          case Dd:
            g = Sg
            break
          case Ld:
            g = _g
            break
          case 'scroll':
            g = gg
            break
          case 'wheel':
            g = Ig
            break
          case 'copy':
          case 'cut':
          case 'paste':
            g = Tg
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = Tu
        }
        var v = (t & 4) !== 0,
          T = !v && e === 'scroll',
          p = v ? (d !== null ? d + 'Capture' : null) : d
        v = []
        for (var h = u, m; h !== null; ) {
          m = h
          var w = m.stateNode
          if (
            (m.tag === 5 &&
              w !== null &&
              ((m = w),
              p !== null && ((w = Nr(h, p)), w != null && v.push(Rr(h, w, m)))),
            T)
          )
            break
          h = h.return
        }
        0 < v.length &&
          ((d = new g(d, y, null, n, c)), f.push({ event: d, listeners: v }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== Oo &&
            (y = n.relatedTarget || n.fromElement) &&
            (Jt(y) || y[dt]))
        )
          break e
        if (
          (g || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? Jt(y) : null),
              y !== null &&
                ((T = fn(y)), y !== T || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((v = Su),
            (w = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((v = Tu),
              (w = 'onPointerLeave'),
              (p = 'onPointerEnter'),
              (h = 'pointer')),
            (T = g == null ? d : xn(g)),
            (m = y == null ? d : xn(y)),
            (d = new v(w, h + 'leave', g, n, c)),
            (d.target = T),
            (d.relatedTarget = m),
            (w = null),
            Jt(c) === u &&
              ((v = new v(p, h + 'enter', y, n, c)),
              (v.target = m),
              (v.relatedTarget = T),
              (w = v)),
            (T = w),
            g && y)
          )
            t: {
              for (v = g, p = y, h = 0, m = v; m; m = dn(m)) h++
              for (m = 0, w = p; w; w = dn(w)) m++
              for (; 0 < h - m; ) (v = dn(v)), h--
              for (; 0 < m - h; ) (p = dn(p)), m--
              for (; h--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t
                ;(v = dn(v)), (p = dn(p))
              }
              v = null
            }
          else v = null
          g !== null && Ru(f, d, g, v, !1),
            y !== null && T !== null && Ru(f, T, y, v, !0)
        }
      }
      e: {
        if (
          ((d = u ? xn(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && d.type === 'file'))
        )
          var S = Hg
        else if (Eu(d))
          if (Cd) S = Yg
          else {
            S = Gg
            var C = Kg
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (S = Qg)
        if (S && (S = S(e, u))) {
          kd(f, S, n, c)
          break e
        }
        C && C(e, d, u),
          e === 'focusout' &&
            (C = d._wrapperState) &&
            C.controlled &&
            d.type === 'number' &&
            Lo(d, 'number', d.value)
      }
      switch (((C = u ? xn(u) : window), e)) {
        case 'focusin':
          ;(Eu(C) || C.contentEditable === 'true') &&
            ((yn = C), (Ko = u), (yr = null))
          break
        case 'focusout':
          yr = Ko = yn = null
          break
        case 'mousedown':
          Go = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(Go = !1), ju(f, n, c)
          break
        case 'selectionchange':
          if (Jg) break
        case 'keydown':
        case 'keyup':
          ju(f, n, c)
      }
      var N
      if (ql)
        e: {
          switch (e) {
            case 'compositionstart':
              var k = 'onCompositionStart'
              break e
            case 'compositionend':
              k = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              k = 'onCompositionUpdate'
              break e
          }
          k = void 0
        }
      else
        gn
          ? Pd(e, n) && (k = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (k = 'onCompositionStart')
      k &&
        (Sd &&
          n.locale !== 'ko' &&
          (gn || k !== 'onCompositionStart'
            ? k === 'onCompositionEnd' && gn && (N = wd())
            : ((Tt = c),
              (Xl = 'value' in Tt ? Tt.value : Tt.textContent),
              (gn = !0))),
        (C = Qi(u, k)),
        0 < C.length &&
          ((k = new Pu(k, e, null, n, c)),
          f.push({ event: k, listeners: C }),
          N ? (k.data = N) : ((N = Td(n)), N !== null && (k.data = N)))),
        (N = zg ? Bg(e, n) : Ug(e, n)) &&
          ((u = Qi(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new Pu('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = N)))
    }
    _d(f, t)
  })
}
function Rr (e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function Qi (e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      s = i.stateNode
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Nr(e, n)),
      s != null && r.unshift(Rr(e, s, i)),
      (s = Nr(e, t)),
      s != null && r.push(Rr(e, s, i))),
      (e = e.return)
  }
  return r
}
function dn (e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function Ru (e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode
    if (a !== null && a === r) break
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = Nr(n, s)), a != null && o.unshift(Rr(n, a, l)))
        : i || ((a = Nr(n, s)), a != null && o.push(Rr(n, a, l)))),
      (n = n.return)
  }
  o.length !== 0 && e.push({ event: t, listeners: o })
}
var ty = /\r\n?/g,
  ny = /\u0000|\uFFFD/g
function _u (e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      ty,
      `
`
    )
    .replace(ny, '')
}
function pi (e, t, n) {
  if (((t = _u(t)), _u(e) !== t && n)) throw Error(P(425))
}
function Yi () {}
var Qo = null,
  Yo = null
function Xo (e, t) {
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
var Zo = typeof setTimeout == 'function' ? setTimeout : void 0,
  ry = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Fu = typeof Promise == 'function' ? Promise : void 0,
  iy =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Fu < 'u'
      ? function (e) {
          return Fu.resolve(null).then(e).catch(sy)
        }
      : Zo
function sy (e) {
  setTimeout(function () {
    throw e
  })
}
function no (e, t) {
  var n = t,
    r = 0
  do {
    var i = n.nextSibling
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Mr(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = i
  } while (n)
  Mr(t)
}
function At (e) {
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
function Iu (e) {
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
var Xn = Math.random().toString(36).slice(2),
  Ze = '__reactFiber$' + Xn,
  _r = '__reactProps$' + Xn,
  dt = '__reactContainer$' + Xn,
  Jo = '__reactEvents$' + Xn,
  oy = '__reactListeners$' + Xn,
  ly = '__reactHandles$' + Xn
function Jt (e) {
  var t = e[Ze]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[dt] || n[Ze])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Iu(e); e !== null; ) {
          if ((n = e[Ze])) return n
          e = Iu(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function Zr (e) {
  return (
    (e = e[Ze] || e[dt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function xn (e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(P(33))
}
function Ps (e) {
  return e[_r] || null
}
var qo = [],
  wn = -1
function zt (e) {
  return { current: e }
}
function $ (e) {
  0 > wn || ((e.current = qo[wn]), (qo[wn] = null), wn--)
}
function B (e, t) {
  wn++, (qo[wn] = e.current), (e.current = t)
}
var Rt = {},
  ge = zt(Rt),
  Te = zt(!1),
  sn = Rt
function On (e, t) {
  var n = e.type.contextTypes
  if (!n) return Rt
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var i = {},
    s
  for (s in n) i[s] = t[s]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  )
}
function ke (e) {
  return (e = e.childContextTypes), e != null
}
function Xi () {
  $(Te), $(ge)
}
function Ou (e, t, n) {
  if (ge.current !== Rt) throw Error(P(168))
  B(ge, t), B(Te, n)
}
function Id (e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var i in r) if (!(i in t)) throw Error(P(108, Km(e) || 'Unknown', i))
  return Q({}, n, r)
}
function Zi (e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Rt),
    (sn = ge.current),
    B(ge, e),
    B(Te, Te.current),
    !0
  )
}
function zu (e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(P(169))
  n
    ? ((e = Id(e, t, sn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $(Te),
      $(ge),
      B(ge, e))
    : $(Te),
    B(Te, n)
}
var nt = null,
  Ts = !1,
  ro = !1
function Od (e) {
  nt === null ? (nt = [e]) : nt.push(e)
}
function ay (e) {
  ;(Ts = !0), Od(e)
}
function Bt () {
  if (!ro && nt !== null) {
    ro = !0
    var e = 0,
      t = O
    try {
      var n = nt
      for (O = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(nt = null), (Ts = !1)
    } catch (i) {
      throw (nt !== null && (nt = nt.slice(e + 1)), ud(Kl, Bt), i)
    } finally {
      ;(O = t), (ro = !1)
    }
  }
  return null
}
var Sn = [],
  Pn = 0,
  Ji = null,
  qi = 0,
  _e = [],
  Fe = 0,
  on = null,
  rt = 1,
  it = ''
function Qt (e, t) {
  ;(Sn[Pn++] = qi), (Sn[Pn++] = Ji), (Ji = e), (qi = t)
}
function zd (e, t, n) {
  ;(_e[Fe++] = rt), (_e[Fe++] = it), (_e[Fe++] = on), (on = e)
  var r = rt
  e = it
  var i = 32 - Ke(r) - 1
  ;(r &= ~(1 << i)), (n += 1)
  var s = 32 - Ke(t) + i
  if (30 < s) {
    var o = i - (i % 5)
    ;(s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (rt = (1 << (32 - Ke(t) + i)) | (n << i) | r),
      (it = s + e)
  } else (rt = (1 << s) | (n << i) | r), (it = e)
}
function ea (e) {
  e.return !== null && (Qt(e, 1), zd(e, 1, 0))
}
function ta (e) {
  for (; e === Ji; )
    (Ji = Sn[--Pn]), (Sn[Pn] = null), (qi = Sn[--Pn]), (Sn[Pn] = null)
  for (; e === on; )
    (on = _e[--Fe]),
      (_e[Fe] = null),
      (it = _e[--Fe]),
      (_e[Fe] = null),
      (rt = _e[--Fe]),
      (_e[Fe] = null)
}
var Ae = null,
  Ne = null,
  W = !1,
  He = null
function Bd (e, t) {
  var n = Ie(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function Bu (e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ae = e), (Ne = At(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ae = e), (Ne = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = on !== null ? { id: rt, overflow: it } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824
            }),
            (n = Ie(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ae = e),
            (Ne = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function bo (e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function el (e) {
  if (W) {
    var t = Ne
    if (t) {
      var n = t
      if (!Bu(e, t)) {
        if (bo(e)) throw Error(P(418))
        t = At(n.nextSibling)
        var r = Ae
        t && Bu(e, t)
          ? Bd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (Ae = e))
      }
    } else {
      if (bo(e)) throw Error(P(418))
      ;(e.flags = (e.flags & -4097) | 2), (W = !1), (Ae = e)
    }
  }
}
function Uu (e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  Ae = e
}
function mi (e) {
  if (e !== Ae) return !1
  if (!W) return Uu(e), (W = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Xo(e.type, e.memoizedProps))),
    t && (t = Ne))
  ) {
    if (bo(e)) throw (Ud(), Error(P(418)))
    for (; t; ) Bd(e, t), (t = At(t.nextSibling))
  }
  if ((Uu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              Ne = At(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      Ne = null
    }
  } else Ne = Ae ? At(e.stateNode.nextSibling) : null
  return !0
}
function Ud () {
  for (var e = Ne; e; ) e = At(e.nextSibling)
}
function zn () {
  ;(Ne = Ae = null), (W = !1)
}
function na (e) {
  He === null ? (He = [e]) : He.push(e)
}
var uy = mt.ReactCurrentBatchConfig
function rr (e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(P(309))
        var r = n.stateNode
      }
      if (!r) throw Error(P(147, e))
      var i = r,
        s = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var l = i.refs
            o === null ? delete l[s] : (l[s] = o)
          }),
          (t._stringRef = s),
          t)
    }
    if (typeof e != 'string') throw Error(P(284))
    if (!n._owner) throw Error(P(290, e))
  }
  return e
}
function gi (e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      P(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  )
}
function $u (e) {
  var t = e._init
  return t(e._payload)
}
function $d (e) {
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
  function s (p, h, m) {
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
  function o (p) {
    return e && p.alternate === null && (p.flags |= 2), p
  }
  function l (p, h, m, w) {
    return h === null || h.tag !== 6
      ? ((h = co(m, p.mode, w)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h)
  }
  function a (p, h, m, w) {
    var S = m.type
    return S === mn
      ? c(p, h, m.props.children, w, m.key)
      : h !== null &&
        (h.elementType === S ||
          (typeof S == 'object' &&
            S !== null &&
            S.$$typeof === xt &&
            $u(S) === h.type))
      ? ((w = i(h, m.props)), (w.ref = rr(p, h, m)), (w.return = p), w)
      : ((w = Fi(m.type, m.key, m.props, null, p.mode, w)),
        (w.ref = rr(p, h, m)),
        (w.return = p),
        w)
  }
  function u (p, h, m, w) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = fo(m, p.mode, w)), (h.return = p), h)
      : ((h = i(h, m.children || [])), (h.return = p), h)
  }
  function c (p, h, m, w, S) {
    return h === null || h.tag !== 7
      ? ((h = nn(m, p.mode, w, S)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h)
  }
  function f (p, h, m) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = co('' + h, p.mode, m)), (h.return = p), h
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case si:
          return (
            (m = Fi(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = rr(p, null, h)),
            (m.return = p),
            m
          )
        case pn:
          return (h = fo(h, p.mode, m)), (h.return = p), h
        case xt:
          var w = h._init
          return f(p, w(h._payload), m)
      }
      if (ar(h) || qn(h)) return (h = nn(h, p.mode, m, null)), (h.return = p), h
      gi(p, h)
    }
    return null
  }
  function d (p, h, m, w) {
    var S = h !== null ? h.key : null
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return S !== null ? null : l(p, h, '' + m, w)
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case si:
          return m.key === S ? a(p, h, m, w) : null
        case pn:
          return m.key === S ? u(p, h, m, w) : null
        case xt:
          return (S = m._init), d(p, h, S(m._payload), w)
      }
      if (ar(m) || qn(m)) return S !== null ? null : c(p, h, m, w, null)
      gi(p, m)
    }
    return null
  }
  function g (p, h, m, w, S) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number')
      return (p = p.get(m) || null), l(h, p, '' + w, S)
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case si:
          return (p = p.get(w.key === null ? m : w.key) || null), a(h, p, w, S)
        case pn:
          return (p = p.get(w.key === null ? m : w.key) || null), u(h, p, w, S)
        case xt:
          var C = w._init
          return g(p, h, m, C(w._payload), S)
      }
      if (ar(w) || qn(w)) return (p = p.get(m) || null), c(h, p, w, S, null)
      gi(h, w)
    }
    return null
  }
  function y (p, h, m, w) {
    for (
      var S = null, C = null, N = h, k = (h = 0), _ = null;
      N !== null && k < m.length;
      k++
    ) {
      N.index > k ? ((_ = N), (N = null)) : (_ = N.sibling)
      var M = d(p, N, m[k], w)
      if (M === null) {
        N === null && (N = _)
        break
      }
      e && N && M.alternate === null && t(p, N),
        (h = s(M, h, k)),
        C === null ? (S = M) : (C.sibling = M),
        (C = M),
        (N = _)
    }
    if (k === m.length) return n(p, N), W && Qt(p, k), S
    if (N === null) {
      for (; k < m.length; k++)
        (N = f(p, m[k], w)),
          N !== null &&
            ((h = s(N, h, k)), C === null ? (S = N) : (C.sibling = N), (C = N))
      return W && Qt(p, k), S
    }
    for (N = r(p, N); k < m.length; k++)
      (_ = g(N, p, k, m[k], w)),
        _ !== null &&
          (e && _.alternate !== null && N.delete(_.key === null ? k : _.key),
          (h = s(_, h, k)),
          C === null ? (S = _) : (C.sibling = _),
          (C = _))
    return (
      e &&
        N.forEach(function (ne) {
          return t(p, ne)
        }),
      W && Qt(p, k),
      S
    )
  }
  function v (p, h, m, w) {
    var S = qn(m)
    if (typeof S != 'function') throw Error(P(150))
    if (((m = S.call(m)), m == null)) throw Error(P(151))
    for (
      var C = (S = null), N = h, k = (h = 0), _ = null, M = m.next();
      N !== null && !M.done;
      k++, M = m.next()
    ) {
      N.index > k ? ((_ = N), (N = null)) : (_ = N.sibling)
      var ne = d(p, N, M.value, w)
      if (ne === null) {
        N === null && (N = _)
        break
      }
      e && N && ne.alternate === null && t(p, N),
        (h = s(ne, h, k)),
        C === null ? (S = ne) : (C.sibling = ne),
        (C = ne),
        (N = _)
    }
    if (M.done) return n(p, N), W && Qt(p, k), S
    if (N === null) {
      for (; !M.done; k++, M = m.next())
        (M = f(p, M.value, w)),
          M !== null &&
            ((h = s(M, h, k)), C === null ? (S = M) : (C.sibling = M), (C = M))
      return W && Qt(p, k), S
    }
    for (N = r(p, N); !M.done; k++, M = m.next())
      (M = g(N, p, k, M.value, w)),
        M !== null &&
          (e && M.alternate !== null && N.delete(M.key === null ? k : M.key),
          (h = s(M, h, k)),
          C === null ? (S = M) : (C.sibling = M),
          (C = M))
    return (
      e &&
        N.forEach(function (gt) {
          return t(p, gt)
        }),
      W && Qt(p, k),
      S
    )
  }
  function T (p, h, m, w) {
    if (
      (typeof m == 'object' &&
        m !== null &&
        m.type === mn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case si:
          e: {
            for (var S = m.key, C = h; C !== null; ) {
              if (C.key === S) {
                if (((S = m.type), S === mn)) {
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
                    $u(S) === C.type)
                ) {
                  n(p, C.sibling),
                    (h = i(C, m.props)),
                    (h.ref = rr(p, C, m)),
                    (h.return = p),
                    (p = h)
                  break e
                }
                n(p, C)
                break
              } else t(p, C)
              C = C.sibling
            }
            m.type === mn
              ? ((h = nn(m.props.children, p.mode, w, m.key)),
                (h.return = p),
                (p = h))
              : ((w = Fi(m.type, m.key, m.props, null, p.mode, w)),
                (w.ref = rr(p, h, m)),
                (w.return = p),
                (p = w))
          }
          return o(p)
        case pn:
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
            ;(h = fo(m, p.mode, w)), (h.return = p), (p = h)
          }
          return o(p)
        case xt:
          return (C = m._init), T(p, h, C(m._payload), w)
      }
      if (ar(m)) return y(p, h, m, w)
      if (qn(m)) return v(p, h, m, w)
      gi(p, m)
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, m)), (h.return = p), (p = h))
          : (n(p, h), (h = co(m, p.mode, w)), (h.return = p), (p = h)),
        o(p))
      : n(p, h)
  }
  return T
}
var Bn = $d(!0),
  Wd = $d(!1),
  bi = zt(null),
  es = null,
  Tn = null,
  ra = null
function ia () {
  ra = Tn = es = null
}
function sa (e) {
  var t = bi.current
  $(bi), (e._currentValue = t)
}
function tl (e, t, n) {
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
function _n (e, t) {
  ;(es = e),
    (ra = Tn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Pe = !0), (e.firstContext = null))
}
function ze (e) {
  var t = e._currentValue
  if (ra !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Tn === null)) {
      if (es === null) throw Error(P(308))
      ;(Tn = e), (es.dependencies = { lanes: 0, firstContext: e })
    } else Tn = Tn.next = e
  return t
}
var qt = null
function oa (e) {
  qt === null ? (qt = [e]) : qt.push(e)
}
function Hd (e, t, n, r) {
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
function la (e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  }
}
function Kd (e, t) {
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
function ot (e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  }
}
function Vt (e, t, n) {
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
function Mi (e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Gl(e, n)
  }
}
function Wu (e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        }
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next)
      } while (n !== null)
      s === null ? (i = s = t) : (s = s.next = t)
    } else i = s = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
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
function ts (e, t, n, r) {
  var i = e.updateQueue
  wt = !1
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending
  if (l !== null) {
    i.shared.pending = null
    var a = l,
      u = a.next
    ;(a.next = null), o === null ? (s = u) : (o.next = u), (o = a)
    var c = e.alternate
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== o &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)))
  }
  if (s !== null) {
    var f = i.baseState
    ;(o = 0), (c = u = a = null), (l = s)
    do {
      var d = l.lane,
        g = l.eventTime
      if ((r & d) === d) {
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
          switch (((d = t), (g = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == 'function')) {
                f = y.call(g, f, d)
                break e
              }
              f = y
              break e
            case 3:
              y.flags = (y.flags & -65537) | 128
            case 0:
              if (
                ((y = v.payload),
                (d = typeof y == 'function' ? y.call(g, f, d) : y),
                d == null)
              )
                break e
              f = Q({}, f, d)
              break e
            case 2:
              wt = !0
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l))
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        }),
          c === null ? ((u = c = g), (a = f)) : (c = c.next = g),
          (o |= d)
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break
        ;(d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null)
      }
    } while (!0)
    if (
      (c === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t
      do (o |= i.lane), (i = i.next)
      while (i !== t)
    } else s === null && (i.shared.lanes = 0)
    ;(an |= o), (e.lanes = o), (e.memoizedState = f)
  }
}
function Hu (e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(P(191, i))
        i.call(r)
      }
    }
}
var Jr = {},
  qe = zt(Jr),
  Fr = zt(Jr),
  Ir = zt(Jr)
function bt (e) {
  if (e === Jr) throw Error(P(174))
  return e
}
function aa (e, t) {
  switch ((B(Ir, t), B(Fr, e), B(qe, Jr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : _o(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = _o(t, e))
  }
  $(qe), B(qe, t)
}
function Un () {
  $(qe), $(Fr), $(Ir)
}
function Gd (e) {
  bt(Ir.current)
  var t = bt(qe.current),
    n = _o(t, e.type)
  t !== n && (B(Fr, e), B(qe, n))
}
function ua (e) {
  Fr.current === e && ($(qe), $(Fr))
}
var H = zt(0)
function ns (e) {
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
var io = []
function ca () {
  for (var e = 0; e < io.length; e++) io[e]._workInProgressVersionPrimary = null
  io.length = 0
}
var ji = mt.ReactCurrentDispatcher,
  so = mt.ReactCurrentBatchConfig,
  ln = 0,
  G = null,
  ee = null,
  ie = null,
  rs = !1,
  vr = !1,
  Or = 0,
  cy = 0
function ce () {
  throw Error(P(321))
}
function fa (e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Qe(e[n], t[n])) return !1
  return !0
}
function da (e, t, n, r, i, s) {
  if (
    ((ln = s),
    (G = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ji.current = e === null || e.memoizedState === null ? py : my),
    (e = n(r, i)),
    vr)
  ) {
    s = 0
    do {
      if (((vr = !1), (Or = 0), 25 <= s)) throw Error(P(301))
      ;(s += 1),
        (ie = ee = null),
        (t.updateQueue = null),
        (ji.current = gy),
        (e = n(r, i))
    } while (vr)
  }
  if (
    ((ji.current = is),
    (t = ee !== null && ee.next !== null),
    (ln = 0),
    (ie = ee = G = null),
    (rs = !1),
    t)
  )
    throw Error(P(300))
  return e
}
function ha () {
  var e = Or !== 0
  return (Or = 0), e
}
function Xe () {
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
    if (e === null) throw Error(P(310))
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
function zr (e, t) {
  return typeof t == 'function' ? t(e) : t
}
function oo (e) {
  var t = Be(),
    n = t.queue
  if (n === null) throw Error(P(311))
  n.lastRenderedReducer = e
  var r = ee,
    i = r.baseQueue,
    s = n.pending
  if (s !== null) {
    if (i !== null) {
      var o = i.next
      ;(i.next = s.next), (s.next = o)
    }
    ;(r.baseQueue = i = s), (n.pending = null)
  }
  if (i !== null) {
    ;(s = i.next), (r = r.baseState)
    var l = (o = null),
      a = null,
      u = s
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
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        }
        a === null ? ((l = a = f), (o = r)) : (a = a.next = f),
          (G.lanes |= c),
          (an |= c)
      }
      u = u.next
    } while (u !== null && u !== s)
    a === null ? (o = r) : (a.next = l),
      Qe(r, t.memoizedState) || (Pe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    i = e
    do (s = i.lane), (G.lanes |= s), (an |= s), (i = i.next)
    while (i !== e)
  } else i === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function lo (e) {
  var t = Be(),
    n = t.queue
  if (n === null) throw Error(P(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState
  if (i !== null) {
    n.pending = null
    var o = (i = i.next)
    do (s = e(s, o.action)), (o = o.next)
    while (o !== i)
    Qe(s, t.memoizedState) || (Pe = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s)
  }
  return [s, r]
}
function Qd () {}
function Yd (e, t) {
  var n = G,
    r = Be(),
    i = t(),
    s = !Qe(r.memoizedState, i)
  if (
    (s && ((r.memoizedState = i), (Pe = !0)),
    (r = r.queue),
    pa(Jd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ie !== null && ie.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Br(9, Zd.bind(null, n, r, i, t), void 0, null),
      se === null)
    )
      throw Error(P(349))
    ln & 30 || Xd(n, t, i)
  }
  return i
}
function Xd (e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function Zd (e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), qd(t) && bd(e)
}
function Jd (e, t, n) {
  return n(function () {
    qd(t) && bd(e)
  })
}
function qd (e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !Qe(e, n)
  } catch {
    return !0
  }
}
function bd (e) {
  var t = ht(e, 1)
  t !== null && Ge(t, e, 1, -1)
}
function Ku (e) {
  var t = Xe()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zr,
      lastRenderedState: e
    }),
    (t.queue = e),
    (e = e.dispatch = hy.bind(null, G, e)),
    [t.memoizedState, e]
  )
}
function Br (e, t, n, r) {
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
function eh () {
  return Be().memoizedState
}
function Di (e, t, n, r) {
  var i = Xe()
  ;(G.flags |= e),
    (i.memoizedState = Br(1 | t, n, void 0, r === void 0 ? null : r))
}
function ks (e, t, n, r) {
  var i = Be()
  r = r === void 0 ? null : r
  var s = void 0
  if (ee !== null) {
    var o = ee.memoizedState
    if (((s = o.destroy), r !== null && fa(r, o.deps))) {
      i.memoizedState = Br(t, n, s, r)
      return
    }
  }
  ;(G.flags |= e), (i.memoizedState = Br(1 | t, n, s, r))
}
function Gu (e, t) {
  return Di(8390656, 8, e, t)
}
function pa (e, t) {
  return ks(2048, 8, e, t)
}
function th (e, t) {
  return ks(4, 2, e, t)
}
function nh (e, t) {
  return ks(4, 4, e, t)
}
function rh (e, t) {
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
function ih (e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ks(4, 4, rh.bind(null, t, e), n)
  )
}
function ma () {}
function sh (e, t) {
  var n = Be()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && fa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function oh (e, t) {
  var n = Be()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && fa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function lh (e, t, n) {
  return ln & 21
    ? (Qe(n, t) || ((n = dd()), (G.lanes |= n), (an |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Pe = !0)), (e.memoizedState = n))
}
function fy (e, t) {
  var n = O
  ;(O = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = so.transition
  so.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(O = n), (so.transition = r)
  }
}
function ah () {
  return Be().memoizedState
}
function dy (e, t, n) {
  var r = jt(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }),
    uh(e))
  )
    ch(t, n)
  else if (((n = Hd(e, t, n, r)), n !== null)) {
    var i = ve()
    Ge(n, e, r, i), fh(n, t, r)
  }
}
function hy (e, t, n) {
  var r = jt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (uh(e)) ch(t, i)
  else {
    var s = e.alternate
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = s(o, n)
        if (((i.hasEagerState = !0), (i.eagerState = l), Qe(l, o))) {
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
    ;(n = Hd(e, t, i, r)),
      n !== null && ((i = ve()), Ge(n, e, r, i), fh(n, t, r))
  }
}
function uh (e) {
  var t = e.alternate
  return e === G || (t !== null && t === G)
}
function ch (e, t) {
  vr = rs = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function fh (e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Gl(e, n)
  }
}
var is = {
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
  py = {
    readContext: ze,
    useCallback: function (e, t) {
      return (Xe().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: ze,
    useEffect: Gu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Di(4194308, 4, rh.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return Di(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return Di(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = Xe()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var r = Xe()
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
        (e = e.dispatch = dy.bind(null, G, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = Xe()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: Ku,
    useDebugValue: ma,
    useDeferredValue: function (e) {
      return (Xe().memoizedState = e)
    },
    useTransition: function () {
      var e = Ku(!1),
        t = e[0]
      return (e = fy.bind(null, e[1])), (Xe().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = G,
        i = Xe()
      if (W) {
        if (n === void 0) throw Error(P(407))
        n = n()
      } else {
        if (((n = t()), se === null)) throw Error(P(349))
        ln & 30 || Xd(r, t, n)
      }
      i.memoizedState = n
      var s = { value: n, getSnapshot: t }
      return (
        (i.queue = s),
        Gu(Jd.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Br(9, Zd.bind(null, r, s, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = Xe(),
        t = se.identifierPrefix
      if (W) {
        var n = it,
          r = rt
        ;(n = (r & ~(1 << (32 - Ke(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Or++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = cy++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1
  },
  my = {
    readContext: ze,
    useCallback: sh,
    useContext: ze,
    useEffect: pa,
    useImperativeHandle: ih,
    useInsertionEffect: th,
    useLayoutEffect: nh,
    useMemo: oh,
    useReducer: oo,
    useRef: eh,
    useState: function () {
      return oo(zr)
    },
    useDebugValue: ma,
    useDeferredValue: function (e) {
      var t = Be()
      return lh(t, ee.memoizedState, e)
    },
    useTransition: function () {
      var e = oo(zr)[0],
        t = Be().memoizedState
      return [e, t]
    },
    useMutableSource: Qd,
    useSyncExternalStore: Yd,
    useId: ah,
    unstable_isNewReconciler: !1
  },
  gy = {
    readContext: ze,
    useCallback: sh,
    useContext: ze,
    useEffect: pa,
    useImperativeHandle: ih,
    useInsertionEffect: th,
    useLayoutEffect: nh,
    useMemo: oh,
    useReducer: lo,
    useRef: eh,
    useState: function () {
      return lo(zr)
    },
    useDebugValue: ma,
    useDeferredValue: function (e) {
      var t = Be()
      return ee === null ? (t.memoizedState = e) : lh(t, ee.memoizedState, e)
    },
    useTransition: function () {
      var e = lo(zr)[0],
        t = Be().memoizedState
      return [e, t]
    },
    useMutableSource: Qd,
    useSyncExternalStore: Yd,
    useId: ah,
    unstable_isNewReconciler: !1
  }
function $e (e, t) {
  if (e && e.defaultProps) {
    ;(t = Q({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
function nl (e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Cs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? fn(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = ve(),
      i = jt(e),
      s = ot(r, i)
    ;(s.payload = t),
      n != null && (s.callback = n),
      (t = Vt(e, s, i)),
      t !== null && (Ge(t, e, i, r), Mi(t, e, i))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = ve(),
      i = jt(e),
      s = ot(r, i)
    ;(s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Vt(e, s, i)),
      t !== null && (Ge(t, e, i, r), Mi(t, e, i))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = ve(),
      r = jt(e),
      i = ot(n, r)
    ;(i.tag = 2),
      t != null && (i.callback = t),
      (t = Vt(e, i, r)),
      t !== null && (Ge(t, e, r, n), Mi(t, e, r))
  }
}
function Qu (e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Dr(n, r) || !Dr(i, s)
      : !0
  )
}
function dh (e, t, n) {
  var r = !1,
    i = Rt,
    s = t.contextType
  return (
    typeof s == 'object' && s !== null
      ? (s = ze(s))
      : ((i = ke(t) ? sn : ge.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? On(e, i) : Rt)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Cs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  )
}
function Yu (e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Cs.enqueueReplaceState(t, t.state, null)
}
function rl (e, t, n, r) {
  var i = e.stateNode
  ;(i.props = n), (i.state = e.memoizedState), (i.refs = {}), la(e)
  var s = t.contextType
  typeof s == 'object' && s !== null
    ? (i.context = ze(s))
    : ((s = ke(t) ? sn : ge.current), (i.context = On(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == 'function' && (nl(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Cs.enqueueReplaceState(i, i.state, null),
      ts(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308)
}
function $n (e, t) {
  try {
    var n = '',
      r = t
    do (n += Hm(r)), (r = r.return)
    while (r)
    var i = n
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack
  }
  return { value: e, source: t, stack: i, digest: null }
}
function ao (e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function il (e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var yy = typeof WeakMap == 'function' ? WeakMap : Map
function hh (e, t, n) {
  ;(n = ot(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      os || ((os = !0), (pl = r)), il(e, t)
    }),
    n
  )
}
function ph (e, t, n) {
  ;(n = ot(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var i = t.value
    ;(n.payload = function () {
      return r(i)
    }),
      (n.callback = function () {
        il(e, t)
      })
  }
  var s = e.stateNode
  return (
    s !== null &&
      typeof s.componentDidCatch == 'function' &&
      (n.callback = function () {
        il(e, t),
          typeof r != 'function' &&
            (Mt === null ? (Mt = new Set([this])) : Mt.add(this))
        var o = t.stack
        this.componentDidCatch(t.value, { componentStack: o !== null ? o : '' })
      }),
    n
  )
}
function Xu (e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new yy()
    var i = new Set()
    r.set(t, i)
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i))
  i.has(n) || (i.add(n), (e = jy.bind(null, e, t, n)), t.then(e, e))
}
function Zu (e) {
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
function Ju (e, t, n, r, i) {
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
              : ((t = ot(-1, 1)), (t.tag = 2), Vt(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var vy = mt.ReactCurrentOwner,
  Pe = !1
function ye (e, t, n, r) {
  t.child = e === null ? Wd(t, null, n, r) : Bn(t, e.child, n, r)
}
function qu (e, t, n, r, i) {
  n = n.render
  var s = t.ref
  return (
    _n(t, i),
    (r = da(e, t, n, r, s, i)),
    (n = ha()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        pt(e, t, i))
      : (W && n && ea(t), (t.flags |= 1), ye(e, t, r, i), t.child)
  )
}
function bu (e, t, n, r, i) {
  if (e === null) {
    var s = n.type
    return typeof s == 'function' &&
      !Ta(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), mh(e, t, s, r, i))
      : ((e = Fi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : Dr), n(o, r) && e.ref === t.ref)
    )
      return pt(e, t, i)
  }
  return (
    (t.flags |= 1),
    (e = Dt(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function mh (e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps
    if (Dr(s, r) && e.ref === t.ref)
      if (((Pe = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Pe = !0)
      else return (t.lanes = e.lanes), pt(e, t, i)
  }
  return sl(e, t, n, r, i)
}
function gh (e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        B(Cn, Ee),
        (Ee |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null
          }),
          (t.updateQueue = null),
          B(Cn, Ee),
          (Ee |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        B(Cn, Ee),
        (Ee |= r)
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      B(Cn, Ee),
      (Ee |= r)
  return ye(e, t, i, n), t.child
}
function yh (e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function sl (e, t, n, r, i) {
  var s = ke(n) ? sn : ge.current
  return (
    (s = On(t, s)),
    _n(t, i),
    (n = da(e, t, n, r, s, i)),
    (r = ha()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        pt(e, t, i))
      : (W && r && ea(t), (t.flags |= 1), ye(e, t, n, i), t.child)
  )
}
function ec (e, t, n, r, i) {
  if (ke(n)) {
    var s = !0
    Zi(t)
  } else s = !1
  if ((_n(t, i), t.stateNode === null))
    Li(e, t), dh(t, n, r), rl(t, n, r, i), (r = !0)
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps
    o.props = l
    var a = o.context,
      u = n.contextType
    typeof u == 'object' && u !== null
      ? (u = ze(u))
      : ((u = ke(n) ? sn : ge.current), (u = On(t, u)))
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == 'function' || typeof o.getSnapshotBeforeUpdate == 'function'
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((l !== r || a !== u) && Yu(t, o, r, u)),
      (wt = !1)
    var d = t.memoizedState
    ;(o.state = d),
      ts(t, r, o, i),
      (a = t.memoizedState),
      l !== r || d !== a || Te.current || wt
        ? (typeof c == 'function' && (nl(t, n, c, r), (a = t.memoizedState)),
          (l = wt || Qu(t, n, l, r, d, a, u))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = u),
          (r = l))
        : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1))
  } else {
    ;(o = t.stateNode),
      Kd(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : $e(t.type, l)),
      (o.props = u),
      (f = t.pendingProps),
      (d = o.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = ze(a))
        : ((a = ke(n) ? sn : ge.current), (a = On(t, a)))
    var g = n.getDerivedStateFromProps
    ;(c =
      typeof g == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((l !== f || d !== a) && Yu(t, o, r, a)),
      (wt = !1),
      (d = t.memoizedState),
      (o.state = d),
      ts(t, r, o, i)
    var y = t.memoizedState
    l !== f || d !== y || Te.current || wt
      ? (typeof g == 'function' && (nl(t, n, g, r), (y = t.memoizedState)),
        (u = wt || Qu(t, n, u, r, d, y, a) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' &&
                o.componentWillUpdate(r, y, a),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, y, a)),
            typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = a),
        (r = u))
      : (typeof o.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return ol(e, t, n, r, s, i)
}
function ol (e, t, n, r, i, s) {
  yh(e, t)
  var o = (t.flags & 128) !== 0
  if (!r && !o) return i && zu(t, n, !1), pt(e, t, s)
  ;(r = t.stateNode), (vy.current = t)
  var l =
    o && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Bn(t, e.child, null, s)), (t.child = Bn(t, null, l, s)))
      : ye(e, t, l, s),
    (t.memoizedState = r.state),
    i && zu(t, n, !0),
    t.child
  )
}
function vh (e) {
  var t = e.stateNode
  t.pendingContext
    ? Ou(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ou(e, t.context, !1),
    aa(e, t.containerInfo)
}
function tc (e, t, n, r, i) {
  return zn(), na(i), (t.flags |= 256), ye(e, t, n, r), t.child
}
var ll = { dehydrated: null, treeContext: null, retryLane: 0 }
function al (e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function xh (e, t, n) {
  var r = t.pendingProps,
    i = H.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    l
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    B(H, i & 1),
    e === null)
  )
    return (
      el(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = As(o, r, 0, null)),
              (e = nn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = al(n)),
              (t.memoizedState = ll),
              e)
            : ga(t, o))
    )
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return xy(e, t, o, r, l, i, n)
  if (s) {
    ;(s = r.fallback), (o = t.mode), (i = e.child), (l = i.sibling)
    var a = { mode: 'hidden', children: r.children }
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Dt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (s = Dt(l, s)) : ((s = nn(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? al(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = ll),
      r
    )
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Dt(s, { mode: 'visible', children: r.children })),
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
function ga (e, t) {
  return (
    (t = As({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function yi (e, t, n, r) {
  return (
    r !== null && na(r),
    Bn(t, e.child, null, n),
    (e = ga(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function xy (e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ao(Error(P(422)))), yi(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = As({ mode: 'visible', children: r.children }, i, 0, null)),
        (s = nn(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && Bn(t, e.child, null, o),
        (t.child.memoizedState = al(o)),
        (t.memoizedState = ll),
        s)
  if (!(t.mode & 1)) return yi(e, t, o, null)
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst
    return (r = l), (s = Error(P(419))), (r = ao(s, r, void 0)), yi(e, t, o, r)
  }
  if (((l = (o & e.childLanes) !== 0), Pe || l)) {
    if (((r = se), r !== null)) {
      switch (o & -o) {
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
      ;(i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), ht(e, i), Ge(r, e, i, -1))
    }
    return Pa(), (r = ao(Error(P(421)))), yi(e, t, o, r)
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Dy.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Ne = At(i.nextSibling)),
      (Ae = t),
      (W = !0),
      (He = null),
      e !== null &&
        ((_e[Fe++] = rt),
        (_e[Fe++] = it),
        (_e[Fe++] = on),
        (rt = e.id),
        (it = e.overflow),
        (on = t)),
      (t = ga(t, r.children)),
      (t.flags |= 4096),
      t)
}
function nc (e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), tl(e.return, t, n)
}
function uo (e, t, n, r, i) {
  var s = e.memoizedState
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i))
}
function wh (e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail
  if ((ye(e, t, r.children, n), (r = H.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && nc(e, n, t)
        else if (e.tag === 19) nc(e, n, t)
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
            e !== null && ns(e) === null && (i = n),
            (n = n.sibling)
        ;(n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          uo(t, !1, i, n, s)
        break
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ns(e) === null)) {
            t.child = i
            break
          }
          ;(e = i.sibling), (i.sibling = n), (n = i), (i = e)
        }
        uo(t, !0, n, null, s)
        break
      case 'together':
        uo(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function Li (e, t) {
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
  if (e !== null && t.child !== e.child) throw Error(P(153))
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
function wy (e, t, n) {
  switch (t.tag) {
    case 3:
      vh(t), zn()
      break
    case 5:
      Gd(t)
      break
    case 1:
      ke(t.type) && Zi(t)
      break
    case 4:
      aa(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value
      B(bi, r._currentValue), (r._currentValue = i)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (B(H, H.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? xh(e, t, n)
          : (B(H, H.current & 1),
            (e = pt(e, t, n)),
            e !== null ? e.sibling : null)
      B(H, H.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return wh(e, t, n)
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
      return (t.lanes = 0), gh(e, t, n)
  }
  return pt(e, t, n)
}
var Sh, ul, Ph, Th
Sh = function (e, t) {
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
ul = function () {}
Ph = function (e, t, n, r) {
  var i = e.memoizedProps
  if (i !== r) {
    ;(e = t.stateNode), bt(qe.current)
    var s = null
    switch (n) {
      case 'input':
        ;(i = jo(e, i)), (r = jo(e, r)), (s = [])
        break
      case 'select':
        ;(i = Q({}, i, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (s = [])
        break
      case 'textarea':
        ;(i = Ro(e, i)), (r = Ro(e, r)), (s = [])
        break
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Yi)
    }
    Fo(n, r)
    var o
    n = null
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var l = i[u]
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''))
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Cr.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null))
    for (u in r) {
      var a = r[u]
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === 'style')
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ''))
            for (o in a)
              a.hasOwnProperty(o) &&
                l[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]))
          } else n || (s || (s = []), s.push(u, n)), (n = a)
        else
          u === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(u, a))
            : u === 'children'
            ? (typeof a != 'string' && typeof a != 'number') ||
              (s = s || []).push(u, '' + a)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (Cr.hasOwnProperty(u)
                ? (a != null && u === 'onScroll' && U('scroll', e),
                  s || l === a || (s = []))
                : (s = s || []).push(u, a))
    }
    n && (s = s || []).push('style', n)
    var u = s
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
Th = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function ir (e, t) {
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
function fe (e) {
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
function Sy (e, t, n) {
  var r = t.pendingProps
  switch ((ta(t), t.tag)) {
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
      return fe(t), null
    case 1:
      return ke(t.type) && Xi(), fe(t), null
    case 3:
      return (
        (r = t.stateNode),
        Un(),
        $(Te),
        $(ge),
        ca(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (mi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), He !== null && (yl(He), (He = null)))),
        ul(e, t),
        fe(t),
        null
      )
    case 5:
      ua(t)
      var i = bt(Ir.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        Ph(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166))
          return fe(t), null
        }
        if (((e = bt(qe.current)), mi(t))) {
          ;(r = t.stateNode), (n = t.type)
          var s = t.memoizedProps
          switch (((r[Ze] = t), (r[_r] = s), (e = (t.mode & 1) !== 0), n)) {
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
              for (i = 0; i < cr.length; i++) U(cr[i], r)
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
              fu(r, s), U('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!s.multiple }),
                U('invalid', r)
              break
            case 'textarea':
              hu(r, s), U('invalid', r)
          }
          Fo(n, s), (i = null)
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o]
              o === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      pi(r.textContent, l, e),
                    (i = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      pi(r.textContent, l, e),
                    (i = ['children', '' + l]))
                : Cr.hasOwnProperty(o) &&
                  l != null &&
                  o === 'onScroll' &&
                  U('scroll', r)
            }
          switch (n) {
            case 'input':
              oi(r), du(r, s, !0)
              break
            case 'textarea':
              oi(r), pu(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof s.onClick == 'function' && (r.onclick = Yi)
          }
          ;(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(o = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Jf(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = o.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === 'select' &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ze] = t),
            (e[_r] = r),
            Sh(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((o = Io(n, r)), n)) {
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
                for (i = 0; i < cr.length; i++) U(cr[i], e)
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
                fu(e, r), (i = jo(e, r)), U('invalid', e)
                break
              case 'option':
                i = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Q({}, r, { value: void 0 })),
                  U('invalid', e)
                break
              case 'textarea':
                hu(e, r), (i = Ro(e, r)), U('invalid', e)
                break
              default:
                i = r
            }
            Fo(n, i), (l = i)
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s]
                s === 'style'
                  ? ed(e, a)
                  : s === 'dangerouslySetInnerHTML'
                  ? ((a = a ? a.__html : void 0), a != null && qf(e, a))
                  : s === 'children'
                  ? typeof a == 'string'
                    ? (n !== 'textarea' || a !== '') && Er(e, a)
                    : typeof a == 'number' && Er(e, '' + a)
                  : s !== 'suppressContentEditableWarning' &&
                    s !== 'suppressHydrationWarning' &&
                    s !== 'autoFocus' &&
                    (Cr.hasOwnProperty(s)
                      ? a != null && s === 'onScroll' && U('scroll', e)
                      : a != null && Bl(e, s, a, o))
              }
            switch (n) {
              case 'input':
                oi(e), du(e, r, !1)
                break
              case 'textarea':
                oi(e), pu(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + Lt(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? jn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      jn(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof i.onClick == 'function' && (e.onclick = Yi)
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
      return fe(t), null
    case 6:
      if (e && t.stateNode != null) Th(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(P(166))
        if (((n = bt(Ir.current)), bt(qe.current), mi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ze] = t),
            (s = r.nodeValue !== n) && ((e = Ae), e !== null))
          )
            switch (e.tag) {
              case 3:
                pi(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  pi(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          s && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ze] = t),
            (t.stateNode = r)
      }
      return fe(t), null
    case 13:
      if (
        ($(H),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && Ne !== null && t.mode & 1 && !(t.flags & 128))
          Ud(), zn(), (t.flags |= 98560), (s = !1)
        else if (((s = mi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(P(318))
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(P(317))
            s[Ze] = t
          } else
            zn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          fe(t), (s = !1)
        } else He !== null && (yl(He), (He = null)), (s = !0)
        if (!s) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || H.current & 1 ? te === 0 && (te = 3) : Pa())),
          t.updateQueue !== null && (t.flags |= 4),
          fe(t),
          null)
    case 4:
      return (
        Un(), ul(e, t), e === null && Lr(t.stateNode.containerInfo), fe(t), null
      )
    case 10:
      return sa(t.type._context), fe(t), null
    case 17:
      return ke(t.type) && Xi(), fe(t), null
    case 19:
      if (($(H), (s = t.memoizedState), s === null)) return fe(t), null
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) ir(s, !1)
        else {
          if (te !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = ns(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    ir(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
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
          s.tail !== null &&
            J() > Wn &&
            ((t.flags |= 128), (r = !0), ir(s, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = ns(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ir(s, !0),
              s.tail === null && s.tailMode === 'hidden' && !o.alternate && !W)
            )
              return fe(t), null
          } else
            2 * J() - s.renderingStartTime > Wn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ir(s, !1), (t.lanes = 4194304))
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o))
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = J()),
          (t.sibling = null),
          (n = H.current),
          B(H, r ? (n & 1) | 2 : n & 1),
          t)
        : (fe(t), null)
    case 22:
    case 23:
      return (
        Sa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ee & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : fe(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(P(156, t.tag))
}
function Py (e, t) {
  switch ((ta(t), t.tag)) {
    case 1:
      return (
        ke(t.type) && Xi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        Un(),
        $(Te),
        $(ge),
        ca(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return ua(t), null
    case 13:
      if (($(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(P(340))
        zn()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return $(H), null
    case 4:
      return Un(), null
    case 10:
      return sa(t.type._context), null
    case 22:
    case 23:
      return Sa(), null
    case 24:
      return null
    default:
      return null
  }
}
var vi = !1,
  he = !1,
  Ty = typeof WeakSet == 'function' ? WeakSet : Set,
  A = null
function kn (e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        Y(e, t, r)
      }
    else n.current = null
}
function cl (e, t, n) {
  try {
    n()
  } catch (r) {
    Y(e, t, r)
  }
}
var rc = !1
function ky (e, t) {
  if (((Qo = Ki), (e = Ad()), bl(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var i = r.anchorOffset,
            s = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, s.nodeType
          } catch {
            n = null
            break e
          }
          var o = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            d = null
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = o + i),
                f !== s || (r !== 0 && f.nodeType !== 3) || (a = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (d = f), (f = g)
            for (;;) {
              if (f === e) break t
              if (
                (d === n && ++u === i && (l = o),
                d === s && ++c === r && (a = o),
                (g = f.nextSibling) !== null)
              )
                break
              ;(f = d), (d = f.parentNode)
            }
            f = g
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (Yo = { focusedElem: e, selectionRange: n }, Ki = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (A = e)
    else
      for (; A !== null; ) {
        t = A
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
                    T = y.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : $e(t.type, v),
                      T
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
                throw Error(P(163))
            }
        } catch (w) {
          Y(t, t.return, w)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (A = e)
          break
        }
        A = t.return
      }
  return (y = rc), (rc = !1), y
}
function xr (e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next)
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy
        ;(i.destroy = void 0), s !== void 0 && cl(t, n, s)
      }
      i = i.next
    } while (i !== r)
  }
}
function Es (e, t) {
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
function fl (e) {
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
function kh (e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), kh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ze], delete t[_r], delete t[Jo], delete t[oy], delete t[ly])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function Ch (e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function ic (e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ch(e.return)) return null
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
          n != null || t.onclick !== null || (t.onclick = Yi))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (dl(e, t, n), e = e.sibling; e !== null; ) dl(e, t, n), (e = e.sibling)
}
function hl (e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (hl(e, t, n), e = e.sibling; e !== null; ) hl(e, t, n), (e = e.sibling)
}
var oe = null,
  We = !1
function yt (e, t, n) {
  for (n = n.child; n !== null; ) Eh(e, t, n), (n = n.sibling)
}
function Eh (e, t, n) {
  if (Je && typeof Je.onCommitFiberUnmount == 'function')
    try {
      Je.onCommitFiberUnmount(vs, n)
    } catch {}
  switch (n.tag) {
    case 5:
      he || kn(n, t)
    case 6:
      var r = oe,
        i = We
      ;(oe = null),
        yt(e, t, n),
        (oe = r),
        (We = i),
        oe !== null &&
          (We
            ? ((e = oe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : oe.removeChild(n.stateNode))
      break
    case 18:
      oe !== null &&
        (We
          ? ((e = oe),
            (n = n.stateNode),
            e.nodeType === 8
              ? no(e.parentNode, n)
              : e.nodeType === 1 && no(e, n),
            Mr(e))
          : no(oe, n.stateNode))
      break
    case 4:
      ;(r = oe),
        (i = We),
        (oe = n.stateNode.containerInfo),
        (We = !0),
        yt(e, t, n),
        (oe = r),
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
          var s = i,
            o = s.destroy
          ;(s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && cl(n, t, o),
            (i = i.next)
        } while (i !== r)
      }
      yt(e, t, n)
      break
    case 1:
      if (
        !he &&
        (kn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (l) {
          Y(n, t, l)
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
function sc (e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new Ty()),
      t.forEach(function (r) {
        var i = Ly.bind(null, e, r)
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
        var s = e,
          o = t,
          l = o
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ;(oe = l.stateNode), (We = !1)
              break e
            case 3:
              ;(oe = l.stateNode.containerInfo), (We = !0)
              break e
            case 4:
              ;(oe = l.stateNode.containerInfo), (We = !0)
              break e
          }
          l = l.return
        }
        if (oe === null) throw Error(P(160))
        Eh(s, o, i), (oe = null), (We = !1)
        var a = i.alternate
        a !== null && (a.return = null), (i.return = null)
      } catch (u) {
        Y(i, t, u)
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
      if ((Ue(t, e), Ye(e), r & 4)) {
        try {
          xr(3, e, e.return), Es(3, e)
        } catch (v) {
          Y(e, e.return, v)
        }
        try {
          xr(5, e, e.return)
        } catch (v) {
          Y(e, e.return, v)
        }
      }
      break
    case 1:
      Ue(t, e), Ye(e), r & 512 && n !== null && kn(n, n.return)
      break
    case 5:
      if (
        (Ue(t, e),
        Ye(e),
        r & 512 && n !== null && kn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode
        try {
          Er(i, '')
        } catch (v) {
          Y(e, e.return, v)
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue
        if (((e.updateQueue = null), a !== null))
          try {
            l === 'input' && s.type === 'radio' && s.name != null && Xf(i, s),
              Io(l, o)
            var u = Io(l, s)
            for (o = 0; o < a.length; o += 2) {
              var c = a[o],
                f = a[o + 1]
              c === 'style'
                ? ed(i, f)
                : c === 'dangerouslySetInnerHTML'
                ? qf(i, f)
                : c === 'children'
                ? Er(i, f)
                : Bl(i, c, f, u)
            }
            switch (l) {
              case 'input':
                Do(i, s)
                break
              case 'textarea':
                Zf(i, s)
                break
              case 'select':
                var d = i._wrapperState.wasMultiple
                i._wrapperState.wasMultiple = !!s.multiple
                var g = s.value
                g != null
                  ? jn(i, !!s.multiple, g, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? jn(i, !!s.multiple, s.defaultValue, !0)
                      : jn(i, !!s.multiple, s.multiple ? [] : '', !1))
            }
            i[_r] = s
          } catch (v) {
            Y(e, e.return, v)
          }
      }
      break
    case 6:
      if ((Ue(t, e), Ye(e), r & 4)) {
        if (e.stateNode === null) throw Error(P(162))
        ;(i = e.stateNode), (s = e.memoizedProps)
        try {
          i.nodeValue = s
        } catch (v) {
          Y(e, e.return, v)
        }
      }
      break
    case 3:
      if (
        (Ue(t, e), Ye(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Mr(t.containerInfo)
        } catch (v) {
          Y(e, e.return, v)
        }
      break
    case 4:
      Ue(t, e), Ye(e)
      break
    case 13:
      Ue(t, e),
        Ye(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (xa = J())),
        r & 4 && sc(e)
      break
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((he = (u = he) || c), Ue(t, e), (he = u)) : Ue(t, e),
        Ye(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (A = e, c = e.child; c !== null; ) {
            for (f = A = c; A !== null; ) {
              switch (((d = A), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  xr(4, d, d.return)
                  break
                case 1:
                  kn(d, d.return)
                  var y = d.stateNode
                  if (typeof y.componentWillUnmount == 'function') {
                    ;(r = d), (n = d.return)
                    try {
                      ;(t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount()
                    } catch (v) {
                      Y(r, n, v)
                    }
                  }
                  break
                case 5:
                  kn(d, d.return)
                  break
                case 22:
                  if (d.memoizedState !== null) {
                    lc(f)
                    continue
                  }
              }
              g !== null ? ((g.return = d), (A = g)) : lc(f)
            }
            c = c.sibling
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f
              try {
                ;(i = f.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == 'function'
                        ? s.setProperty('display', 'none', 'important')
                        : (s.display = 'none'))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty('display')
                          ? a.display
                          : null),
                      (l.style.display = bf('display', o)))
              } catch (v) {
                Y(e, e.return, v)
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? '' : f.memoizedProps
              } catch (v) {
                Y(e, e.return, v)
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ;(f.child.return = f), (f = f.child)
            continue
          }
          if (f === e) break e
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e
            c === f && (c = null), (f = f.return)
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling)
        }
      }
      break
    case 19:
      Ue(t, e), Ye(e), r & 4 && sc(e)
      break
    case 21:
      break
    default:
      Ue(t, e), Ye(e)
  }
}
function Ye (e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ch(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(P(160))
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode
          r.flags & 32 && (Er(i, ''), (r.flags &= -33))
          var s = ic(e)
          hl(e, s, i)
          break
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = ic(e)
          dl(e, l, o)
          break
        default:
          throw Error(P(161))
      }
    } catch (a) {
      Y(e, e.return, a)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function Cy (e, t, n) {
  ;(A = e), Ah(e)
}
function Ah (e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var i = A,
      s = i.child
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || vi
      if (!o) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || he
        l = vi
        var u = he
        if (((vi = o), (he = a) && !u))
          for (A = i; A !== null; )
            (o = A),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? ac(i)
                : a !== null
                ? ((a.return = o), (A = a))
                : ac(i)
        for (; s !== null; ) (A = s), Ah(s), (s = s.sibling)
        ;(A = i), (vi = l), (he = u)
      }
      oc(e)
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (A = s)) : oc(e)
  }
}
function oc (e) {
  for (; A !== null; ) {
    var t = A
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              he || Es(5, t)
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
              var s = t.updateQueue
              s !== null && Hu(t, s, r)
              break
            case 3:
              var o = t.updateQueue
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                Hu(t, o, n)
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
                    var f = c.dehydrated
                    f !== null && Mr(f)
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
              throw Error(P(163))
          }
        he || (t.flags & 512 && fl(t))
      } catch (d) {
        Y(t, t.return, d)
      }
    }
    if (t === e) {
      A = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (A = n)
      break
    }
    A = t.return
  }
}
function lc (e) {
  for (; A !== null; ) {
    var t = A
    if (t === e) {
      A = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (A = n)
      break
    }
    A = t.return
  }
}
function ac (e) {
  for (; A !== null; ) {
    var t = A
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            Es(4, t)
          } catch (a) {
            Y(t, n, a)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var i = t.return
            try {
              r.componentDidMount()
            } catch (a) {
              Y(t, i, a)
            }
          }
          var s = t.return
          try {
            fl(t)
          } catch (a) {
            Y(t, s, a)
          }
          break
        case 5:
          var o = t.return
          try {
            fl(t)
          } catch (a) {
            Y(t, o, a)
          }
      }
    } catch (a) {
      Y(t, t.return, a)
    }
    if (t === e) {
      A = null
      break
    }
    var l = t.sibling
    if (l !== null) {
      ;(l.return = t.return), (A = l)
      break
    }
    A = t.return
  }
}
var Ey = Math.ceil,
  ss = mt.ReactCurrentDispatcher,
  ya = mt.ReactCurrentOwner,
  Oe = mt.ReactCurrentBatchConfig,
  F = 0,
  se = null,
  q = null,
  ae = 0,
  Ee = 0,
  Cn = zt(0),
  te = 0,
  Ur = null,
  an = 0,
  Ns = 0,
  va = 0,
  wr = null,
  Se = null,
  xa = 0,
  Wn = 1 / 0,
  tt = null,
  os = !1,
  pl = null,
  Mt = null,
  xi = !1,
  kt = null,
  ls = 0,
  Sr = 0,
  ml = null,
  Ri = -1,
  _i = 0
function ve () {
  return F & 6 ? J() : Ri !== -1 ? Ri : (Ri = J())
}
function jt (e) {
  return e.mode & 1
    ? F & 2 && ae !== 0
      ? ae & -ae
      : uy.transition !== null
      ? (_i === 0 && (_i = dd()), _i)
      : ((e = O),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : xd(e.type))),
        e)
    : 1
}
function Ge (e, t, n, r) {
  if (50 < Sr) throw ((Sr = 0), (ml = null), Error(P(185)))
  Yr(e, n, r),
    (!(F & 2) || e !== se) &&
      (e === se && (!(F & 2) && (Ns |= n), te === 4 && Pt(e, ae)),
      Ce(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((Wn = J() + 500), Ts && Bt()))
}
function Ce (e, t) {
  var n = e.callbackNode
  ug(e, t)
  var r = Hi(e, e === se ? ae : 0)
  if (r === 0)
    n !== null && yu(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && yu(n), t === 1))
      e.tag === 0 ? ay(uc.bind(null, e)) : Od(uc.bind(null, e)),
        iy(function () {
          !(F & 6) && Bt()
        }),
        (n = null)
    else {
      switch (hd(r)) {
        case 1:
          n = Kl
          break
        case 4:
          n = cd
          break
        case 16:
          n = Wi
          break
        case 536870912:
          n = fd
          break
        default:
          n = Wi
      }
      n = Fh(n, Vh.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function Vh (e, t) {
  if (((Ri = -1), (_i = 0), F & 6)) throw Error(P(327))
  var n = e.callbackNode
  if (Fn() && e.callbackNode !== n) return null
  var r = Hi(e, e === se ? ae : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = as(e, r)
  else {
    t = r
    var i = F
    F |= 2
    var s = jh()
    ;(se !== e || ae !== t) && ((tt = null), (Wn = J() + 500), tn(e, t))
    do
      try {
        Vy()
        break
      } catch (l) {
        Mh(e, l)
      }
    while (!0)
    ia(),
      (ss.current = s),
      (F = i),
      q !== null ? (t = 0) : ((se = null), (ae = 0), (t = te))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = $o(e)), i !== 0 && ((r = i), (t = gl(e, i)))), t === 1)
    )
      throw ((n = Ur), tn(e, 0), Pt(e, r), Ce(e, J()), n)
    if (t === 6) Pt(e, r)
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Ny(i) &&
          ((t = as(e, r)),
          t === 2 && ((s = $o(e)), s !== 0 && ((r = s), (t = gl(e, s)))),
          t === 1))
      )
        throw ((n = Ur), tn(e, 0), Pt(e, r), Ce(e, J()), n)
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(P(345))
        case 2:
          Yt(e, Se, tt)
          break
        case 3:
          if (
            (Pt(e, r), (r & 130023424) === r && ((t = xa + 500 - J()), 10 < t))
          ) {
            if (Hi(e, 0) !== 0) break
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ve(), (e.pingedLanes |= e.suspendedLanes & i)
              break
            }
            e.timeoutHandle = Zo(Yt.bind(null, e, Se, tt), t)
            break
          }
          Yt(e, Se, tt)
          break
        case 4:
          if ((Pt(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Ke(r)
            ;(s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s)
          }
          if (
            ((r = i),
            (r = J() - r),
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
                : 1960 * Ey(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Zo(Yt.bind(null, e, Se, tt), r)
            break
          }
          Yt(e, Se, tt)
          break
        case 5:
          Yt(e, Se, tt)
          break
        default:
          throw Error(P(329))
      }
    }
  }
  return Ce(e, J()), e.callbackNode === n ? Vh.bind(null, e) : null
}
function gl (e, t) {
  var n = wr
  return (
    e.current.memoizedState.isDehydrated && (tn(e, t).flags |= 256),
    (e = as(e, t)),
    e !== 2 && ((t = Se), (Se = n), t !== null && yl(t)),
    e
  )
}
function yl (e) {
  Se === null ? (Se = e) : Se.push.apply(Se, e)
}
function Ny (e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot
          i = i.value
          try {
            if (!Qe(s(), i)) return !1
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
function Pt (e, t) {
  for (
    t &= ~va,
      t &= ~Ns,
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
function uc (e) {
  if (F & 6) throw Error(P(327))
  Fn()
  var t = Hi(e, 0)
  if (!(t & 1)) return Ce(e, J()), null
  var n = as(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = $o(e)
    r !== 0 && ((t = r), (n = gl(e, r)))
  }
  if (n === 1) throw ((n = Ur), tn(e, 0), Pt(e, t), Ce(e, J()), n)
  if (n === 6) throw Error(P(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Yt(e, Se, tt),
    Ce(e, J()),
    null
  )
}
function wa (e, t) {
  var n = F
  F |= 1
  try {
    return e(t)
  } finally {
    ;(F = n), F === 0 && ((Wn = J() + 500), Ts && Bt())
  }
}
function un (e) {
  kt !== null && kt.tag === 0 && !(F & 6) && Fn()
  var t = F
  F |= 1
  var n = Oe.transition,
    r = O
  try {
    if (((Oe.transition = null), (O = 1), e)) return e()
  } finally {
    ;(O = r), (Oe.transition = n), (F = t), !(F & 6) && Bt()
  }
}
function Sa () {
  ;(Ee = Cn.current), $(Cn)
}
function tn (e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), ry(n)), q !== null))
    for (n = q.return; n !== null; ) {
      var r = n
      switch ((ta(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && Xi()
          break
        case 3:
          Un(), $(Te), $(ge), ca()
          break
        case 5:
          ua(r)
          break
        case 4:
          Un()
          break
        case 13:
          $(H)
          break
        case 19:
          $(H)
          break
        case 10:
          sa(r.type._context)
          break
        case 22:
        case 23:
          Sa()
      }
      n = n.return
    }
  if (
    ((se = e),
    (q = e = Dt(e.current, null)),
    (ae = Ee = t),
    (te = 0),
    (Ur = null),
    (va = Ns = an = 0),
    (Se = wr = null),
    qt !== null)
  ) {
    for (t = 0; t < qt.length; t++)
      if (((n = qt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var i = r.next,
          s = n.pending
        if (s !== null) {
          var o = s.next
          ;(s.next = i), (r.next = o)
        }
        n.pending = r
      }
    qt = null
  }
  return e
}
function Mh (e, t) {
  do {
    var n = q
    try {
      if ((ia(), (ji.current = is), rs)) {
        for (var r = G.memoizedState; r !== null; ) {
          var i = r.queue
          i !== null && (i.pending = null), (r = r.next)
        }
        rs = !1
      }
      if (
        ((ln = 0),
        (ie = ee = G = null),
        (vr = !1),
        (Or = 0),
        (ya.current = null),
        n === null || n.return === null)
      ) {
        ;(te = 1), (Ur = t), (q = null)
        break
      }
      e: {
        var s = e,
          o = n.return,
          l = n,
          a = t
        if (
          ((t = ae),
          (l.flags |= 32768),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var u = a,
            c = l,
            f = c.tag
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null))
          }
          var g = Zu(o)
          if (g !== null) {
            ;(g.flags &= -257),
              Ju(g, o, l, s, t),
              g.mode & 1 && Xu(s, u, t),
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
              Xu(s, u, t), Pa()
              break e
            }
            a = Error(P(426))
          }
        } else if (W && l.mode & 1) {
          var T = Zu(o)
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256),
              Ju(T, o, l, s, t),
              na($n(a, l))
            break e
          }
        }
        ;(s = a = $n(a, l)),
          te !== 4 && (te = 2),
          wr === null ? (wr = [s]) : wr.push(s),
          (s = o)
        do {
          switch (s.tag) {
            case 3:
              ;(s.flags |= 65536), (t &= -t), (s.lanes |= t)
              var p = hh(s, a, t)
              Wu(s, p)
              break e
            case 1:
              l = a
              var h = s.type,
                m = s.stateNode
              if (
                !(s.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (m !== null &&
                    typeof m.componentDidCatch == 'function' &&
                    (Mt === null || !Mt.has(m))))
              ) {
                ;(s.flags |= 65536), (t &= -t), (s.lanes |= t)
                var w = ph(s, l, t)
                Wu(s, w)
                break e
              }
          }
          s = s.return
        } while (s !== null)
      }
      Lh(n)
    } catch (S) {
      ;(t = S), q === n && n !== null && (q = n = n.return)
      continue
    }
    break
  } while (!0)
}
function jh () {
  var e = ss.current
  return (ss.current = is), e === null ? is : e
}
function Pa () {
  ;(te === 0 || te === 3 || te === 2) && (te = 4),
    se === null || (!(an & 268435455) && !(Ns & 268435455)) || Pt(se, ae)
}
function as (e, t) {
  var n = F
  F |= 2
  var r = jh()
  ;(se !== e || ae !== t) && ((tt = null), tn(e, t))
  do
    try {
      Ay()
      break
    } catch (i) {
      Mh(e, i)
    }
  while (!0)
  if ((ia(), (F = n), (ss.current = r), q !== null)) throw Error(P(261))
  return (se = null), (ae = 0), te
}
function Ay () {
  for (; q !== null; ) Dh(q)
}
function Vy () {
  for (; q !== null && !eg(); ) Dh(q)
}
function Dh (e) {
  var t = _h(e.alternate, e, Ee)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? Lh(e) : (q = t),
    (ya.current = null)
}
function Lh (e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Py(n, t)), n !== null)) {
        ;(n.flags &= 32767), (q = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(te = 6), (q = null)
        return
      }
    } else if (((n = Sy(n, t, Ee)), n !== null)) {
      q = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      q = t
      return
    }
    q = t = e
  } while (t !== null)
  te === 0 && (te = 5)
}
function Yt (e, t, n) {
  var r = O,
    i = Oe.transition
  try {
    ;(Oe.transition = null), (O = 1), My(e, t, n, r)
  } finally {
    ;(Oe.transition = i), (O = r)
  }
  return null
}
function My (e, t, n, r) {
  do Fn()
  while (kt !== null)
  if (F & 6) throw Error(P(327))
  n = e.finishedWork
  var i = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var s = n.lanes | n.childLanes
  if (
    (cg(e, s),
    e === se && ((q = se = null), (ae = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      xi ||
      ((xi = !0),
      Fh(Wi, function () {
        return Fn(), null
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ;(s = Oe.transition), (Oe.transition = null)
    var o = O
    O = 1
    var l = F
    ;(F |= 4),
      (ya.current = null),
      ky(e, n),
      Nh(n, e),
      Zg(Yo),
      (Ki = !!Qo),
      (Yo = Qo = null),
      (e.current = n),
      Cy(n),
      tg(),
      (F = l),
      (O = o),
      (Oe.transition = s)
  } else e.current = n
  if (
    (xi && ((xi = !1), (kt = e), (ls = i)),
    (s = e.pendingLanes),
    s === 0 && (Mt = null),
    ig(n.stateNode),
    Ce(e, J()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest })
  if (os) throw ((os = !1), (e = pl), (pl = null), e)
  return (
    ls & 1 && e.tag !== 0 && Fn(),
    (s = e.pendingLanes),
    s & 1 ? (e === ml ? Sr++ : ((Sr = 0), (ml = e))) : (Sr = 0),
    Bt(),
    null
  )
}
function Fn () {
  if (kt !== null) {
    var e = hd(ls),
      t = Oe.transition,
      n = O
    try {
      if (((Oe.transition = null), (O = 16 > e ? 16 : e), kt === null))
        var r = !1
      else {
        if (((e = kt), (kt = null), (ls = 0), F & 6)) throw Error(P(331))
        var i = F
        for (F |= 4, A = e.current; A !== null; ) {
          var s = A,
            o = s.child
          if (A.flags & 16) {
            var l = s.deletions
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a]
                for (A = u; A !== null; ) {
                  var c = A
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xr(8, c, s)
                  }
                  var f = c.child
                  if (f !== null) (f.return = c), (A = f)
                  else
                    for (; A !== null; ) {
                      c = A
                      var d = c.sibling,
                        g = c.return
                      if ((kh(c), c === u)) {
                        A = null
                        break
                      }
                      if (d !== null) {
                        ;(d.return = g), (A = d)
                        break
                      }
                      A = g
                    }
                }
              }
              var y = s.alternate
              if (y !== null) {
                var v = y.child
                if (v !== null) {
                  y.child = null
                  do {
                    var T = v.sibling
                    ;(v.sibling = null), (v = T)
                  } while (v !== null)
                }
              }
              A = s
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (A = o)
          else
            e: for (; A !== null; ) {
              if (((s = A), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    xr(9, s, s.return)
                }
              var p = s.sibling
              if (p !== null) {
                ;(p.return = s.return), (A = p)
                break e
              }
              A = s.return
            }
        }
        var h = e.current
        for (A = h; A !== null; ) {
          o = A
          var m = o.child
          if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (A = m)
          else
            e: for (o = h; A !== null; ) {
              if (((l = A), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Es(9, l)
                  }
                } catch (S) {
                  Y(l, l.return, S)
                }
              if (l === o) {
                A = null
                break e
              }
              var w = l.sibling
              if (w !== null) {
                ;(w.return = l.return), (A = w)
                break e
              }
              A = l.return
            }
        }
        if (
          ((F = i), Bt(), Je && typeof Je.onPostCommitFiberRoot == 'function')
        )
          try {
            Je.onPostCommitFiberRoot(vs, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(O = n), (Oe.transition = t)
    }
  }
  return !1
}
function cc (e, t, n) {
  ;(t = $n(n, t)),
    (t = hh(e, t, 1)),
    (e = Vt(e, t, 1)),
    (t = ve()),
    e !== null && (Yr(e, 1, t), Ce(e, t))
}
function Y (e, t, n) {
  if (e.tag === 3) cc(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        cc(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Mt === null || !Mt.has(r)))
        ) {
          ;(e = $n(n, e)),
            (e = ph(t, e, 1)),
            (t = Vt(t, e, 1)),
            (e = ve()),
            t !== null && (Yr(t, 1, e), Ce(t, e))
          break
        }
      }
      t = t.return
    }
}
function jy (e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = ve()),
    (e.pingedLanes |= e.suspendedLanes & n),
    se === e &&
      (ae & n) === n &&
      (te === 4 || (te === 3 && (ae & 130023424) === ae && 500 > J() - xa)
        ? tn(e, 0)
        : (va |= n)),
    Ce(e, t)
}
function Rh (e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ui), (ui <<= 1), !(ui & 130023424) && (ui = 4194304))
      : (t = 1))
  var n = ve()
  ;(e = ht(e, t)), e !== null && (Yr(e, t, n), Ce(e, n))
}
function Dy (e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), Rh(e, n)
}
function Ly (e, t) {
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
      throw Error(P(314))
  }
  r !== null && r.delete(t), Rh(e, n)
}
var _h
_h = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Te.current) Pe = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Pe = !1), wy(e, t, n)
      Pe = !!(e.flags & 131072)
    }
  else (Pe = !1), W && t.flags & 1048576 && zd(t, qi, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      Li(e, t), (e = t.pendingProps)
      var i = On(t, ge.current)
      _n(t, n), (i = da(null, t, r, e, i, n))
      var s = ha()
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ke(r) ? ((s = !0), Zi(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            la(t),
            (i.updater = Cs),
            (t.stateNode = i),
            (i._reactInternals = t),
            rl(t, r, e, n),
            (t = ol(null, t, r, !0, s, n)))
          : ((t.tag = 0), W && s && ea(t), ye(null, t, i, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (Li(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = _y(r)),
          (e = $e(r, e)),
          i)
        ) {
          case 0:
            t = sl(null, t, r, e, n)
            break e
          case 1:
            t = ec(null, t, r, e, n)
            break e
          case 11:
            t = qu(null, t, r, e, n)
            break e
          case 14:
            t = bu(null, t, r, $e(r.type, e), n)
            break e
        }
        throw Error(P(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        sl(e, t, r, i, n)
      )
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        ec(e, t, r, i, n)
      )
    case 3:
      e: {
        if ((vh(t), e === null)) throw Error(P(387))
        ;(r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Kd(e, t),
          ts(t, r, null, n)
        var o = t.memoizedState
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            ;(i = $n(Error(P(423)), t)), (t = tc(e, t, r, n, i))
            break e
          } else if (r !== i) {
            ;(i = $n(Error(P(424)), t)), (t = tc(e, t, r, n, i))
            break e
          } else
            for (
              Ne = At(t.stateNode.containerInfo.firstChild),
                Ae = t,
                W = !0,
                He = null,
                n = Wd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((zn(), r === i)) {
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
        Gd(t),
        e === null && el(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Xo(r, i) ? (o = null) : s !== null && Xo(r, s) && (t.flags |= 32),
        yh(e, t),
        ye(e, t, o, n),
        t.child
      )
    case 6:
      return e === null && el(t), null
    case 13:
      return xh(e, t, n)
    case 4:
      return (
        aa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Bn(t, null, r, n)) : ye(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        qu(e, t, r, i, n)
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
          (s = t.memoizedProps),
          (o = i.value),
          B(bi, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (Qe(s.value, o)) {
            if (s.children === i.children && !Te.current) {
              t = pt(e, t, n)
              break e
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies
              if (l !== null) {
                o = s.child
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      ;(a = ot(-1, n & -n)), (a.tag = 2)
                      var u = s.updateQueue
                      if (u !== null) {
                        u = u.shared
                        var c = u.pending
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a)
                      }
                    }
                    ;(s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      tl(s.return, n, t),
                      (l.lanes |= n)
                    break
                  }
                  a = a.next
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(P(341))
                ;(o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  tl(o, n, t),
                  (o = s.sibling)
              } else o = s.child
              if (o !== null) o.return = s
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null
                    break
                  }
                  if (((s = o.sibling), s !== null)) {
                    ;(s.return = o.return), (o = s)
                    break
                  }
                  o = o.return
                }
              s = o
            }
        ye(e, t, i.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        _n(t, n),
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
        bu(e, t, r, i, n)
      )
    case 15:
      return mh(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        Li(e, t),
        (t.tag = 1),
        ke(r) ? ((e = !0), Zi(t)) : (e = !1),
        _n(t, n),
        dh(t, r, i),
        rl(t, r, i, n),
        ol(null, t, r, !0, e, n)
      )
    case 19:
      return wh(e, t, n)
    case 22:
      return gh(e, t, n)
  }
  throw Error(P(156, t.tag))
}
function Fh (e, t) {
  return ud(e, t)
}
function Ry (e, t, n, r) {
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
function Ie (e, t, n, r) {
  return new Ry(e, t, n, r)
}
function Ta (e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function _y (e) {
  if (typeof e == 'function') return Ta(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === $l)) return 11
    if (e === Wl) return 14
  }
  return 2
}
function Dt (e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = Ie(e.tag, t, e.key, e.mode)),
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
function Fi (e, t, n, r, i, s) {
  var o = 2
  if (((r = e), typeof e == 'function')) Ta(e) && (o = 1)
  else if (typeof e == 'string') o = 5
  else
    e: switch (e) {
      case mn:
        return nn(n.children, i, s, t)
      case Ul:
        ;(o = 8), (i |= 8)
        break
      case No:
        return (e = Ie(12, n, t, i | 2)), (e.elementType = No), (e.lanes = s), e
      case Ao:
        return (e = Ie(13, n, t, i)), (e.elementType = Ao), (e.lanes = s), e
      case Vo:
        return (e = Ie(19, n, t, i)), (e.elementType = Vo), (e.lanes = s), e
      case Gf:
        return As(n, i, s, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Hf:
              o = 10
              break e
            case Kf:
              o = 9
              break e
            case $l:
              o = 11
              break e
            case Wl:
              o = 14
              break e
            case xt:
              ;(o = 16), (r = null)
              break e
          }
        throw Error(P(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = Ie(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  )
}
function nn (e, t, n, r) {
  return (e = Ie(7, e, r, t)), (e.lanes = n), e
}
function As (e, t, n, r) {
  return (
    (e = Ie(22, e, r, t)),
    (e.elementType = Gf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function co (e, t, n) {
  return (e = Ie(6, e, null, t)), (e.lanes = n), e
}
function fo (e, t, n) {
  return (
    (t = Ie(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }),
    t
  )
}
function Fy (e, t, n, r, i) {
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
    (this.eventTimes = Ks(0)),
    (this.expirationTimes = Ks(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ks(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null)
}
function ka (e, t, n, r, i, s, o, l, a) {
  return (
    (e = new Fy(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Ie(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }),
    la(s),
    e
  )
}
function Iy (e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: pn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n
  }
}
function Ih (e) {
  if (!e) return Rt
  e = e._reactInternals
  e: {
    if (fn(e) !== e || e.tag !== 1) throw Error(P(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(P(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (ke(n)) return Id(e, n, t)
  }
  return t
}
function Oh (e, t, n, r, i, s, o, l, a) {
  return (
    (e = ka(n, r, !0, e, i, s, o, l, a)),
    (e.context = Ih(null)),
    (n = e.current),
    (r = ve()),
    (i = jt(n)),
    (s = ot(r, i)),
    (s.callback = t ?? null),
    Vt(n, s, i),
    (e.current.lanes = i),
    Yr(e, i, r),
    Ce(e, r),
    e
  )
}
function Vs (e, t, n, r) {
  var i = t.current,
    s = ve(),
    o = jt(i)
  return (
    (n = Ih(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ot(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Vt(i, t, o)),
    e !== null && (Ge(e, i, o, s), Mi(e, i, o)),
    o
  )
}
function us (e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function fc (e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Ca (e, t) {
  fc(e, t), (e = e.alternate) && fc(e, t)
}
function Oy () {
  return null
}
var zh =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function Ea (e) {
  this._internalRoot = e
}
Ms.prototype.render = Ea.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(P(409))
  Vs(e, t, null, null)
}
Ms.prototype.unmount = Ea.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    un(function () {
      Vs(null, e, null, null)
    }),
      (t[dt] = null)
  }
}
function Ms (e) {
  this._internalRoot = e
}
Ms.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = gd()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < St.length && t !== 0 && t < St[n].priority; n++);
    St.splice(n, 0, e), n === 0 && vd(e)
  }
}
function Na (e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function js (e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function dc () {}
function zy (e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var s = r
      r = function () {
        var u = us(o)
        s.call(u)
      }
    }
    var o = Oh(t, r, e, 0, null, !1, !1, '', dc)
    return (
      (e._reactRootContainer = o),
      (e[dt] = o.current),
      Lr(e.nodeType === 8 ? e.parentNode : e),
      un(),
      o
    )
  }
  for (; (i = e.lastChild); ) e.removeChild(i)
  if (typeof r == 'function') {
    var l = r
    r = function () {
      var u = us(a)
      l.call(u)
    }
  }
  var a = ka(e, 0, !1, null, null, !1, !1, '', dc)
  return (
    (e._reactRootContainer = a),
    (e[dt] = a.current),
    Lr(e.nodeType === 8 ? e.parentNode : e),
    un(function () {
      Vs(t, a, n, r)
    }),
    a
  )
}
function Ds (e, t, n, r, i) {
  var s = n._reactRootContainer
  if (s) {
    var o = s
    if (typeof i == 'function') {
      var l = i
      i = function () {
        var a = us(o)
        l.call(a)
      }
    }
    Vs(t, o, e, i)
  } else o = zy(n, t, e, i, r)
  return us(o)
}
pd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = ur(t.pendingLanes)
        n !== 0 &&
          (Gl(t, n | 1), Ce(t, J()), !(F & 6) && ((Wn = J() + 500), Bt()))
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
        Ca(e, 1)
  }
}
Ql = function (e) {
  if (e.tag === 13) {
    var t = ht(e, 134217728)
    if (t !== null) {
      var n = ve()
      Ge(t, e, 134217728, n)
    }
    Ca(e, 134217728)
  }
}
md = function (e) {
  if (e.tag === 13) {
    var t = jt(e),
      n = ht(e, t)
    if (n !== null) {
      var r = ve()
      Ge(n, e, t, r)
    }
    Ca(e, t)
  }
}
gd = function () {
  return O
}
yd = function (e, t) {
  var n = O
  try {
    return (O = e), t()
  } finally {
    O = n
  }
}
zo = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Do(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
            var i = Ps(r)
            if (!i) throw Error(P(90))
            Yf(r), Do(r, i)
          }
        }
      }
      break
    case 'textarea':
      Zf(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && jn(e, !!n.multiple, t, !1)
  }
}
rd = wa
id = un
var By = { usingClientEntryPoint: !1, Events: [Zr, xn, Ps, td, nd, wa] },
  sr = {
    findFiberByHostInstance: Jt,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom'
  },
  Uy = {
    bundleType: sr.bundleType,
    version: sr.version,
    rendererPackageName: sr.rendererPackageName,
    rendererConfig: sr.rendererConfig,
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
      return (e = ld(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: sr.findFiberByHostInstance || Oy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426'
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var wi = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!wi.isDisabled && wi.supportsFiber)
    try {
      ;(vs = wi.inject(Uy)), (Je = wi)
    } catch {}
}
je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = By
je.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Na(t)) throw Error(P(200))
  return Iy(e, t, null, n)
}
je.createRoot = function (e, t) {
  if (!Na(e)) throw Error(P(299))
  var n = !1,
    r = '',
    i = zh
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = ka(e, 1, !1, null, null, n, !1, r, i)),
    (e[dt] = t.current),
    Lr(e.nodeType === 8 ? e.parentNode : e),
    new Ea(t)
  )
}
je.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(P(188))
      : ((e = Object.keys(e).join(',')), Error(P(268, e)))
  return (e = ld(t)), (e = e === null ? null : e.stateNode), e
}
je.flushSync = function (e) {
  return un(e)
}
je.hydrate = function (e, t, n) {
  if (!js(t)) throw Error(P(200))
  return Ds(null, e, t, !0, n)
}
je.hydrateRoot = function (e, t, n) {
  if (!Na(e)) throw Error(P(405))
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = '',
    o = zh
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Oh(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[dt] = t.current),
    Lr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i)
  return new Ms(t)
}
je.render = function (e, t, n) {
  if (!js(t)) throw Error(P(200))
  return Ds(null, e, t, !1, n)
}
je.unmountComponentAtNode = function (e) {
  if (!js(e)) throw Error(P(40))
  return e._reactRootContainer
    ? (un(function () {
        Ds(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[dt] = null)
        })
      }),
      !0)
    : !1
}
je.unstable_batchedUpdates = wa
je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!js(n)) throw Error(P(200))
  if (e == null || e._reactInternals === void 0) throw Error(P(38))
  return Ds(e, t, n, !1, r)
}
je.version = '18.3.1-next-f1338f8080-20240426'
function Bh () {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bh)
    } catch (e) {
      console.error(e)
    }
}
Bh(), (Bf.exports = je)
var $y = Bf.exports,
  Uh,
  hc = $y
;(Uh = hc.createRoot), hc.hydrateRoot
const Wy = () =>
    x.jsx('nav', {
      className: 'bg-transparent',
      children: x.jsxs('div', {
        className: 'container p-6 mx-auto',
        children: [
          x.jsx('a', {
            className:
              'block text-2xl font-bold text-center text-white lg:text-3xl hover:text-gray-300 my-8',
            href: '#',
            children: x.jsx('p', {
              className: 'lg:text-5xl text-4xl',
              children: "Suraj's Portfolio"
            })
          }),
          x.jsxs('div', {
            className:
              'flex items-center justify-center mt-6 text-gray-300 capitalize',
            children: [
              x.jsx('a', {
                href: 'https://www.linkedin.com/in/suraj-jadhav-9b4597292/',
                target: '_blank',
                className:
                  'border-b-2 border-transparent hover:text-gray-50 hover:border-blue-500 mx-1.5 sm:mx-6',
                children: x.jsx('i', {
                  className: 'fa-brands fa-linkedin text-2xl lg:text-4xl'
                })
              }),
              x.jsx('a', {
                href: 'https://github.com/surajj04',
                target: '_blank',
                className:
                  'border-b-2 border-transparent hover:text-gray-50 hover:border-blue-500 mx-1.5 sm:mx-6',
                children: x.jsx('i', {
                  className: 'fa-brands fa-github text-2xl lg:text-4xl'
                })
              }),
              x.jsx('a', {
                href: '#',
                className:
                  'border-b-2 border-transparent hover:text-gray-50 hover:border-blue-500 mx-1.5 sm:mx-6',
                children: x.jsx('i', {
                  className: 'fa-brands fa-instagram text-2xl lg:text-4xl'
                })
              }),
              x.jsx('a', {
                href: '#',
                className:
                  'border-b-2 border-transparent hover:text-gray-50 hover:border-blue-500 mx-1.5 sm:mx-6',
                children: x.jsx('i', {
                  className: 'fa-brands fa-x-twitter text-2xl lg:text-4xl'
                })
              })
            ]
          })
        ]
      })
    }),
  Hy = '/assets/Suraj_Jadhav-BZfLyD31.pdf'
function Ky (e) {
  if (typeof Proxy > 'u') return e
  const t = new Map(),
    n = (...r) => e(...r)
  return new Proxy(n, {
    get: (r, i) => (i === 'create' ? e : (t.has(i) || t.set(i, e(i)), t.get(i)))
  })
}
function $r (e) {
  return e !== null && typeof e == 'object' && typeof e.start == 'function'
}
const vl = e => Array.isArray(e)
function $h (e, t) {
  if (!Array.isArray(t)) return !1
  const n = t.length
  if (n !== e.length) return !1
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1
  return !0
}
function Wr (e) {
  return typeof e == 'string' || Array.isArray(e)
}
function pc (e) {
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
    const [i, s] = pc(r)
    t = t(n !== void 0 ? n : e.custom, i, s)
  }
  if (
    (typeof t == 'string' && (t = e.variants && e.variants[t]),
    typeof t == 'function')
  ) {
    const [i, s] = pc(r)
    t = t(n !== void 0 ? n : e.custom, i, s)
  }
  return t
}
function Ls (e, t, n) {
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
  Ma = ['initial', ...Va],
  qr = [
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
  Ut = new Set(qr),
  lt = e => e * 1e3,
  at = e => e / 1e3,
  Gy = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
  Qy = e => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  }),
  Yy = { type: 'keyframes', duration: 0.8 },
  Xy = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Zy = (e, { keyframes: t }) =>
    t.length > 2 ? Yy : Ut.has(e) ? (e.startsWith('scale') ? Qy(t[1]) : Gy) : Xy
function ja (e, t) {
  return e ? e[t] || e.default || e : void 0
}
const Jy = { skipAnimations: !1, useManualTiming: !1 },
  qy = e => e !== null
function Rs (e, { repeat: t, repeatType: n = 'loop' }, r) {
  const i = e.filter(qy),
    s = t && n !== 'loop' && t % 2 === 1 ? 0 : i.length - 1
  return !s || r === void 0 ? i[s] : r
}
const me = e => e
function by (e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1
  const s = new WeakSet()
  let o = { delta: 0, timestamp: 0, isProcessing: !1 }
  function l (u) {
    s.has(u) && (a.schedule(u), e()), u(o)
  }
  const a = {
    schedule: (u, c = !1, f = !1) => {
      const g = f && r ? t : n
      return c && s.add(u), g.has(u) || g.add(u), u
    },
    cancel: u => {
      n.delete(u), s.delete(u)
    },
    process: u => {
      if (((o = u), r)) {
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
const Si = [
    'read',
    'resolveKeyframes',
    'update',
    'preRender',
    'render',
    'postRender'
  ],
  e0 = 40
function Wh (e, t) {
  let n = !1,
    r = !0
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = Si.reduce((p, h) => ((p[h] = by(s)), p), {}),
    {
      read: l,
      resolveKeyframes: a,
      update: u,
      preRender: c,
      render: f,
      postRender: d
    } = o,
    g = () => {
      const p = performance.now()
      ;(n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, e0), 1)),
        (i.timestamp = p),
        (i.isProcessing = !0),
        l.process(i),
        a.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        d.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(g))
    },
    y = () => {
      ;(n = !0), (r = !0), i.isProcessing || e(g)
    }
  return {
    schedule: Si.reduce((p, h) => {
      const m = o[h]
      return (p[h] = (w, S = !1, C = !1) => (n || y(), m.schedule(w, S, C))), p
    }, {}),
    cancel: p => {
      for (let h = 0; h < Si.length; h++) o[Si[h]].cancel(p)
    },
    state: i,
    steps: o
  }
}
const {
    schedule: z,
    cancel: _t,
    state: le,
    steps: ho
  } = Wh(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : me, !0),
  Hh = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  t0 = 1e-7,
  n0 = 12
function r0 (e, t, n, r, i) {
  let s,
    o,
    l = 0
  do (o = t + (n - t) / 2), (s = Hh(o, r, i) - e), s > 0 ? (n = o) : (t = o)
  while (Math.abs(s) > t0 && ++l < n0)
  return o
}
function br (e, t, n, r) {
  if (e === t && n === r) return me
  const i = s => r0(s, 0, 1, e, n)
  return s => (s === 0 || s === 1 ? s : Hh(i(s), t, r))
}
const Kh = e => t => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Gh = e => t => 1 - e(1 - t),
  Qh = br(0.33, 1.53, 0.69, 0.99),
  Da = Gh(Qh),
  Yh = Kh(Da),
  Xh = e =>
    (e *= 2) < 1 ? 0.5 * Da(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  La = e => 1 - Math.sin(Math.acos(e)),
  Zh = Gh(La),
  Jh = Kh(La),
  qh = e => /^0[^.\s]+$/u.test(e)
function i0 (e) {
  return typeof e == 'number'
    ? e === 0
    : e !== null
    ? e === 'none' || e === '0' || qh(e)
    : !0
}
let xl = me
const bh = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  ep = e => t => typeof t == 'string' && t.startsWith(e),
  tp = ep('--'),
  s0 = ep('var(--'),
  Ra = e => (s0(e) ? o0.test(e.split('/*')[0].trim()) : !1),
  o0 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  l0 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
function a0 (e) {
  const t = l0.exec(e)
  if (!t) return [,]
  const [, n, r, i] = t
  return [`--${n ?? r}`, i]
}
function np (e, t, n = 1) {
  const [r, i] = a0(e)
  if (!r) return
  const s = window.getComputedStyle(t).getPropertyValue(r)
  if (s) {
    const o = s.trim()
    return bh(o) ? parseFloat(o) : o
  }
  return Ra(i) ? np(i, t, n + 1) : i
}
const Ft = (e, t, n) => (n > t ? t : n < e ? e : n),
  Zn = {
    test: e => typeof e == 'number',
    parse: parseFloat,
    transform: e => e
  },
  Hr = { ...Zn, transform: e => Ft(0, 1, e) },
  Pi = { ...Zn, default: 1 },
  ei = e => ({
    test: t =>
      typeof t == 'string' && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
  }),
  vt = ei('deg'),
  be = ei('%'),
  V = ei('px'),
  u0 = ei('vh'),
  c0 = ei('vw'),
  mc = {
    ...be,
    parse: e => be.parse(e) / 100,
    transform: e => be.transform(e * 100)
  },
  f0 = new Set([
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
  gc = e => e === Zn || e === V,
  yc = (e, t) => parseFloat(e.split(', ')[t]),
  vc =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === 'none' || !r) return 0
      const i = r.match(/^matrix3d\((.+)\)$/u)
      if (i) return yc(i[1], t)
      {
        const s = r.match(/^matrix\((.+)\)$/u)
        return s ? yc(s[1], e) : 0
      }
    },
  d0 = new Set(['x', 'y', 'z']),
  h0 = qr.filter(e => !d0.has(e))
function p0 (e) {
  const t = []
  return (
    h0.forEach(n => {
      const r = e.getValue(n)
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith('scale') ? 1 : 0))
    }),
    t
  )
}
const Hn = {
  width: ({ x: e }, { paddingLeft: t = '0', paddingRight: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = '0', paddingBottom: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: vc(4, 13),
  y: vc(5, 14)
}
Hn.translateX = Hn.x
Hn.translateY = Hn.y
const rp = e => t => t.test(e),
  m0 = { test: e => e === 'auto', parse: e => e },
  ip = [Zn, V, be, vt, c0, u0, m0],
  xc = e => ip.find(rp(e)),
  rn = new Set()
let wl = !1,
  Sl = !1
function sp () {
  if (Sl) {
    const e = Array.from(rn).filter(r => r.needsMeasurement),
      t = new Set(e.map(r => r.element)),
      n = new Map()
    t.forEach(r => {
      const i = p0(r)
      i.length && (n.set(r, i), r.render())
    }),
      e.forEach(r => r.measureInitialState()),
      t.forEach(r => {
        r.render()
        const i = n.get(r)
        i &&
          i.forEach(([s, o]) => {
            var l
            ;(l = r.getValue(s)) === null || l === void 0 || l.set(o)
          })
      }),
      e.forEach(r => r.measureEndState()),
      e.forEach(r => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
      })
  }
  ;(Sl = !1), (wl = !1), rn.forEach(e => e.complete()), rn.clear()
}
function op () {
  rn.forEach(e => {
    e.readKeyframes(), e.needsMeasurement && (Sl = !0)
  })
}
function g0 () {
  op(), sp()
}
class _a {
  constructor (t, n, r, i, s, o = !1) {
    ;(this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o)
  }
  scheduleResolve () {
    ;(this.isScheduled = !0),
      this.isAsync
        ? (rn.add(this), wl || ((wl = !0), z.read(op), z.resolveKeyframes(sp)))
        : (this.readKeyframes(), this.complete())
  }
  readKeyframes () {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const o = i == null ? void 0 : i.get(),
            l = t[t.length - 1]
          if (o !== void 0) t[0] = o
          else if (r && n) {
            const a = r.readValue(n, l)
            a != null && (t[0] = a)
          }
          t[0] === void 0 && (t[0] = l), i && o === void 0 && i.set(t[0])
        } else t[s] = t[s - 1]
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
const Pr = e => Math.round(e * 1e5) / 1e5,
  Fa = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
function y0 (e) {
  return e == null
}
const v0 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Ia = (e, t) => n =>
    !!(
      (typeof n == 'string' && v0.test(n) && n.startsWith(e)) ||
      (t && !y0(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  lp = (e, t, n) => r => {
    if (typeof r != 'string') return r
    const [i, s, o, l] = r.match(Fa)
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: l !== void 0 ? parseFloat(l) : 1
    }
  },
  x0 = e => Ft(0, 255, e),
  po = { ...Zn, transform: e => Math.round(x0(e)) },
  en = {
    test: Ia('rgb', 'red'),
    parse: lp('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      'rgba(' +
      po.transform(e) +
      ', ' +
      po.transform(t) +
      ', ' +
      po.transform(n) +
      ', ' +
      Pr(Hr.transform(r)) +
      ')'
  }
function w0 (e) {
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
const Pl = { test: Ia('#'), parse: w0, transform: en.transform },
  En = {
    test: Ia('hsl', 'hue'),
    parse: lp('hue', 'saturation', 'lightness'),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      'hsla(' +
      Math.round(e) +
      ', ' +
      be.transform(Pr(t)) +
      ', ' +
      be.transform(Pr(n)) +
      ', ' +
      Pr(Hr.transform(r)) +
      ')'
  },
  de = {
    test: e => en.test(e) || Pl.test(e) || En.test(e),
    parse: e =>
      en.test(e) ? en.parse(e) : En.test(e) ? En.parse(e) : Pl.parse(e),
    transform: e =>
      typeof e == 'string'
        ? e
        : e.hasOwnProperty('red')
        ? en.transform(e)
        : En.transform(e)
  },
  S0 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
function P0 (e) {
  var t, n
  return (
    isNaN(e) &&
    typeof e == 'string' &&
    (((t = e.match(Fa)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(S0)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  )
}
const ap = 'number',
  up = 'color',
  T0 = 'var',
  k0 = 'var(',
  wc = '${}',
  C0 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu
function Kr (e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = []
  let s = 0
  const l = t
    .replace(
      C0,
      a => (
        de.test(a)
          ? (r.color.push(s), i.push(up), n.push(de.parse(a)))
          : a.startsWith(k0)
          ? (r.var.push(s), i.push(T0), n.push(a))
          : (r.number.push(s), i.push(ap), n.push(parseFloat(a))),
        ++s,
        wc
      )
    )
    .split(wc)
  return { values: n, split: l, indexes: r, types: i }
}
function cp (e) {
  return Kr(e).values
}
function fp (e) {
  const { split: t, types: n } = Kr(e),
    r = t.length
  return i => {
    let s = ''
    for (let o = 0; o < r; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const l = n[o]
        l === ap
          ? (s += Pr(i[o]))
          : l === up
          ? (s += de.transform(i[o]))
          : (s += i[o])
      }
    return s
  }
}
const E0 = e => (typeof e == 'number' ? 0 : e)
function N0 (e) {
  const t = cp(e)
  return fp(e)(t.map(E0))
}
const It = {
    test: P0,
    parse: cp,
    createTransformer: fp,
    getAnimatableNone: N0
  },
  A0 = new Set(['brightness', 'contrast', 'saturate', 'opacity'])
function V0 (e) {
  const [t, n] = e.slice(0, -1).split('(')
  if (t === 'drop-shadow') return e
  const [r] = n.match(Fa) || []
  if (!r) return e
  const i = n.replace(r, '')
  let s = A0.has(t) ? 1 : 0
  return r !== n && (s *= 100), t + '(' + s + i + ')'
}
const M0 = /\b([a-z-]*)\(.*?\)/gu,
  Tl = {
    ...It,
    getAnimatableNone: e => {
      const t = e.match(M0)
      return t ? t.map(V0).join(' ') : e
    }
  },
  j0 = {
    borderWidth: V,
    borderTopWidth: V,
    borderRightWidth: V,
    borderBottomWidth: V,
    borderLeftWidth: V,
    borderRadius: V,
    radius: V,
    borderTopLeftRadius: V,
    borderTopRightRadius: V,
    borderBottomRightRadius: V,
    borderBottomLeftRadius: V,
    width: V,
    maxWidth: V,
    height: V,
    maxHeight: V,
    top: V,
    right: V,
    bottom: V,
    left: V,
    padding: V,
    paddingTop: V,
    paddingRight: V,
    paddingBottom: V,
    paddingLeft: V,
    margin: V,
    marginTop: V,
    marginRight: V,
    marginBottom: V,
    marginLeft: V,
    backgroundPositionX: V,
    backgroundPositionY: V
  },
  D0 = {
    rotate: vt,
    rotateX: vt,
    rotateY: vt,
    rotateZ: vt,
    scale: Pi,
    scaleX: Pi,
    scaleY: Pi,
    scaleZ: Pi,
    skew: vt,
    skewX: vt,
    skewY: vt,
    distance: V,
    translateX: V,
    translateY: V,
    translateZ: V,
    x: V,
    y: V,
    z: V,
    perspective: V,
    transformPerspective: V,
    opacity: Hr,
    originX: mc,
    originY: mc,
    originZ: V
  },
  Sc = { ...Zn, transform: Math.round },
  Oa = {
    ...j0,
    ...D0,
    zIndex: Sc,
    size: V,
    fillOpacity: Hr,
    strokeOpacity: Hr,
    numOctaves: Sc
  },
  L0 = {
    ...Oa,
    color: de,
    backgroundColor: de,
    outlineColor: de,
    fill: de,
    stroke: de,
    borderColor: de,
    borderTopColor: de,
    borderRightColor: de,
    borderBottomColor: de,
    borderLeftColor: de,
    filter: Tl,
    WebkitFilter: Tl
  },
  za = e => L0[e]
function dp (e, t) {
  let n = za(e)
  return (
    n !== Tl && (n = It), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  )
}
const R0 = new Set(['auto', 'none', '0'])
function _0 (e, t, n) {
  let r = 0,
    i
  for (; r < e.length && !i; ) {
    const s = e[r]
    typeof s == 'string' && !R0.has(s) && Kr(s).values.length && (i = e[r]), r++
  }
  if (i && n) for (const s of t) e[s] = dp(n, i)
}
class hp extends _a {
  constructor (t, n, r, i, s) {
    super(t, n, r, i, s, !0)
  }
  readKeyframes () {
    const { unresolvedKeyframes: t, element: n, name: r } = this
    if (!n || !n.current) return
    super.readKeyframes()
    for (let a = 0; a < t.length; a++) {
      let u = t[a]
      if (typeof u == 'string' && ((u = u.trim()), Ra(u))) {
        const c = np(u, n.current)
        c !== void 0 && (t[a] = c),
          a === t.length - 1 && (this.finalKeyframe = u)
      }
    }
    if ((this.resolveNoneKeyframes(), !f0.has(r) || t.length !== 2)) return
    const [i, s] = t,
      o = xc(i),
      l = xc(s)
    if (o !== l)
      if (gc(o) && gc(l))
        for (let a = 0; a < t.length; a++) {
          const u = t[a]
          typeof u == 'string' && (t[a] = parseFloat(u))
        }
      else this.needsMeasurement = !0
  }
  resolveNoneKeyframes () {
    const { unresolvedKeyframes: t, name: n } = this,
      r = []
    for (let i = 0; i < t.length; i++) i0(t[i]) && r.push(i)
    r.length && _0(t, r, n)
  }
  measureInitialState () {
    const { element: t, unresolvedKeyframes: n, name: r } = this
    if (!t || !t.current) return
    r === 'height' && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Hn[r](
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
    const s = n.getValue(r)
    s && s.jump(this.measuredOrigin, !1)
    const o = i.length - 1,
      l = i[o]
    ;(i[o] = Hn[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([a, u]) => {
          n.getValue(a).set(u)
        }),
      this.resolveNoneKeyframes()
  }
}
function Ba (e) {
  return typeof e == 'function'
}
let Ii
function F0 () {
  Ii = void 0
}
const et = {
    now: () => (
      Ii === void 0 &&
        et.set(
          le.isProcessing || Jy.useManualTiming
            ? le.timestamp
            : performance.now()
        ),
      Ii
    ),
    set: e => {
      ;(Ii = e), queueMicrotask(F0)
    }
  },
  Pc = (e, t) =>
    t === 'zIndex'
      ? !1
      : !!(
          typeof e == 'number' ||
          Array.isArray(e) ||
          (typeof e == 'string' &&
            (It.test(e) || e === '0') &&
            !e.startsWith('url('))
        )
function I0 (e) {
  const t = e[0]
  if (e.length === 1) return !0
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0
}
function O0 (e, t, n, r) {
  const i = e[0]
  if (i === null) return !1
  if (t === 'display' || t === 'visibility') return !0
  const s = e[e.length - 1],
    o = Pc(i, t),
    l = Pc(s, t)
  return !o || !l ? !1 : I0(e) || ((n === 'spring' || Ba(n)) && r)
}
const z0 = 40
class pp {
  constructor ({
    autoplay: t = !0,
    delay: n = 0,
    type: r = 'keyframes',
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = 'loop',
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
        repeatDelay: s,
        repeatType: o,
        ...l
      }),
      this.updateFinishedPromise()
  }
  calcStartTime () {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > z0
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt
  }
  get resolved () {
    return !this._resolved && !this.hasAttemptedResolve && g0(), this._resolved
  }
  onKeyframesResolved (t, n) {
    ;(this.resolvedAt = et.now()), (this.hasAttemptedResolve = !0)
    const {
      name: r,
      type: i,
      velocity: s,
      delay: o,
      onComplete: l,
      onUpdate: a,
      isGenerator: u
    } = this.options
    if (!u && !O0(t, r, i, s))
      if (o) this.options.duration = 0
      else {
        a == null || a(Rs(t, this.options, n)),
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
function mp (e, t) {
  return t ? e * (1e3 / t) : 0
}
const B0 = 5
function gp (e, t, n) {
  const r = Math.max(t - B0, 0)
  return mp(n - e(r), t - r)
}
const mo = 0.001,
  U0 = 0.01,
  $0 = 10,
  W0 = 0.05,
  H0 = 1
function K0 ({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1
}) {
  let i,
    s,
    o = 1 - t
  ;(o = Ft(W0, H0, o)),
    (e = Ft(U0, $0, at(e))),
    o < 1
      ? ((i = u => {
          const c = u * o,
            f = c * e,
            d = c - n,
            g = kl(u, o),
            y = Math.exp(-f)
          return mo - (d / g) * y
        }),
        (s = u => {
          const f = u * o * e,
            d = f * n + n,
            g = Math.pow(o, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-f),
            v = kl(Math.pow(u, 2), o)
          return ((-i(u) + mo > 0 ? -1 : 1) * ((d - g) * y)) / v
        }))
      : ((i = u => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1
          return -mo + c * f
        }),
        (s = u => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e)
          return c * f
        }))
  const l = 5 / e,
    a = Q0(i, s, l)
  if (((e = lt(e)), isNaN(a)))
    return { stiffness: 100, damping: 10, duration: e }
  {
    const u = Math.pow(a, 2) * r
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e }
  }
}
const G0 = 12
function Q0 (e, t, n) {
  let r = n
  for (let i = 1; i < G0; i++) r = r - e(r) / t(r)
  return r
}
function kl (e, t) {
  return e * Math.sqrt(1 - t * t)
}
const Y0 = ['duration', 'bounce'],
  X0 = ['stiffness', 'damping', 'mass']
function Tc (e, t) {
  return t.some(n => e[n] !== void 0)
}
function Z0 (e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  }
  if (!Tc(e, X0) && Tc(e, Y0)) {
    const n = K0(e)
    ;(t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0)
  }
  return t
}
function yp ({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    s = e[e.length - 1],
    o = { done: !1, value: i },
    {
      stiffness: l,
      damping: a,
      mass: u,
      duration: c,
      velocity: f,
      isResolvedFromDuration: d
    } = Z0({ ...r, velocity: -at(r.velocity || 0) }),
    g = f || 0,
    y = a / (2 * Math.sqrt(l * u)),
    v = s - i,
    T = at(Math.sqrt(l / u)),
    p = Math.abs(v) < 5
  n || (n = p ? 0.01 : 2), t || (t = p ? 0.005 : 0.5)
  let h
  if (y < 1) {
    const m = kl(T, y)
    h = w => {
      const S = Math.exp(-y * T * w)
      return (
        s - S * (((g + y * T * v) / m) * Math.sin(m * w) + v * Math.cos(m * w))
      )
    }
  } else if (y === 1) h = m => s - Math.exp(-T * m) * (v + (g + T * v) * m)
  else {
    const m = T * Math.sqrt(y * y - 1)
    h = w => {
      const S = Math.exp(-y * T * w),
        C = Math.min(m * w, 300)
      return (
        s - (S * ((g + y * T * v) * Math.sinh(C) + m * v * Math.cosh(C))) / m
      )
    }
  }
  return {
    calculatedDuration: (d && c) || null,
    next: m => {
      const w = h(m)
      if (d) o.done = m >= c
      else {
        let S = 0
        y < 1 && (S = m === 0 ? lt(g) : gp(h, m, w))
        const C = Math.abs(S) <= n,
          N = Math.abs(s - w) <= t
        o.done = C && N
      }
      return (o.value = o.done ? s : w), o
    }
  }
}
function kc ({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: l,
  max: a,
  restDelta: u = 0.5,
  restSpeed: c
}) {
  const f = e[0],
    d = { done: !1, value: f },
    g = k => (l !== void 0 && k < l) || (a !== void 0 && k > a),
    y = k =>
      l === void 0
        ? a
        : a === void 0 || Math.abs(l - k) < Math.abs(a - k)
        ? l
        : a
  let v = n * t
  const T = f + v,
    p = o === void 0 ? T : o(T)
  p !== T && (v = p - f)
  const h = k => -v * Math.exp(-k / r),
    m = k => p + h(k),
    w = k => {
      const _ = h(k),
        M = m(k)
      ;(d.done = Math.abs(_) <= u), (d.value = d.done ? p : M)
    }
  let S, C
  const N = k => {
    g(d.value) &&
      ((S = k),
      (C = yp({
        keyframes: [d.value, y(d.value)],
        velocity: gp(m, k, d.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: c
      })))
  }
  return (
    N(0),
    {
      calculatedDuration: null,
      next: k => {
        let _ = !1
        return (
          !C && S === void 0 && ((_ = !0), w(k), N(k)),
          S !== void 0 && k >= S ? C.next(k - S) : (!_ && w(k), d)
        )
      }
    }
  )
}
const J0 = br(0.42, 0, 1, 1),
  q0 = br(0, 0, 0.58, 1),
  vp = br(0.42, 0, 0.58, 1),
  b0 = e => Array.isArray(e) && typeof e[0] != 'number',
  Ua = e => Array.isArray(e) && typeof e[0] == 'number',
  Cc = {
    linear: me,
    easeIn: J0,
    easeInOut: vp,
    easeOut: q0,
    circIn: La,
    circInOut: Jh,
    circOut: Zh,
    backIn: Da,
    backInOut: Yh,
    backOut: Qh,
    anticipate: Xh
  },
  Ec = e => {
    if (Ua(e)) {
      xl(e.length === 4)
      const [t, n, r, i] = e
      return br(t, n, r, i)
    } else if (typeof e == 'string') return xl(Cc[e] !== void 0), Cc[e]
    return e
  },
  ev = (e, t) => n => t(e(n)),
  ut = (...e) => e.reduce(ev),
  Kn = (e, t, n) => {
    const r = t - e
    return r === 0 ? 1 : (n - e) / r
  },
  K = (e, t, n) => e + (t - e) * n
function go (e, t, n) {
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
function tv ({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ;(e /= 360), (t /= 100), (n /= 100)
  let i = 0,
    s = 0,
    o = 0
  if (!t) i = s = o = n
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l
    ;(i = go(a, l, e + 1 / 3)), (s = go(a, l, e)), (o = go(a, l, e - 1 / 3))
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r
  }
}
function cs (e, t) {
  return n => (n > 0 ? t : e)
}
const yo = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r
    return i < 0 ? 0 : Math.sqrt(i)
  },
  nv = [Pl, en, En],
  rv = e => nv.find(t => t.test(e))
function Nc (e) {
  const t = rv(e)
  if (!t) return !1
  let n = t.parse(e)
  return t === En && (n = tv(n)), n
}
const Ac = (e, t) => {
    const n = Nc(e),
      r = Nc(t)
    if (!n || !r) return cs(e, t)
    const i = { ...n }
    return s => (
      (i.red = yo(n.red, r.red, s)),
      (i.green = yo(n.green, r.green, s)),
      (i.blue = yo(n.blue, r.blue, s)),
      (i.alpha = K(n.alpha, r.alpha, s)),
      en.transform(i)
    )
  },
  Cl = new Set(['none', 'hidden'])
function iv (e, t) {
  return Cl.has(e) ? n => (n <= 0 ? e : t) : n => (n >= 1 ? t : e)
}
function sv (e, t) {
  return n => K(e, t, n)
}
function $a (e) {
  return typeof e == 'number'
    ? sv
    : typeof e == 'string'
    ? Ra(e)
      ? cs
      : de.test(e)
      ? Ac
      : av
    : Array.isArray(e)
    ? xp
    : typeof e == 'object'
    ? de.test(e)
      ? Ac
      : ov
    : cs
}
function xp (e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => $a(s)(s, t[o]))
  return s => {
    for (let o = 0; o < r; o++) n[o] = i[o](s)
    return n
  }
}
function ov (e, t) {
  const n = { ...e, ...t },
    r = {}
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = $a(e[i])(e[i], t[i]))
  return i => {
    for (const s in r) n[s] = r[s](i)
    return n
  }
}
function lv (e, t) {
  var n
  const r = [],
    i = { color: 0, var: 0, number: 0 }
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s],
      l = e.indexes[o][i[o]],
      a = (n = e.values[l]) !== null && n !== void 0 ? n : 0
    ;(r[s] = a), i[o]++
  }
  return r
}
const av = (e, t) => {
  const n = It.createTransformer(t),
    r = Kr(e),
    i = Kr(t)
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Cl.has(e) && !i.values.length) || (Cl.has(t) && !r.values.length)
      ? iv(e, t)
      : ut(xp(lv(r, i), i.values), n)
    : cs(e, t)
}
function wp (e, t, n) {
  return typeof e == 'number' && typeof t == 'number' && typeof n == 'number'
    ? K(e, t, n)
    : $a(e)(e, t)
}
function uv (e, t, n) {
  const r = [],
    i = n || wp,
    s = e.length - 1
  for (let o = 0; o < s; o++) {
    let l = i(e[o], e[o + 1])
    if (t) {
      const a = Array.isArray(t) ? t[o] || me : t
      l = ut(a, l)
    }
    r.push(l)
  }
  return r
}
function cv (e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length
  if ((xl(s === t.length), s === 1)) return () => t[0]
  if (s === 2 && e[0] === e[1]) return () => t[1]
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()))
  const o = uv(t, r, i),
    l = o.length,
    a = u => {
      let c = 0
      if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = Kn(e[c], e[c + 1], u)
      return o[c](f)
    }
  return n ? u => a(Ft(e[0], e[s - 1], u)) : a
}
function fv (e, t) {
  const n = e[e.length - 1]
  for (let r = 1; r <= t; r++) {
    const i = Kn(0, t, r)
    e.push(K(n, 1, i))
  }
}
function dv (e) {
  const t = [0]
  return fv(t, e.length - 1), t
}
function hv (e, t) {
  return e.map(n => n * t)
}
function pv (e, t) {
  return e.map(() => t || vp).splice(0, e.length - 1)
}
function fs ({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = 'easeInOut'
}) {
  const i = b0(r) ? r.map(Ec) : Ec(r),
    s = { done: !1, value: t[0] },
    o = hv(n && n.length === t.length ? n : dv(t), e),
    l = cv(o, t, { ease: Array.isArray(i) ? i : pv(t, i) })
  return {
    calculatedDuration: e,
    next: a => ((s.value = l(a)), (s.done = a >= e), s)
  }
}
const Vc = 2e4
function mv (e) {
  let t = 0
  const n = 50
  let r = e.next(t)
  for (; !r.done && t < Vc; ) (t += n), (r = e.next(t))
  return t >= Vc ? 1 / 0 : t
}
const gv = e => {
    const t = ({ timestamp: n }) => e(n)
    return {
      start: () => z.update(t, !0),
      stop: () => _t(t),
      now: () => (le.isProcessing ? le.timestamp : et.now())
    }
  },
  yv = { decay: kc, inertia: kc, tween: fs, keyframes: fs, spring: yp },
  vv = e => e / 100
class Wa extends pp {
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
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options,
      o = (i == null ? void 0 : i.KeyframeResolver) || _a,
      l = (a, u) => this.onKeyframesResolved(a, u)
    ;(this.resolver = new o(s, l, n, r, i)), this.resolver.scheduleResolve()
  }
  initPlayback (t) {
    const {
        type: n = 'keyframes',
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: s,
        velocity: o = 0
      } = this.options,
      l = Ba(n) ? n : yv[n] || fs
    let a, u
    l !== fs &&
      typeof t[0] != 'number' &&
      ((a = ut(vv, wp(t[0], t[1]))), (t = [0, 100]))
    const c = l({ ...this.options, keyframes: t })
    s === 'mirror' &&
      (u = l({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      c.calculatedDuration === null && (c.calculatedDuration = mv(c))
    const { calculatedDuration: f } = c,
      d = f + i,
      g = d * (r + 1) - i
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: a,
      calculatedDuration: f,
      resolvedDuration: d,
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
      const { keyframes: k } = this.options
      return { done: !0, value: k[k.length - 1] }
    }
    const {
      finalKeyframe: i,
      generator: s,
      mirroredGenerator: o,
      mapPercentToKeyframes: l,
      keyframes: a,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: f
    } = r
    if (this.startTime === null) return s.next(0)
    const {
      delay: d,
      repeat: g,
      repeatType: y,
      repeatDelay: v,
      onUpdate: T
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
    const p = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? p < 0 : p > c
    ;(this.currentTime = Math.max(p, 0)),
      this.state === 'finished' &&
        this.holdTime === null &&
        (this.currentTime = c)
    let m = this.currentTime,
      w = s
    if (g) {
      const k = Math.min(this.currentTime, c) / f
      let _ = Math.floor(k),
        M = k % 1
      !M && k >= 1 && (M = 1),
        M === 1 && _--,
        (_ = Math.min(_, g + 1)),
        !!(_ % 2) &&
          (y === 'reverse'
            ? ((M = 1 - M), v && (M -= v / f))
            : y === 'mirror' && (w = o)),
        (m = Ft(0, 1, M) * f)
    }
    const S = h ? { done: !1, value: a[0] } : w.next(m)
    l && (S.value = l(S.value))
    let { done: C } = S
    !h &&
      u !== null &&
      (C = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0)
    const N =
      this.holdTime === null &&
      (this.state === 'finished' || (this.state === 'running' && C))
    return (
      N && i !== void 0 && (S.value = Rs(a, this.options, i)),
      T && T(S.value),
      N && this.finish(),
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
    const { driver: t = gv, onPlay: n, startTime: r } = this.options
    this.driver || (this.driver = t(s => this.tick(s))), n && n()
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
const Sp = new Set(['opacity', 'clipPath', 'filter', 'transform']),
  xv = 10,
  wv = (e, t) => {
    let n = ''
    const r = Math.max(Math.round(t / xv), 2)
    for (let i = 0; i < r; i++) n += e(Kn(0, r - 1, i)) + ', '
    return `linear(${n.substring(0, n.length - 2)})`
  }
function Ha (e) {
  let t
  return () => (t === void 0 && (t = e()), t)
}
const Sv = { linearEasing: void 0 }
function Pv (e, t) {
  const n = Ha(e)
  return () => {
    var r
    return (r = Sv[t]) !== null && r !== void 0 ? r : n()
  }
}
const ds = Pv(() => {
  try {
    document
      .createElement('div')
      .animate({ opacity: 0 }, { easing: 'linear(0, 1)' })
  } catch {
    return !1
  }
  return !0
}, 'linearEasing')
function Pp (e) {
  return !!(
    (typeof e == 'function' && ds()) ||
    !e ||
    (typeof e == 'string' && (e in El || ds())) ||
    Ua(e) ||
    (Array.isArray(e) && e.every(Pp))
  )
}
const fr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  El = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: fr([0, 0.65, 0.55, 1]),
    circOut: fr([0.55, 0, 1, 0.45]),
    backIn: fr([0.31, 0.01, 0.66, -0.59]),
    backOut: fr([0.33, 1.53, 0.69, 0.99])
  }
function Tp (e, t) {
  if (e)
    return typeof e == 'function' && ds()
      ? wv(e, t)
      : Ua(e)
      ? fr(e)
      : Array.isArray(e)
      ? e.map(n => Tp(n, t) || El.easeOut)
      : El[e]
}
function Tv (
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = 'loop',
    ease: l,
    times: a
  } = {}
) {
  const u = { [t]: n }
  a && (u.offset = a)
  const c = Tp(l, i)
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? 'linear' : c,
      fill: 'both',
      iterations: s + 1,
      direction: o === 'reverse' ? 'alternate' : 'normal'
    })
  )
}
function Mc (e, t) {
  ;(e.timeline = t), (e.onfinish = null)
}
const kv = Ha(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
  hs = 10,
  Cv = 2e4
function Ev (e) {
  return Ba(e.type) || e.type === 'spring' || !Pp(e.ease)
}
function Nv (e, t) {
  const n = new Wa({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 })
  let r = { done: !1, value: e[0] }
  const i = []
  let s = 0
  for (; !r.done && s < Cv; ) (r = n.sample(s)), i.push(r.value), (s += hs)
  return { times: void 0, keyframes: i, duration: s - hs, ease: 'linear' }
}
const kp = { anticipate: Xh, backInOut: Yh, circInOut: Jh }
function Av (e) {
  return e in kp
}
class jc extends pp {
  constructor (t) {
    super(t)
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options
    ;(this.resolver = new hp(
      s,
      (o, l) => this.onKeyframesResolved(o, l),
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
      times: s,
      ease: o,
      type: l,
      motionValue: a,
      name: u,
      startTime: c
    } = this.options
    if (!(!((r = a.owner) === null || r === void 0) && r.current)) return !1
    if (
      (typeof o == 'string' && ds() && Av(o) && (o = kp[o]), Ev(this.options))
    ) {
      const {
          onComplete: d,
          onUpdate: g,
          motionValue: y,
          element: v,
          ...T
        } = this.options,
        p = Nv(t, T)
      ;(t = p.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = p.duration),
        (s = p.times),
        (o = p.ease),
        (l = 'keyframes')
    }
    const f = Tv(a.owner.current, u, t, {
      ...this.options,
      duration: i,
      times: s,
      ease: o
    })
    return (
      (f.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Mc(f, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (f.onfinish = () => {
            const { onComplete: d } = this.options
            a.set(Rs(t, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise()
          }),
      { animation: f, duration: i, times: s, type: l, ease: o, keyframes: t }
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
      Mc(r, t)
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
      type: s,
      ease: o,
      times: l
    } = t
    if (n.playState === 'idle' || n.playState === 'finished') return
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: f,
          element: d,
          ...g
        } = this.options,
        y = new Wa({
          ...g,
          keyframes: r,
          duration: i,
          type: s,
          ease: o,
          times: l,
          isGenerator: !0
        }),
        v = lt(this.time)
      u.setWithVelocity(y.sample(v - hs).value, y.sample(v).value, hs)
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
      repeatType: s,
      damping: o,
      type: l
    } = t
    return (
      kv() &&
      r &&
      Sp.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      s !== 'mirror' &&
      o !== 0 &&
      l !== 'inertia'
    )
  }
}
const Vv = Ha(() => window.ScrollTimeline !== void 0)
class Mv {
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
      Vv() && i.attachTimeline ? i.attachTimeline(t) : n(i)
    )
    return () => {
      r.forEach((i, s) => {
        i && i(), this.animations[s].stop()
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
function jv ({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: l,
  from: a,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length
}
const Ka =
    (e, t, n, r = {}, i, s) =>
    o => {
      const l = ja(r, e) || {},
        a = l.delay || r.delay || 0
      let { elapsed: u = 0 } = r
      u = u - lt(a)
      let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: 'easeOut',
        velocity: t.getVelocity(),
        ...l,
        delay: -u,
        onUpdate: d => {
          t.set(d), l.onUpdate && l.onUpdate(d)
        },
        onComplete: () => {
          o(), l.onComplete && l.onComplete()
        },
        name: e,
        motionValue: t,
        element: s ? void 0 : i
      }
      jv(l) || (c = { ...c, ...Zy(e, c) }),
        c.duration && (c.duration = lt(c.duration)),
        c.repeatDelay && (c.repeatDelay = lt(c.repeatDelay)),
        c.from !== void 0 && (c.keyframes[0] = c.from)
      let f = !1
      if (
        ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
          ((c.duration = 0), c.delay === 0 && (f = !0)),
        f && !s && t.get() !== void 0)
      ) {
        const d = Rs(c.keyframes, l)
        if (d !== void 0)
          return (
            z.update(() => {
              c.onUpdate(d), c.onComplete()
            }),
            new Mv([])
          )
      }
      return !s && jc.supports(c) ? new jc(c) : new Wa(c)
    },
  Dv = e => !!(e && typeof e == 'object' && e.mix && e.toValue),
  Lv = e => (vl(e) ? e[e.length - 1] || 0 : e)
function Ga (e, t) {
  e.indexOf(t) === -1 && e.push(t)
}
function Qa (e, t) {
  const n = e.indexOf(t)
  n > -1 && e.splice(n, 1)
}
class Ya {
  constructor () {
    this.subscriptions = []
  }
  add (t) {
    return Ga(this.subscriptions, t), () => Qa(this.subscriptions, t)
  }
  notify (t, n, r) {
    const i = this.subscriptions.length
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r)
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s]
          o && o(t, n, r)
        }
  }
  getSize () {
    return this.subscriptions.length
  }
  clear () {
    this.subscriptions.length = 0
  }
}
const Dc = 30,
  Rv = e => !isNaN(parseFloat(e))
class _v {
  constructor (t, n = {}) {
    ;(this.version = '11.11.3'),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const s = et.now()
        this.updatedAt !== s && this.setPrevFrameValue(),
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
        (this.canTrackVelocity = Rv(this.current))
  }
  setPrevFrameValue (t = this.current) {
    ;(this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt)
  }
  onChange (t) {
    return this.on('change', t)
  }
  on (t, n) {
    this.events[t] || (this.events[t] = new Ya())
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
      t - this.updatedAt > Dc
    )
      return 0
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Dc)
    return mp(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
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
function Gr (e, t) {
  return new _v(e, t)
}
function Fv (e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Gr(n))
}
function Iv (e, t) {
  const n = Ls(e, t)
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {}
  s = { ...s, ...r }
  for (const o in s) {
    const l = Lv(s[o])
    Fv(e, o, l)
  }
}
const _s = e => e.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
  Ov = 'framerAppearId',
  Cp = 'data-' + _s(Ov)
function Ep (e) {
  return e.props[Cp]
}
const pe = e => !!(e && e.getVelocity)
function zv (e) {
  return !!(pe(e) && e.add)
}
function Np (e) {
  if (Ut.has(e)) return 'transform'
  if (Sp.has(e)) return _s(e)
}
function Nl (e, t) {
  var n
  if (!e.applyWillChange) return
  const r = e.getValue('willChange')
  if (zv(r)) return r.add(t)
  !(!((n = e.props.style) === null || n === void 0) && n.willChange) &&
    Np(t) &&
    e.setStaticValue('willChange', 'transform')
}
function Bv ({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0
  return (t[n] = !1), r
}
function Ap (e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s
  let { transition: o = e.getDefaultTransition(), transitionEnd: l, ...a } = t
  r && (o = r)
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i]
  for (const f in a) {
    const d = e.getValue(
        f,
        (s = e.latestValues[f]) !== null && s !== void 0 ? s : null
      ),
      g = a[f]
    if (g === void 0 || (c && Bv(c, f))) continue
    const y = { delay: n, ...ja(o || {}, f) }
    let v = !1
    if (window.MotionHandoffAnimation) {
      const p = Ep(e)
      if (p) {
        const h = window.MotionHandoffAnimation(p, f, z)
        h !== null && ((y.startTime = h), (v = !0))
      }
    }
    Nl(e, f),
      d.start(
        Ka(f, d, g, e.shouldReduceMotion && Ut.has(f) ? { type: !1 } : y, e, v)
      )
    const T = d.animation
    T && u.push(T)
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
  const i = Ls(
    e,
    t,
    n.type === 'exit'
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  )
  let { transition: s = e.getDefaultTransition() || {} } = i || {}
  n.transitionOverride && (s = n.transitionOverride)
  const o = i ? () => Promise.all(Ap(e, i, n)) : () => Promise.resolve(),
    l =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: f,
              staggerDirection: d
            } = s
            return Uv(e, t, c + u, f, d, n)
          }
        : () => Promise.resolve(),
    { when: a } = s
  if (a) {
    const [u, c] = a === 'beforeChildren' ? [o, l] : [l, o]
    return u().then(() => c())
  } else return Promise.all([o(), l(n.delay)])
}
function Uv (e, t, n = 0, r = 0, i = 1, s) {
  const o = [],
    l = (e.variantChildren.size - 1) * r,
    a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r
  return (
    Array.from(e.variantChildren)
      .sort($v)
      .forEach((u, c) => {
        u.notify('AnimationStart', t),
          o.push(
            Al(u, t, { ...s, delay: n + a(c) }).then(() =>
              u.notify('AnimationComplete', t)
            )
          )
      }),
    Promise.all(o)
  )
}
function $v (e, t) {
  return e.sortNodePosition(t)
}
function Wv (e, t, n = {}) {
  e.notify('AnimationStart', t)
  let r
  if (Array.isArray(t)) {
    const i = t.map(s => Al(e, s, n))
    r = Promise.all(i)
  } else if (typeof t == 'string') r = Al(e, t, n)
  else {
    const i = typeof t == 'function' ? Ls(e, t, n.custom) : t
    r = Promise.all(Ap(e, i, n))
  }
  return r.then(() => {
    e.notify('AnimationComplete', t)
  })
}
const Hv = Ma.length
function Vp (e) {
  if (!e) return
  if (!e.isControllingVariants) {
    const n = e.parent ? Vp(e.parent) || {} : {}
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n
  }
  const t = {}
  for (let n = 0; n < Hv; n++) {
    const r = Ma[n],
      i = e.props[r]
    ;(Wr(i) || i === !1) && (t[r] = i)
  }
  return t
}
const Kv = [...Va].reverse(),
  Gv = Va.length
function Qv (e) {
  return t => Promise.all(t.map(({ animation: n, options: r }) => Wv(e, n, r)))
}
function Yv (e) {
  let t = Qv(e),
    n = Lc(),
    r = !0
  const i = a => (u, c) => {
    var f
    const d = Ls(
      e,
      c,
      a === 'exit'
        ? (f = e.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0
    )
    if (d) {
      const { transition: g, transitionEnd: y, ...v } = d
      u = { ...u, ...v, ...y }
    }
    return u
  }
  function s (a) {
    t = a(e)
  }
  function o (a) {
    const { props: u } = e,
      c = Vp(e.parent) || {},
      f = [],
      d = new Set()
    let g = {},
      y = 1 / 0
    for (let T = 0; T < Gv; T++) {
      const p = Kv[T],
        h = n[p],
        m = u[p] !== void 0 ? u[p] : c[p],
        w = Wr(m),
        S = p === a ? h.isActive : null
      S === !1 && (y = T)
      let C = m === c[p] && m !== u[p] && w
      if (
        (C && r && e.manuallyAnimateOnMount && (C = !1),
        (h.protectedKeys = { ...g }),
        (!h.isActive && S === null) ||
          (!m && !h.prevProp) ||
          $r(m) ||
          typeof m == 'boolean')
      )
        continue
      const N = Xv(h.prevProp, m)
      let k = N || (p === a && h.isActive && !C && w) || (T > y && w),
        _ = !1
      const M = Array.isArray(m) ? m : [m]
      let ne = M.reduce(i(p), {})
      S === !1 && (ne = {})
      const { prevResolvedValues: gt = {} } = h,
        Wt = { ...gt, ...ne },
        Jn = b => {
          ;(k = !0),
            d.has(b) && ((_ = !0), d.delete(b)),
            (h.needsAnimating[b] = !0)
          const E = e.getValue(b)
          E && (E.liveStyle = !1)
        }
      for (const b in Wt) {
        const E = ne[b],
          j = gt[b]
        if (g.hasOwnProperty(b)) continue
        let L = !1
        vl(E) && vl(j) ? (L = !$h(E, j)) : (L = E !== j),
          L
            ? E != null
              ? Jn(b)
              : d.add(b)
            : E !== void 0 && d.has(b)
            ? Jn(b)
            : (h.protectedKeys[b] = !0)
      }
      ;(h.prevProp = m),
        (h.prevResolvedValues = ne),
        h.isActive && (g = { ...g, ...ne }),
        r && e.blockInitialAnimation && (k = !1),
        k &&
          (!(C && N) || _) &&
          f.push(...M.map(b => ({ animation: b, options: { type: p } })))
    }
    if (d.size) {
      const T = {}
      d.forEach(p => {
        const h = e.getBaseTarget(p),
          m = e.getValue(p)
        m && (m.liveStyle = !0), (T[p] = h ?? null)
      }),
        f.push({ animation: T })
    }
    let v = !!f.length
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (v = !1),
      (r = !1),
      v ? t(f) : Promise.resolve()
    )
  }
  function l (a, u) {
    var c
    if (n[a].isActive === u) return Promise.resolve()
    ;(c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach(d => {
        var g
        return (g = d.animationState) === null || g === void 0
          ? void 0
          : g.setActive(a, u)
      }),
      (n[a].isActive = u)
    const f = o(a)
    for (const d in n) n[d].protectedKeys = {}
    return f
  }
  return {
    animateChanges: o,
    setActive: l,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      ;(n = Lc()), (r = !0)
    }
  }
}
function Xv (e, t) {
  return typeof t == 'string' ? t !== e : Array.isArray(t) ? !$h(t, e) : !1
}
function Gt (e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  }
}
function Lc () {
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
    $r(t) && (this.unmountControls = t.subscribe(this.node))
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
const bv = { animation: { Feature: Zv }, exit: { Feature: qv } },
  Mp = e =>
    e.pointerType === 'mouse'
      ? typeof e.button != 'number' || e.button <= 0
      : e.isPrimary !== !1
function Fs (e, t = 'page') {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } }
}
const e1 = e => t => Mp(t) && e(t, Fs(t))
function st (e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}
function ct (e, t, n, r) {
  return st(e, t, e1(n), r)
}
const Rc = (e, t) => Math.abs(e - t)
function t1 (e, t) {
  const n = Rc(e.x, t.x),
    r = Rc(e.y, t.y)
  return Math.sqrt(n ** 2 + r ** 2)
}
class jp {
  constructor (
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return
        const f = xo(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          g = t1(f.offset, { x: 0, y: 0 }) >= 3
        if (!d && !g) return
        const { point: y } = f,
          { timestamp: v } = le
        this.history.push({ ...y, timestamp: v })
        const { onStart: T, onMove: p } = this.handlers
        d ||
          (T && T(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, f)
      }),
      (this.handlePointerMove = (f, d) => {
        ;(this.lastMoveEvent = f),
          (this.lastMoveEventInfo = vo(d, this.transformPagePoint)),
          z.update(this.updatePoint, !0)
      }),
      (this.handlePointerUp = (f, d) => {
        this.end()
        const { onEnd: g, onSessionEnd: y, resumeAnimation: v } = this.handlers
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return
        const T = xo(
          f.type === 'pointercancel'
            ? this.lastMoveEventInfo
            : vo(d, this.transformPagePoint),
          this.history
        )
        this.startEvent && g && g(f, T), y && y(f, T)
      }),
      !Mp(t))
    )
      return
    ;(this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window)
    const o = Fs(t),
      l = vo(o, this.transformPagePoint),
      { point: a } = l,
      { timestamp: u } = le
    this.history = [{ ...a, timestamp: u }]
    const { onSessionStart: c } = n
    c && c(t, xo(l, this.history)),
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
function vo (e, t) {
  return t ? { point: t(e.point) } : e
}
function _c (e, t) {
  return { x: e.x - t.x, y: e.y - t.y }
}
function xo ({ point: e }, t) {
  return {
    point: e,
    delta: _c(e, Dp(t)),
    offset: _c(e, n1(t)),
    velocity: r1(t, 0.1)
  }
}
function n1 (e) {
  return e[0]
}
function Dp (e) {
  return e[e.length - 1]
}
function r1 (e, t) {
  if (e.length < 2) return { x: 0, y: 0 }
  let n = e.length - 1,
    r = null
  const i = Dp(e)
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > lt(t))); ) n--
  if (!r) return { x: 0, y: 0 }
  const s = at(i.timestamp - r.timestamp)
  if (s === 0) return { x: 0, y: 0 }
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s }
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
}
function Lp (e) {
  let t = null
  return () => {
    const n = () => {
      t = null
    }
    return t === null ? ((t = e), n) : !1
  }
}
const Fc = Lp('dragHorizontal'),
  Ic = Lp('dragVertical')
function Rp (e) {
  let t = !1
  if (e === 'y') t = Ic()
  else if (e === 'x') t = Fc()
  else {
    const n = Fc(),
      r = Ic()
    n && r
      ? (t = () => {
          n(), r()
        })
      : (n && n(), r && r())
  }
  return t
}
function _p () {
  const e = Rp(!0)
  return e ? (e(), !1) : !0
}
function Nn (e) {
  return (
    e &&
    typeof e == 'object' &&
    Object.prototype.hasOwnProperty.call(e, 'current')
  )
}
const Fp = 1e-4,
  i1 = 1 - Fp,
  s1 = 1 + Fp,
  Ip = 0.01,
  o1 = 0 - Ip,
  l1 = 0 + Ip
function Me (e) {
  return e.max - e.min
}
function a1 (e, t, n) {
  return Math.abs(e - t) <= n
}
function Oc (e, t, n, r = 0.5) {
  ;(e.origin = r),
    (e.originPoint = K(t.min, t.max, e.origin)),
    (e.scale = Me(n) / Me(t)),
    (e.translate = K(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= i1 && e.scale <= s1) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= o1 && e.translate <= l1) || isNaN(e.translate)) &&
      (e.translate = 0)
}
function Tr (e, t, n, r) {
  Oc(e.x, t.x, n.x, r ? r.originX : void 0),
    Oc(e.y, t.y, n.y, r ? r.originY : void 0)
}
function zc (e, t, n) {
  ;(e.min = n.min + t.min), (e.max = e.min + Me(t))
}
function u1 (e, t, n) {
  zc(e.x, t.x, n.x), zc(e.y, t.y, n.y)
}
function Bc (e, t, n) {
  ;(e.min = t.min - n.min), (e.max = e.min + Me(t))
}
function kr (e, t, n) {
  Bc(e.x, t.x, n.x), Bc(e.y, t.y, n.y)
}
function c1 (e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? K(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? K(n, e, r.max) : Math.min(e, n)),
    e
  )
}
function Uc (e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  }
}
function f1 (e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Uc(e.x, n, i), y: Uc(e.y, t, r) }
}
function $c (e, t) {
  let n = t.min - e.min,
    r = t.max - e.max
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r }
}
function d1 (e, t) {
  return { x: $c(e.x, t.x), y: $c(e.y, t.y) }
}
function h1 (e, t) {
  let n = 0.5
  const r = Me(e),
    i = Me(t)
  return (
    i > r
      ? (n = Kn(t.min, t.max - r, e.min))
      : r > i && (n = Kn(e.min, e.max - i, t.min)),
    Ft(0, 1, n)
  )
}
function p1 (e, t) {
  const n = {}
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  )
}
const Vl = 0.35
function m1 (e = Vl) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Vl),
    { x: Wc(e, 'left', 'right'), y: Wc(e, 'top', 'bottom') }
  )
}
function Wc (e, t, n) {
  return { min: Hc(e, t), max: Hc(e, n) }
}
function Hc (e, t) {
  return typeof e == 'number' ? e : e[t] || 0
}
const Kc = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  An = () => ({ x: Kc(), y: Kc() }),
  Gc = () => ({ min: 0, max: 0 }),
  Z = () => ({ x: Gc(), y: Gc() })
function Re (e) {
  return [e('x'), e('y')]
}
function Op ({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } }
}
function g1 ({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min }
}
function y1 (e, t) {
  if (!t) return e
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom })
  return { top: n.y, left: n.x, bottom: r.y, right: r.x }
}
function wo (e) {
  return e === void 0 || e === 1
}
function Ml ({ scale: e, scaleX: t, scaleY: n }) {
  return !wo(e) || !wo(t) || !wo(n)
}
function Xt (e) {
  return (
    Ml(e) ||
    zp(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  )
}
function zp (e) {
  return Qc(e.x) || Qc(e.y)
}
function Qc (e) {
  return e && e !== '0%'
}
function ps (e, t, n) {
  const r = e - n,
    i = t * r
  return n + i
}
function Yc (e, t, n, r, i) {
  return i !== void 0 && (e = ps(e, i, r)), ps(e, n, r) + t
}
function jl (e, t = 0, n = 1, r, i) {
  ;(e.min = Yc(e.min, t, n, r, i)), (e.max = Yc(e.max, t, n, r, i))
}
function Bp (e, { x: t, y: n }) {
  jl(e.x, t.translate, t.scale, t.originPoint),
    jl(e.y, n.translate, n.scale, n.originPoint)
}
const Xc = 0.999999999999,
  Zc = 1.0000000000001
function v1 (e, t, n, r = !1) {
  const i = n.length
  if (!i) return
  t.x = t.y = 1
  let s, o
  for (let l = 0; l < i; l++) {
    ;(s = n[l]), (o = s.projectionDelta)
    const { visualElement: a } = s.options
    ;(a && a.props.style && a.props.style.display === 'contents') ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        Mn(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Bp(e, o)),
      r && Xt(s.latestValues) && Mn(e, s.latestValues))
  }
  t.x < Zc && t.x > Xc && (t.x = 1), t.y < Zc && t.y > Xc && (t.y = 1)
}
function Vn (e, t) {
  ;(e.min = e.min + t), (e.max = e.max + t)
}
function Jc (e, t, n, r, i = 0.5) {
  const s = K(e.min, e.max, i)
  jl(e, t, n, s, r)
}
function Mn (e, t) {
  Jc(e.x, t.x, t.scaleX, t.scale, t.originX),
    Jc(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function Up (e, t) {
  return Op(y1(e.getBoundingClientRect(), t))
}
function x1 (e, t, n) {
  const r = Up(e, n),
    { scroll: i } = t
  return i && (Vn(r.x, i.offset.x), Vn(r.y, i.offset.y)), r
}
const $p = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  w1 = new WeakMap()
class S1 {
  constructor (t) {
    ;(this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Z()),
      (this.visualElement = t)
  }
  start (t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement
    if (r && r.isPresent === !1) return
    const i = c => {
        const { dragSnapToOrigin: f } = this.getProps()
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Fs(c, 'page').point)
      },
      s = (c, f) => {
        const { drag: d, dragPropagation: g, onDragStart: y } = this.getProps()
        if (
          d &&
          !g &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Rp(d)),
          !this.openGlobalLock)
        )
          return
        ;(this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Re(T => {
            let p = this.getAxisMotionValue(T).get() || 0
            if (be.test(p)) {
              const { projection: h } = this.visualElement
              if (h && h.layout) {
                const m = h.layout.layoutBox[T]
                m && (p = Me(m) * (parseFloat(p) / 100))
              }
            }
            this.originPoint[T] = p
          }),
          y && z.postRender(() => y(c, f)),
          Nl(this.visualElement, 'transform')
        const { animationState: v } = this.visualElement
        v && v.setActive('whileDrag', !0)
      },
      o = (c, f) => {
        const {
          dragPropagation: d,
          dragDirectionLock: g,
          onDirectionLock: y,
          onDrag: v
        } = this.getProps()
        if (!d && !this.openGlobalLock) return
        const { offset: T } = f
        if (g && this.currentDirection === null) {
          ;(this.currentDirection = P1(T)),
            this.currentDirection !== null && y && y(this.currentDirection)
          return
        }
        this.updateAxis('x', f.point, T),
          this.updateAxis('y', f.point, T),
          this.visualElement.render(),
          v && v(c, f)
      },
      l = (c, f) => this.stop(c, f),
      a = () =>
        Re(c => {
          var f
          return (
            this.getAnimationState(c) === 'paused' &&
            ((f = this.getAxisMotionValue(c).animation) === null || f === void 0
              ? void 0
              : f.play())
          )
        }),
      { dragSnapToOrigin: u } = this.getProps()
    this.panSession = new jp(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: o,
        onSessionEnd: l,
        resumeAnimation: a
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: $p(this.visualElement)
      }
    )
  }
  stop (t, n) {
    const r = this.isDragging
    if ((this.cancel(), !r)) return
    const { velocity: i } = n
    this.startAnimation(i)
    const { onDragEnd: s } = this.getProps()
    s && z.postRender(() => s(t, n))
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
    if (!r || !Ti(t, i, this.currentDirection)) return
    const s = this.getAxisMotionValue(t)
    let o = this.originPoint[t] + r[t]
    this.constraints &&
      this.constraints[t] &&
      (o = c1(o, this.constraints[t], this.elastic[t])),
      s.set(o)
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
      s = this.constraints
    n && Nn(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = f1(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = m1(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Re(o => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = p1(i.layoutBox[o], this.constraints[o]))
        })
  }
  resolveRefConstraints () {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps()
    if (!t || !Nn(t)) return !1
    const r = t.current,
      { projection: i } = this.visualElement
    if (!i || !i.layout) return !1
    const s = x1(r, i.root, this.visualElement.getTransformPagePoint())
    let o = d1(i.layout.layoutBox, s)
    if (n) {
      const l = n(g1(o))
      ;(this.hasMutatedConstraints = !!l), l && (o = Op(l))
    }
    return o
  }
  startAnimation (t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: l
      } = this.getProps(),
      a = this.constraints || {},
      u = Re(c => {
        if (!Ti(c, n, this.currentDirection)) return
        let f = (a && a[c]) || {}
        o && (f = { min: 0, max: 0 })
        const d = i ? 200 : 1e6,
          g = i ? 40 : 1e7,
          y = {
            type: 'inertia',
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...f
          }
        return this.startAxisValueAnimation(c, y)
      })
    return Promise.all(u).then(l)
  }
  startAxisValueAnimation (t, n) {
    const r = this.getAxisMotionValue(t)
    return (
      Nl(this.visualElement, t), r.start(Ka(t, r, 0, n, this.visualElement, !1))
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
      if (!Ti(n, r, this.currentDirection)) return
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n)
      if (i && i.layout) {
        const { min: o, max: l } = i.layout.layoutBox[n]
        s.set(t[n] - K(o, l, 0.5))
      }
    })
  }
  scalePositionWithinConstraints () {
    if (!this.visualElement.current) return
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement
    if (!Nn(n) || !r || !this.constraints) return
    this.stopAnimation()
    const i = { x: 0, y: 0 }
    Re(o => {
      const l = this.getAxisMotionValue(o)
      if (l && this.constraints !== !1) {
        const a = l.get()
        i[o] = h1({ min: a, max: a }, this.constraints[o])
      }
    })
    const { transformTemplate: s } = this.visualElement.getProps()
    ;(this.visualElement.current.style.transform = s ? s({}, '') : 'none'),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Re(o => {
        if (!Ti(o, t, null)) return
        const l = this.getAxisMotionValue(o),
          { min: a, max: u } = this.constraints[o]
        l.set(K(a, u, i[o]))
      })
  }
  addListeners () {
    if (!this.visualElement.current) return
    w1.set(this.visualElement, this)
    const t = this.visualElement.current,
      n = ct(t, 'pointerdown', a => {
        const { drag: u, dragListener: c = !0 } = this.getProps()
        u && c && this.start(a)
      }),
      r = () => {
        const { dragConstraints: a } = this.getProps()
        Nn(a) && a.current && (this.constraints = this.resolveRefConstraints())
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener('measure', r)
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      z.read(r)
    const o = st(window, 'resize', () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        'didUpdate',
        ({ delta: a, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Re(c => {
              const f = this.getAxisMotionValue(c)
              f &&
                ((this.originPoint[c] += a[c].translate),
                f.set(f.get() + a[c].translate))
            }),
            this.visualElement.render())
        }
      )
    return () => {
      o(), n(), s(), l && l()
    }
  }
  getProps () {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = Vl,
        dragMomentum: l = !0
      } = t
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: l
    }
  }
}
function Ti (e, t, n) {
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
      (this.controls = new S1(t))
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
const qc = e => (t, n) => {
  e && z.postRender(() => e(t, n))
}
class k1 extends $t {
  constructor () {
    super(...arguments), (this.removePointerDownListener = me)
  }
  onPointerDown (t) {
    this.session = new jp(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: $p(this.node)
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
      onSessionStart: qc(t),
      onStart: qc(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && z.postRender(() => i(s, o))
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
const Xa = D.createContext(null)
function C1 () {
  const e = D.useContext(Xa)
  if (e === null) return [!0, null]
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = D.useId()
  D.useEffect(() => r(i), [])
  const s = D.useCallback(() => n && n(i), [i, n])
  return !t && n ? [!1, s] : [!0]
}
const Wp = D.createContext({}),
  Hp = D.createContext({}),
  Oi = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }
function bc (e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100
}
const or = {
    correct: (e, t) => {
      if (!t.target) return e
      if (typeof e == 'string')
        if (V.test(e)) e = parseFloat(e)
        else return e
      const n = bc(e, t.target.x),
        r = bc(e, t.target.y)
      return `${n}% ${r}%`
    }
  },
  E1 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = It.parse(e)
      if (i.length > 5) return r
      const s = It.createTransformer(e),
        o = typeof i[0] != 'number' ? 1 : 0,
        l = n.x.scale * t.x,
        a = n.y.scale * t.y
      ;(i[0 + o] /= l), (i[1 + o] /= a)
      const u = K(l, a, 0.5)
      return (
        typeof i[2 + o] == 'number' && (i[2 + o] /= u),
        typeof i[3 + o] == 'number' && (i[3 + o] /= u),
        s(i)
      )
    }
  },
  ms = {}
function N1 (e) {
  Object.assign(ms, e)
}
const { schedule: Za, cancel: ww } = Wh(queueMicrotask, !1)
class A1 extends D.Component {
  componentDidMount () {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i
      } = this.props,
      { projection: s } = t
    N1(V1),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener('animationComplete', () => {
          this.safeToRemove()
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove()
        })),
      (Oi.hasEverUpdated = !0)
  }
  getSnapshotBeforeUpdate (t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s
      } = this.props,
      o = r.projection
    return (
      o &&
        ((o.isPresent = s),
        i || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              z.postRender(() => {
                const l = o.getStack()
                ;(!l || !l.members.length) && this.safeToRemove()
              }))),
      null
    )
  }
  componentDidUpdate () {
    const { projection: t } = this.props.visualElement
    t &&
      (t.root.didUpdate(),
      Za.postRender(() => {
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
function Kp (e) {
  const [t, n] = C1(),
    r = D.useContext(Wp)
  return x.jsx(A1, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: D.useContext(Hp),
    isPresent: t,
    safeToRemove: n
  })
}
const V1 = {
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
    boxShadow: E1
  },
  Gp = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  M1 = Gp.length,
  ef = e => (typeof e == 'string' ? parseFloat(e) : e),
  tf = e => typeof e == 'number' || V.test(e)
function j1 (e, t, n, r, i, s) {
  i
    ? ((e.opacity = K(0, n.opacity !== void 0 ? n.opacity : 1, D1(r))),
      (e.opacityExit = K(t.opacity !== void 0 ? t.opacity : 1, 0, L1(r))))
    : s &&
      (e.opacity = K(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ))
  for (let o = 0; o < M1; o++) {
    const l = `border${Gp[o]}Radius`
    let a = nf(t, l),
      u = nf(n, l)
    if (a === void 0 && u === void 0) continue
    a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || tf(a) === tf(u)
        ? ((e[l] = Math.max(K(ef(a), ef(u), r), 0)),
          (be.test(u) || be.test(a)) && (e[l] += '%'))
        : (e[l] = u)
  }
  ;(t.rotate || n.rotate) && (e.rotate = K(t.rotate || 0, n.rotate || 0, r))
}
function nf (e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius
}
const D1 = Qp(0, 0.5, Zh),
  L1 = Qp(0.5, 0.95, me)
function Qp (e, t, n) {
  return r => (r < e ? 0 : r > t ? 1 : n(Kn(e, t, r)))
}
function rf (e, t) {
  ;(e.min = t.min), (e.max = t.max)
}
function Le (e, t) {
  rf(e.x, t.x), rf(e.y, t.y)
}
function sf (e, t) {
  ;(e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin)
}
function of (e, t, n, r, i) {
  return (
    (e -= t), (e = ps(e, 1 / n, r)), i !== void 0 && (e = ps(e, 1 / i, r)), e
  )
}
function R1 (e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (be.test(t) &&
      ((t = parseFloat(t)), (t = K(o.min, o.max, t / 100) - o.min)),
    typeof t != 'number')
  )
    return
  let l = K(s.min, s.max, r)
  e === s && (l -= t),
    (e.min = of(e.min, t, n, l, i)),
    (e.max = of(e.max, t, n, l, i))
}
function lf (e, t, [n, r, i], s, o) {
  R1(e, t[n], t[r], t[i], t.scale, s, o)
}
const _1 = ['x', 'scaleX', 'originX'],
  F1 = ['y', 'scaleY', 'originY']
function af (e, t, n, r) {
  lf(e.x, t, _1, n ? n.x : void 0, r ? r.x : void 0),
    lf(e.y, t, F1, n ? n.y : void 0, r ? r.y : void 0)
}
function uf (e) {
  return e.translate === 0 && e.scale === 1
}
function Yp (e) {
  return uf(e.x) && uf(e.y)
}
function cf (e, t) {
  return e.min === t.min && e.max === t.max
}
function I1 (e, t) {
  return cf(e.x, t.x) && cf(e.y, t.y)
}
function ff (e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  )
}
function Xp (e, t) {
  return ff(e.x, t.x) && ff(e.y, t.y)
}
function df (e) {
  return Me(e.x) / Me(e.y)
}
function hf (e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  )
}
class O1 {
  constructor () {
    this.members = []
  }
  add (t) {
    Ga(this.members, t), t.scheduleRender()
  }
  remove (t) {
    if (
      (Qa(this.members, t),
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
      const s = this.members[i]
      if (s.isPresent !== !1) {
        r = s
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
function z1 (e, t, n) {
  let r = ''
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: f,
      rotateY: d,
      skewX: g,
      skewY: y
    } = n
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      g && (r += `skewX(${g}deg) `),
      y && (r += `skewY(${y}deg) `)
  }
  const l = e.x.scale * t.x,
    a = e.y.scale * t.y
  return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || 'none'
}
const B1 = (e, t) => e.depth - t.depth
class U1 {
  constructor () {
    ;(this.children = []), (this.isDirty = !1)
  }
  add (t) {
    Ga(this.children, t), (this.isDirty = !0)
  }
  remove (t) {
    Qa(this.children, t), (this.isDirty = !0)
  }
  forEach (t) {
    this.isDirty && this.children.sort(B1),
      (this.isDirty = !1),
      this.children.forEach(t)
  }
}
function zi (e) {
  const t = pe(e) ? e.get() : e
  return Dv(t) ? t.toValue() : t
}
function $1 (e, t) {
  const n = et.now(),
    r = ({ timestamp: i }) => {
      const s = i - n
      s >= t && (_t(r), e(s - t))
    }
  return z.read(r, !0), () => _t(r)
}
function W1 (e) {
  return e instanceof SVGElement && e.tagName !== 'svg'
}
function H1 (e, t, n) {
  const r = pe(e) ? e : Gr(e)
  return r.start(Ka('', r, t, n)), r.animation
}
const Zt = {
    type: 'projectionFrame',
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
  },
  dr = typeof window < 'u' && window.MotionDebug !== void 0,
  So = ['', 'X', 'Y', 'Z'],
  K1 = { visibility: 'hidden' },
  pf = 1e3
let G1 = 0
function Po (e, t, n, r) {
  const { latestValues: i } = t
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0))
}
function Zp (e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return
  const { visualElement: t } = e.options
  if (!t) return
  const n = Ep(t)
  if (window.MotionHasOptimisedAnimation(n, 'transform')) {
    const { layout: i, layoutId: s } = e.options
    window.MotionCancelOptimisedAnimation(n, 'transform', z, !(i || s))
  }
  const { parent: r } = e
  r && !r.hasCheckedOptimisedAppear && Zp(r)
}
function Jp ({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i
}) {
  return class {
    constructor (o = {}, l = t == null ? void 0 : t()) {
      ;(this.id = G1++),
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
              (Zt.totalNodes =
                Zt.resolvedTargetDeltas =
                Zt.recalculatedProjection =
                  0),
            this.nodes.forEach(X1),
            this.nodes.forEach(ex),
            this.nodes.forEach(tx),
            this.nodes.forEach(Z1),
            dr && window.MotionDebug.record(Zt)
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0)
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0
      this.root === this && (this.nodes = new U1())
    }
    addEventListener (o, l) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new Ya()),
        this.eventHandlers.get(o).add(l)
      )
    }
    notifyListeners (o, ...l) {
      const a = this.eventHandlers.get(o)
      a && a.notify(...l)
    }
    hasListeners (o) {
      return this.eventHandlers.has(o)
    }
    mount (o, l = this.root.hasTreeAnimated) {
      if (this.instance) return
      ;(this.isSVG = W1(o)), (this.instance = o)
      const { layoutId: a, layout: u, visualElement: c } = this.options
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        l && (u || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f
        const d = () => (this.root.updateBlockedByResize = !1)
        e(o, () => {
          ;(this.root.updateBlockedByResize = !0),
            f && f(),
            (f = $1(d, 250)),
            Oi.hasAnimatedSinceResize &&
              ((Oi.hasAnimatedSinceResize = !1), this.nodes.forEach(gf))
        })
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || u) &&
          this.addEventListener(
            'didUpdate',
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: g,
              layout: y
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ;(this.target = void 0), (this.relativeTarget = void 0)
                return
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || ox,
                { onLayoutAnimationStart: T, onLayoutAnimationComplete: p } =
                  c.getProps(),
                h = !this.targetLayout || !Xp(this.targetLayout, y) || g,
                m = !d && g
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                m ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, m)
                const w = { ...ja(v, 'layout'), onPlay: T, onComplete: p }
                ;(c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w)
              } else
                d || gf(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete()
              this.targetLayout = y
            }
          )
    }
    unmount () {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this)
      const o = this.getStack()
      o && o.remove(this),
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
        this.nodes && this.nodes.forEach(nx),
        this.animationId++)
    }
    getTransformTemplate () {
      const { visualElement: o } = this.options
      return o && o.getProps().transformTemplate
    }
    willUpdate (o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete()
        return
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Zp(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return
      this.isLayoutDirty = !0
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c]
        ;(f.shouldResetTransform = !0),
          f.updateScroll('snapshot'),
          f.options.layoutRoot && f.willUpdate(!1)
      }
      const { layoutId: l, layout: a } = this.options
      if (l === void 0 && !a) return
      const u = this.getTransformTemplate()
      ;(this.prevTransformTemplateValue = u
        ? u(this.latestValues, '')
        : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners('willUpdate')
    }
    update () {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(mf)
        return
      }
      this.isUpdating || this.nodes.forEach(q1),
        (this.isUpdating = !1),
        this.nodes.forEach(b1),
        this.nodes.forEach(Q1),
        this.nodes.forEach(Y1),
        this.clearAllSnapshots()
      const l = et.now()
      ;(le.delta = Ft(0, 1e3 / 60, l - le.timestamp)),
        (le.timestamp = l),
        (le.isProcessing = !0),
        ho.update.process(le),
        ho.preRender.process(le),
        ho.render.process(le),
        (le.isProcessing = !1)
    }
    didUpdate () {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Za.read(this.scheduleUpdate))
    }
    clearAllSnapshots () {
      this.nodes.forEach(J1), this.sharedNodes.forEach(rx)
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
      const o = this.layout
      ;(this.layout = this.measure(!1)),
        (this.layoutCorrected = Z()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox)
      const { visualElement: l } = this.options
      l &&
        l.notify(
          'LayoutMeasure',
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        )
    }
    updateScroll (o = 'measure') {
      let l = !!(this.options.layoutScroll && this.instance)
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (l = !1),
        l)
      ) {
        const a = r(this.instance)
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: a,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : a
        }
      }
    }
    resetTransform () {
      if (!i) return
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        l = this.projectionDelta && !Yp(this.projectionDelta),
        a = this.getTransformTemplate(),
        u = a ? a(this.latestValues, '') : void 0,
        c = u !== this.prevTransformTemplateValue
      o &&
        (l || Xt(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender())
    }
    measure (o = !0) {
      const l = this.measurePageBox()
      let a = this.removeElementScroll(l)
      return (
        o && (a = this.removeTransform(a)),
        lx(a),
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
      var o
      const { visualElement: l } = this.options
      if (!l) return Z()
      const a = l.measureViewportBox()
      if (
        !(
          ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
          this.path.some(ax)
        )
      ) {
        const { scroll: c } = this.root
        c && (Vn(a.x, c.offset.x), Vn(a.y, c.offset.y))
      }
      return a
    }
    removeElementScroll (o) {
      var l
      const a = Z()
      if (
        (Le(a, o), !((l = this.scroll) === null || l === void 0) && l.wasRoot)
      )
        return a
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: f, options: d } = c
        c !== this.root &&
          f &&
          d.layoutScroll &&
          (f.wasRoot && Le(a, o), Vn(a.x, f.offset.x), Vn(a.y, f.offset.y))
      }
      return a
    }
    applyTransform (o, l = !1) {
      const a = Z()
      Le(a, o)
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u]
        !l &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Mn(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Xt(c.latestValues) && Mn(a, c.latestValues)
      }
      return Xt(this.latestValues) && Mn(a, this.latestValues), a
    }
    removeTransform (o) {
      const l = Z()
      Le(l, o)
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a]
        if (!u.instance || !Xt(u.latestValues)) continue
        Ml(u.latestValues) && u.updateSnapshot()
        const c = Z(),
          f = u.measurePageBox()
        Le(c, f),
          af(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
      }
      return Xt(this.latestValues) && af(l, this.latestValues), l
    }
    setTargetDelta (o) {
      ;(this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0)
    }
    setOptions (o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0
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
    resolveTargetDelta (o = !1) {
      var l
      const a = this.getLead()
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty)
      const u = !!this.resumingFrom || this !== a
      if (
        !(
          o ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return
      const { layout: f, layoutId: d } = this.options
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = le.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent()
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Z()),
              (this.relativeTargetOrigin = Z()),
              kr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox
              ),
              Le(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0)
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Z()), (this.targetWithTransforms = Z())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                u1(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Le(this.target, this.layout.layoutBox),
                Bp(this.target, this.targetDelta))
              : Le(this.target, this.layout.layoutBox),
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
                (this.relativeTarget = Z()),
                (this.relativeTargetOrigin = Z()),
                kr(this.relativeTargetOrigin, this.target, g.target),
                Le(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0)
          }
          dr && Zt.resolvedTargetDeltas++
        }
      }
    }
    getClosestProjectingParent () {
      if (
        !(
          !this.parent ||
          Ml(this.parent.latestValues) ||
          zp(this.parent.latestValues)
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
      var o
      const l = this.getLead(),
        a = !!this.resumingFrom || this !== l
      let u = !0
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (u = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === le.timestamp && (u = !1),
        u)
      )
        return
      const { layout: c, layoutId: f } = this.options
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return
      Le(this.layoutCorrected, this.layout.layoutBox)
      const d = this.treeScale.x,
        g = this.treeScale.y
      v1(this.layoutCorrected, this.treeScale, this.path, a),
        l.layout &&
          !l.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((l.target = l.layout.layoutBox), (l.targetWithTransforms = Z()))
      const { target: y } = l
      if (!y) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender())
        return
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (sf(this.prevProjectionDelta.x, this.projectionDelta.x),
          sf(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Tr(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== g ||
          !hf(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !hf(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', y)),
        dr && Zt.recalculatedProjection++
    }
    hide () {
      this.isVisible = !1
    }
    show () {
      this.isVisible = !0
    }
    scheduleRender (o = !0) {
      var l
      if (
        ((l = this.options.visualElement) === null ||
          l === void 0 ||
          l.scheduleRender(),
        o)
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
    setAnimationOrigin (o, l = !1) {
      const a = this.snapshot,
        u = a ? a.latestValues : {},
        c = { ...this.latestValues },
        f = An()
      ;(!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l)
      const d = Z(),
        g = a ? a.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        v = g !== y,
        T = this.getStack(),
        p = !T || T.members.length <= 1,
        h = !!(v && !p && this.options.crossfade === !0 && !this.path.some(sx))
      this.animationProgress = 0
      let m
      ;(this.mixTargetDelta = w => {
        const S = w / 1e3
        yf(f.x, o.x, S),
          yf(f.y, o.y, S),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (kr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            ix(this.relativeTarget, this.relativeTargetOrigin, d, S),
            m && I1(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = Z()),
            Le(m, this.relativeTarget)),
          v &&
            ((this.animationValues = c), j1(c, u, this.latestValues, S, h, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S)
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
    }
    startAnimation (o) {
      this.notifyListeners('animationStart'),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (_t(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = z.update(() => {
          ;(Oi.hasAnimatedSinceResize = !0),
            (this.currentAnimation = H1(0, pf, {
              ...o,
              onUpdate: l => {
                this.mixTargetDelta(l), o.onUpdate && o.onUpdate(l)
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation()
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
      const o = this.getStack()
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners('animationComplete')
    }
    finishAnimation () {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(pf),
        this.currentAnimation.stop()),
        this.completeAnimation()
    }
    applyTransformsToTarget () {
      const o = this.getLead()
      let { targetWithTransforms: l, target: a, layout: u, latestValues: c } = o
      if (!(!l || !a || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          qp(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          a = this.target || Z()
          const f = Me(this.layout.layoutBox.x)
          ;(a.x.min = o.target.x.min), (a.x.max = a.x.min + f)
          const d = Me(this.layout.layoutBox.y)
          ;(a.y.min = o.target.y.min), (a.y.max = a.y.min + d)
        }
        Le(l, a),
          Mn(l, c),
          Tr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c)
      }
    }
    registerSharedNode (o, l) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new O1()),
        this.sharedNodes.get(o).add(l)
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
      const o = this.getStack()
      return o ? o.lead === this : !0
    }
    getLead () {
      var o
      const { layoutId: l } = this.options
      return l
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this
    }
    getPrevLead () {
      var o
      const { layoutId: l } = this.options
      return l
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0
    }
    getStack () {
      const { layoutId: o } = this.options
      if (o) return this.root.sharedNodes.get(o)
    }
    promote ({ needsReset: o, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack()
      u && u.promote(this, a),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l })
    }
    relegate () {
      const o = this.getStack()
      return o ? o.relegate(this) : !1
    }
    resetSkewAndRotation () {
      const { visualElement: o } = this.options
      if (!o) return
      let l = !1
      const { latestValues: a } = o
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
      a.z && Po('z', o, u, this.animationValues)
      for (let c = 0; c < So.length; c++)
        Po(`rotate${So[c]}`, o, u, this.animationValues),
          Po(`skew${So[c]}`, o, u, this.animationValues)
      o.render()
      for (const c in u)
        o.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c])
      o.scheduleRender()
    }
    getProjectionStyles (o) {
      var l, a
      if (!this.instance || this.isSVG) return
      if (!this.isVisible) return K1
      const u = { visibility: '' },
        c = this.getTransformTemplate()
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ''),
          (u.pointerEvents = zi(o == null ? void 0 : o.pointerEvents) || ''),
          (u.transform = c ? c(this.latestValues, '') : 'none'),
          u
        )
      const f = this.getLead()
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {}
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = zi(o == null ? void 0 : o.pointerEvents) || '')),
          this.hasProjected &&
            !Xt(this.latestValues) &&
            ((v.transform = c ? c({}, '') : 'none'), (this.hasProjected = !1)),
          v
        )
      }
      const d = f.animationValues || f.latestValues
      this.applyTransformsToTarget(),
        (u.transform = z1(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (u.transform = c(d, u.transform))
      const { x: g, y } = this.projectionDelta
      ;(u.transformOrigin = `${g.origin * 100}% ${y.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (a =
                    (l = d.opacity) !== null && l !== void 0
                      ? l
                      : this.latestValues.opacity) !== null && a !== void 0
                  ? a
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ''
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0)
      for (const v in ms) {
        if (d[v] === void 0) continue
        const { correct: T, applyTo: p } = ms[v],
          h = u.transform === 'none' ? d[v] : T(d[v], f)
        if (p) {
          const m = p.length
          for (let w = 0; w < m; w++) u[p[w]] = h
        } else u[v] = h
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            f === this
              ? zi(o == null ? void 0 : o.pointerEvents) || ''
              : 'none'),
        u
      )
    }
    clearSnapshot () {
      this.resumeFrom = this.snapshot = void 0
    }
    resetTree () {
      this.root.nodes.forEach(o => {
        var l
        return (l = o.currentAnimation) === null || l === void 0
          ? void 0
          : l.stop()
      }),
        this.root.nodes.forEach(mf),
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
      { animationType: s } = e.options,
      o = n.source !== e.layout.source
    s === 'size'
      ? Re(f => {
          const d = o ? n.measuredBox[f] : n.layoutBox[f],
            g = Me(d)
          ;(d.min = r[f].min), (d.max = d.min + g)
        })
      : qp(s, n.layoutBox, r) &&
        Re(f => {
          const d = o ? n.measuredBox[f] : n.layoutBox[f],
            g = Me(r[f])
          ;(d.max = d.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + g))
        })
    const l = An()
    Tr(l, r, n.layoutBox)
    const a = An()
    o ? Tr(a, e.applyTransform(i, !0), n.measuredBox) : Tr(a, r, n.layoutBox)
    const u = !Yp(l)
    let c = !1
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent()
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: g } = f
        if (d && g) {
          const y = Z()
          kr(y, n.layoutBox, d.layoutBox)
          const v = Z()
          kr(v, r, g.layoutBox),
            Xp(y, v) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = f))
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
  dr && Zt.totalNodes++,
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
function mf (e) {
  e.clearMeasurements()
}
function q1 (e) {
  e.isLayoutDirty = !1
}
function b1 (e) {
  const { visualElement: t } = e.options
  t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'),
    e.resetTransform()
}
function gf (e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0)
}
function ex (e) {
  e.resolveTargetDelta()
}
function tx (e) {
  e.calcProjection()
}
function nx (e) {
  e.resetSkewAndRotation()
}
function rx (e) {
  e.removeLeadSnapshot()
}
function yf (e, t, n) {
  ;(e.translate = K(t.translate, 0, n)),
    (e.scale = K(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint)
}
function vf (e, t, n, r) {
  ;(e.min = K(t.min, n.min, r)), (e.max = K(t.max, n.max, r))
}
function ix (e, t, n, r) {
  vf(e.x, t.x, n.x, r), vf(e.y, t.y, n.y, r)
}
function sx (e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0
}
const ox = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  xf = e =>
    typeof navigator < 'u' &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  wf = xf('applewebkit/') && !xf('chrome/') ? Math.round : me
function Sf (e) {
  ;(e.min = wf(e.min)), (e.max = wf(e.max))
}
function lx (e) {
  Sf(e.x), Sf(e.y)
}
function qp (e, t, n) {
  return e === 'position' || (e === 'preserve-aspect' && !a1(df(t), df(n), 0.2))
}
function ax (e) {
  var t
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  )
}
const ux = Jp({
    attachResizeListener: (e, t) => st(e, 'resize', t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
  }),
  To = { current: void 0 },
  bp = Jp({
    measureScroll: e => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!To.current) {
        const e = new ux({})
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (To.current = e)
      }
      return To.current
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : 'none'
    },
    checkIsScrollRoot: e => window.getComputedStyle(e).position === 'fixed'
  }),
  cx = {
    pan: { Feature: k1 },
    drag: { Feature: T1, ProjectionNode: bp, MeasureLayout: Kp }
  }
function Pf (e, t) {
  const n = t ? 'pointerenter' : 'pointerleave',
    r = t ? 'onHoverStart' : 'onHoverEnd',
    i = (s, o) => {
      if (s.pointerType === 'touch' || _p()) return
      const l = e.getProps()
      e.animationState &&
        l.whileHover &&
        e.animationState.setActive('whileHover', t)
      const a = l[r]
      a && z.postRender(() => a(s, o))
    }
  return ct(e.current, n, i, { passive: !e.getProps()[r] })
}
class fx extends $t {
  mount () {
    this.unmount = ut(Pf(this.node, !0), Pf(this.node, !1))
  }
  unmount () {}
}
class dx extends $t {
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
      st(this.node.current, 'focus', () => this.onFocus()),
      st(this.node.current, 'blur', () => this.onBlur())
    )
  }
  unmount () {}
}
const em = (e, t) => (t ? (e === t ? !0 : em(e, t.parentElement)) : !1)
function ko (e, t) {
  if (!t) return
  const n = new PointerEvent('pointer' + e)
  t(n, Fs(n))
}
class hx extends $t {
  constructor () {
    super(...arguments),
      (this.removeStartListeners = me),
      (this.removeEndListeners = me),
      (this.removeAccessibleListeners = me),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return
        this.removeEndListeners()
        const r = this.node.getProps(),
          s = ct(
            window,
            'pointerup',
            (l, a) => {
              if (!this.checkPressEnd()) return
              const {
                  onTap: u,
                  onTapCancel: c,
                  globalTapTarget: f
                } = this.node.getProps(),
                d = !f && !em(this.node.current, l.target) ? c : u
              d && z.update(() => d(l, a))
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          o = ct(window, 'pointercancel', (l, a) => this.cancelPress(l, a), {
            passive: !(r.onTapCancel || r.onPointerCancel)
          })
        ;(this.removeEndListeners = ut(s, o)), this.startPress(t, n)
      }),
      (this.startAccessiblePress = () => {
        const t = s => {
            if (s.key !== 'Enter' || this.isPressing) return
            const o = l => {
              l.key !== 'Enter' ||
                !this.checkPressEnd() ||
                ko('up', (a, u) => {
                  const { onTap: c } = this.node.getProps()
                  c && z.postRender(() => c(a, u))
                })
            }
            this.removeEndListeners(),
              (this.removeEndListeners = st(this.node.current, 'keyup', o)),
              ko('down', (l, a) => {
                this.startPress(l, a)
              })
          },
          n = st(this.node.current, 'keydown', t),
          r = () => {
            this.isPressing && ko('cancel', (s, o) => this.cancelPress(s, o))
          },
          i = st(this.node.current, 'blur', r)
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
      !_p()
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
      r = st(this.node.current, 'focus', this.startAccessiblePress)
    this.removeStartListeners = ut(n, r)
  }
  unmount () {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners()
  }
}
const Dl = new WeakMap(),
  Co = new WeakMap(),
  px = e => {
    const t = Dl.get(e.target)
    t && t(e)
  },
  mx = e => {
    e.forEach(px)
  }
function gx ({ root: e, ...t }) {
  const n = e || document
  Co.has(n) || Co.set(n, {})
  const r = Co.get(n),
    i = JSON.stringify(t)
  return r[i] || (r[i] = new IntersectionObserver(mx, { root: e, ...t })), r[i]
}
function yx (e, t, n) {
  const r = gx(t)
  return (
    Dl.set(e, n),
    r.observe(e),
    () => {
      Dl.delete(e), r.unobserve(e)
    }
  )
}
const vx = { some: 0, all: 1 }
class xx extends $t {
  constructor () {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1)
  }
  startObserver () {
    this.unmount()
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = 'some', once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == 'number' ? i : vx[i]
      },
      l = a => {
        const { isIntersecting: u } = a
        if (
          this.isInView === u ||
          ((this.isInView = u), s && !u && this.hasEnteredView)
        )
          return
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive('whileInView', u)
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f
        d && d(a)
      }
    return yx(this.node.current, o, l)
  }
  mount () {
    this.startObserver()
  }
  update () {
    if (typeof IntersectionObserver > 'u') return
    const { props: t, prevProps: n } = this.node
    ;['amount', 'margin', 'root'].some(wx(t, n)) && this.startObserver()
  }
  unmount () {}
}
function wx ({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return n => e[n] !== t[n]
}
const Sx = {
    inView: { Feature: xx },
    tap: { Feature: hx },
    focus: { Feature: dx },
    hover: { Feature: fx }
  },
  Px = { layout: { ProjectionNode: bp, MeasureLayout: Kp } },
  tm = D.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: 'never'
  }),
  Is = D.createContext({}),
  Ja = typeof window < 'u',
  Tx = Ja ? D.useLayoutEffect : D.useEffect,
  nm = D.createContext({ strict: !1 })
function kx (e, t, n, r, i) {
  var s, o
  const { visualElement: l } = D.useContext(Is),
    a = D.useContext(nm),
    u = D.useContext(Xa),
    c = D.useContext(tm).reducedMotion,
    f = D.useRef()
  ;(r = r || a.renderer),
    !f.current &&
      r &&
      (f.current = r(e, {
        visualState: t,
        parent: l,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c
      }))
  const d = f.current,
    g = D.useContext(Hp)
  d &&
    !d.projection &&
    i &&
    (d.type === 'html' || d.type === 'svg') &&
    Cx(f.current, n, i, g),
    D.useInsertionEffect(() => {
      d && d.update(n, u)
    })
  const y = n[Cp],
    v = D.useRef(
      !!y &&
        !(
          !((s = window.MotionHandoffIsComplete) === null || s === void 0) &&
          s.call(window, y)
        ) &&
        ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
          ? void 0
          : o.call(window, y))
    )
  return (
    Tx(() => {
      d &&
        ((window.MotionIsMounted = !0),
        d.updateFeatures(),
        Za.render(d.render),
        v.current && d.animationState && d.animationState.animateChanges())
    }),
    D.useEffect(() => {
      d &&
        (!v.current && d.animationState && d.animationState.animateChanges(),
        v.current &&
          (queueMicrotask(() => {
            var T
            ;(T = window.MotionHandoffMarkAsComplete) === null ||
              T === void 0 ||
              T.call(window, y)
          }),
          (v.current = !1)))
    }),
    d
  )
}
function Cx (e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: l,
    layoutScroll: a,
    layoutRoot: u
  } = t
  ;(e.projection = new n(
    e.latestValues,
    t['data-framer-portal-id'] ? void 0 : rm(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (l && Nn(l)),
      visualElement: e,
      animationType: typeof s == 'string' ? s : 'both',
      initialPromotionConfig: r,
      layoutScroll: a,
      layoutRoot: u
    })
}
function rm (e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : rm(e.parent)
}
function Ex (e, t, n) {
  return D.useCallback(
    r => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == 'function' ? n(r) : Nn(n) && (n.current = r))
    },
    [t]
  )
}
function Os (e) {
  return $r(e.animate) || Ma.some(t => Wr(e[t]))
}
function im (e) {
  return !!(Os(e) || e.variants)
}
function Nx (e, t) {
  if (Os(e)) {
    const { initial: n, animate: r } = e
    return {
      initial: n === !1 || Wr(n) ? n : void 0,
      animate: Wr(r) ? r : void 0
    }
  }
  return e.inherit !== !1 ? t : {}
}
function Ax (e) {
  const { initial: t, animate: n } = Nx(e, D.useContext(Is))
  return D.useMemo(() => ({ initial: t, animate: n }), [Tf(t), Tf(n)])
}
function Tf (e) {
  return Array.isArray(e) ? e.join(' ') : e
}
const kf = {
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
  Gn = {}
for (const e in kf) Gn[e] = { isEnabled: t => kf[e].some(n => !!t[n]) }
function Vx (e) {
  for (const t in e) Gn[t] = { ...Gn[t], ...e[t] }
}
const Mx = Symbol.for('motionComponentSymbol')
function jx ({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i
}) {
  e && Vx(e)
  function s (l, a) {
    let u
    const c = { ...D.useContext(tm), ...l, layoutId: Dx(l) },
      { isStatic: f } = c,
      d = Ax(l),
      g = r(l, f)
    if (!f && Ja) {
      Lx()
      const y = Rx(c)
      ;(u = y.MeasureLayout),
        (d.visualElement = kx(i, g, c, t, y.ProjectionNode))
    }
    return x.jsxs(Is.Provider, {
      value: d,
      children: [
        u && d.visualElement
          ? x.jsx(u, { visualElement: d.visualElement, ...c })
          : null,
        n(i, l, Ex(g, d.visualElement, a), g, f, d.visualElement)
      ]
    })
  }
  const o = D.forwardRef(s)
  return (o[Mx] = i), o
}
function Dx ({ layoutId: e }) {
  const t = D.useContext(Wp).id
  return t && e !== void 0 ? t + '-' + e : e
}
function Lx (e, t) {
  D.useContext(nm).strict
}
function Rx (e) {
  const { drag: t, layout: n } = Gn
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
const _x = [
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
function qa (e) {
  return typeof e != 'string' || e.includes('-')
    ? !1
    : !!(_x.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function sm (e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r))
  for (const s in n) e.style.setProperty(s, n[s])
}
const om = new Set([
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
function lm (e, t, n, r) {
  sm(e, t, void 0, r)
  for (const i in t.attrs) e.setAttribute(om.has(i) ? i : _s(i), t.attrs[i])
}
function am (e, { layout: t, layoutId: n }) {
  return (
    Ut.has(e) ||
    e.startsWith('origin') ||
    ((t || n !== void 0) && (!!ms[e] || e === 'opacity'))
  )
}
function ba (e, t, n) {
  var r
  const { style: i } = e,
    s = {}
  for (const o in i)
    (pe(i[o]) ||
      (t.style && pe(t.style[o])) ||
      am(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (s[o] = i[o])
  return (
    n && i && typeof i.willChange == 'string' && (n.applyWillChange = !1), s
  )
}
function um (e, t, n) {
  const r = ba(e, t, n)
  for (const i in e)
    if (pe(e[i]) || pe(t[i])) {
      const s =
        qr.indexOf(i) !== -1
          ? 'attr' + i.charAt(0).toUpperCase() + i.substring(1)
          : i
      r[s] = e[i]
    }
  return r
}
function Fx (e) {
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
  s,
  o,
  l
) {
  const a = { latestValues: Ox(i, s, o, l ? !1 : e, t), renderState: n() }
  return r && (a.mount = u => r(i, u, a)), a
}
const cm = e => (t, n) => {
  const r = D.useContext(Is),
    i = D.useContext(Xa),
    s = () => Ix(e, t, r, i, n)
  return n ? s() : Fx(s)
}
function Cf (e, t, n) {
  const r = Array.isArray(t) ? t : [t]
  for (let i = 0; i < r.length; i++) {
    const s = Aa(e, r[i])
    if (s) {
      const { transitionEnd: o, transition: l, ...a } = s
      n(a, o)
    }
  }
}
function Ox (e, t, n, r, i) {
  var s
  const o = {}
  let l =
    r &&
    ((s = e.style) === null || s === void 0 ? void 0 : s.willChange) === void 0
  const a = i(e, {})
  for (const v in a) o[v] = zi(a[v])
  let { initial: u, animate: c } = e
  const f = Os(e),
    d = im(e)
  t &&
    d &&
    !f &&
    e.inherit !== !1 &&
    (u === void 0 && (u = t.initial), c === void 0 && (c = t.animate))
  let g = n ? n.initial === !1 : !1
  g = g || u === !1
  const y = g ? c : u
  return (
    y &&
      typeof y != 'boolean' &&
      !$r(y) &&
      Cf(e, y, (v, T) => {
        for (const p in v) {
          let h = v[p]
          if (Array.isArray(h)) {
            const m = g ? h.length - 1 : 0
            h = h[m]
          }
          h !== null && (o[p] = h)
        }
        for (const p in T) o[p] = T[p]
      }),
    l &&
      c &&
      u !== !1 &&
      !$r(c) &&
      Cf(e, c, v => {
        for (const T in v)
          if (Np(T)) {
            o.willChange = 'transform'
            return
          }
      }),
    o
  )
}
const eu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  fm = () => ({ ...eu(), attrs: {} }),
  dm = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
  zx = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    transformPerspective: 'perspective'
  },
  Bx = qr.length
function Ux (e, t, n) {
  let r = '',
    i = !0
  for (let s = 0; s < Bx; s++) {
    const o = qr[s],
      l = e[o]
    if (l === void 0) continue
    let a = !0
    if (
      (typeof l == 'number'
        ? (a = l === (o.startsWith('scale') ? 1 : 0))
        : (a = parseFloat(l) === 0),
      !a || n)
    ) {
      const u = dm(l, Oa[o])
      if (!a) {
        i = !1
        const c = zx[o] || o
        r += `${c}(${u}) `
      }
      n && (t[o] = u)
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? '' : r)) : i && (r = 'none'), r
}
function tu (e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e
  let o = !1,
    l = !1
  for (const a in t) {
    const u = t[a]
    if (Ut.has(a)) {
      o = !0
      continue
    } else if (tp(a)) {
      i[a] = u
      continue
    } else {
      const c = dm(u, Oa[a])
      a.startsWith('origin') ? ((l = !0), (s[a] = c)) : (r[a] = c)
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = Ux(t, e.transform, n))
        : r.transform && (r.transform = 'none')),
    l)
  ) {
    const { originX: a = '50%', originY: u = '50%', originZ: c = 0 } = s
    r.transformOrigin = `${a} ${u} ${c}`
  }
}
function Ef (e, t, n) {
  return typeof e == 'string' ? e : V.transform(t + n * e)
}
function $x (e, t, n) {
  const r = Ef(t, e.x, e.width),
    i = Ef(n, e.y, e.height)
  return `${r} ${i}`
}
const Wx = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
  Hx = { offset: 'strokeDashoffset', array: 'strokeDasharray' }
function Kx (e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1
  const s = i ? Wx : Hx
  e[s.offset] = V.transform(-r)
  const o = V.transform(t),
    l = V.transform(n)
  e[s.array] = `${o} ${l}`
}
function nu (
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
  },
  c,
  f
) {
  if ((tu(e, u, f), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox)
    return
  }
  ;(e.attrs = e.style), (e.style = {})
  const { attrs: d, style: g, dimensions: y } = e
  d.transform && (y && (g.transform = d.transform), delete d.transform),
    y &&
      (i !== void 0 || s !== void 0 || g.transform) &&
      (g.transformOrigin = $x(
        y,
        i !== void 0 ? i : 0.5,
        s !== void 0 ? s : 0.5
      )),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    o !== void 0 && Kx(d, o, l, a, !1)
}
const ru = e => typeof e == 'string' && e.toLowerCase() === 'svg',
  Gx = {
    useVisualState: cm({
      scrapeMotionValuesFromProps: um,
      createRenderState: fm,
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
            nu(n, r, ru(t.tagName), e.transformTemplate), lm(t, n)
          })
      }
    })
  },
  Qx = {
    useVisualState: cm({
      applyWillChange: !0,
      scrapeMotionValuesFromProps: ba,
      createRenderState: eu
    })
  }
function hm (e, t, n) {
  for (const r in t) !pe(t[r]) && !am(r, n) && (e[r] = t[r])
}
function Yx ({ transformTemplate: e }, t) {
  return D.useMemo(() => {
    const n = eu()
    return tu(n, t, e), Object.assign({}, n.vars, n.style)
  }, [t])
}
function Xx (e, t) {
  const n = e.style || {},
    r = {}
  return hm(r, n, e), Object.assign(r, Yx(e, t)), r
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
function gs (e) {
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
let pm = e => !gs(e)
function qx (e) {
  e && (pm = t => (t.startsWith('on') ? !gs(t) : e(t)))
}
try {
  qx(require('@emotion/is-prop-valid').default)
} catch {}
function bx (e, t, n) {
  const r = {}
  for (const i in e)
    (i === 'values' && typeof e.values == 'object') ||
      ((pm(i) ||
        (n === !0 && gs(i)) ||
        (!t && !gs(i)) ||
        (e.draggable && i.startsWith('onDrag'))) &&
        (r[i] = e[i]))
  return r
}
function ew (e, t, n, r) {
  const i = D.useMemo(() => {
    const s = fm()
    return (
      nu(s, t, ru(r), e.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    )
  }, [t])
  if (e.style) {
    const s = {}
    hm(s, e.style, e), (i.style = { ...s, ...i.style })
  }
  return i
}
function tw (e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const a = (qa(n) ? ew : Zx)(r, s, o, n),
      u = bx(r, typeof n == 'string', e),
      c = n !== D.Fragment ? { ...u, ...a, ref: i } : {},
      { children: f } = r,
      d = D.useMemo(() => (pe(f) ? f.get() : f), [f])
    return D.createElement(n, { ...c, children: d })
  }
}
function nw (e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const o = {
      ...(qa(r) ? Gx : Qx),
      preloadedFeatures: e,
      useRender: tw(i),
      createVisualElement: t,
      Component: r
    }
    return jx(o)
  }
}
const Ll = { current: null },
  mm = { current: !1 }
function rw () {
  if (((mm.current = !0), !!Ja))
    if (window.matchMedia) {
      const e = window.matchMedia('(prefers-reduced-motion)'),
        t = () => (Ll.current = e.matches)
      e.addListener(t), t()
    } else Ll.current = !1
}
function iw (e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r]
    if (pe(i)) e.addValue(r, i)
    else if (pe(s)) e.addValue(r, Gr(i, { owner: e }))
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r)
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i)
      } else {
        const o = e.getStaticValue(r)
        e.addValue(r, Gr(o !== void 0 ? o : i, { owner: e }))
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r)
  return t
}
const Nf = new WeakMap(),
  sw = [...ip, de, It],
  ow = e => sw.find(rp(e)),
  Af = [
    'AnimationStart',
    'AnimationComplete',
    'Update',
    'BeforeLayoutMeasure',
    'LayoutMeasure',
    'LayoutAnimationStart',
    'LayoutAnimationComplete'
  ]
class lw {
  scrapeMotionValuesFromProps (t, n, r) {
    return {}
  }
  constructor (
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o
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
      (this.KeyframeResolver = _a),
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
        const d = et.now()
        this.renderScheduledAt < d &&
          ((this.renderScheduledAt = d), z.render(this.render, !1, !0))
      })
    const { latestValues: a, renderState: u } = o
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
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = Os(n)),
      (this.isVariantNode = im(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current))
    const { willChange: c, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    )
    for (const d in f) {
      const g = f[d]
      a[d] !== void 0 && pe(g) && g.set(a[d], !1)
    }
  }
  mount (t) {
    ;(this.current = t),
      Nf.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      mm.current || rw(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === 'never'
          ? !1
          : this.reducedMotionConfig === 'always'
          ? !0
          : Ll.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext)
  }
  unmount () {
    Nf.delete(this.current),
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
      s = n.on('renderRequest', this.scheduleRender)
    let o
    window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), s(), o && o(), n.owner && n.stop()
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
    for (t in Gn) {
      const n = Gn[t]
      if (!n) continue
      const { isEnabled: r, Feature: i } = n
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const s = this.features[t]
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0))
      }
    }
  }
  triggerBuild () {
    this.build(this.renderState, this.latestValues, this.props)
  }
  measureViewportBox () {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Z()
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
    for (let r = 0; r < Af.length; r++) {
      const i = Af[r]
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i])
      const s = 'on' + i,
        o = t[s]
      o && (this.propEventSubscriptions[i] = this.on(i, o))
    }
    ;(this.prevMotionValues = iw(
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
        ((r = Gr(n === null ? void 0 : n, { owner: this })),
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
        (typeof i == 'string' && (bh(i) || qh(i))
          ? (i = parseFloat(i))
          : !ow(i) && It.test(n) && (i = dp(t, n)),
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
      const o = Aa(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      )
      o && (i = o[t])
    }
    if (r && i !== void 0) return i
    const s = this.getBaseTargetFromProps(this.props, t)
    return s !== void 0 && !pe(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t]
  }
  on (t, n) {
    return this.events[t] || (this.events[t] = new Ya()), this.events[t].add(n)
  }
  notify (t, ...n) {
    this.events[t] && this.events[t].notify(...n)
  }
}
class gm extends lw {
  constructor () {
    super(...arguments), (this.KeyframeResolver = hp)
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
function aw (e) {
  return window.getComputedStyle(e)
}
class uw extends gm {
  constructor () {
    super(...arguments),
      (this.type = 'html'),
      (this.applyWillChange = !0),
      (this.renderInstance = sm)
  }
  readValueFromInstance (t, n) {
    if (Ut.has(n)) {
      const r = za(n)
      return (r && r.default) || 0
    } else {
      const r = aw(t),
        i = (tp(n) ? r.getPropertyValue(n) : r[n]) || 0
      return typeof i == 'string' ? i.trim() : i
    }
  }
  measureInstanceViewportBox (t, { transformPagePoint: n }) {
    return Up(t, n)
  }
  build (t, n, r) {
    tu(t, n, r.transformTemplate)
  }
  scrapeMotionValuesFromProps (t, n, r) {
    return ba(t, n, r)
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
class cw extends gm {
  constructor () {
    super(...arguments),
      (this.type = 'svg'),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Z)
  }
  getBaseTargetFromProps (t, n) {
    return t[n]
  }
  readValueFromInstance (t, n) {
    if (Ut.has(n)) {
      const r = za(n)
      return (r && r.default) || 0
    }
    return (n = om.has(n) ? n : _s(n)), t.getAttribute(n)
  }
  scrapeMotionValuesFromProps (t, n, r) {
    return um(t, n, r)
  }
  build (t, n, r) {
    nu(t, n, this.isSVGTag, r.transformTemplate)
  }
  renderInstance (t, n, r, i) {
    lm(t, n, r, i)
  }
  mount (t) {
    ;(this.isSVGTag = ru(t.tagName)), super.mount(t)
  }
}
const fw = (e, t) =>
    qa(e) ? new cw(t) : new uw(t, { allowProjection: e !== D.Fragment }),
  dw = nw({ ...bv, ...Sx, ...cx, ...Px }, fw),
  I = Ky(dw),
  hw = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, staggerChildren: 0.5 }
    }
  },
  ki = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
  },
  pw = () =>
    x.jsx('div', {
      className: 'pb-4 lg:mb-36',
      children: x.jsxs('div', {
        className:
          'flex flex-wrap lg:flex-row-reverse items-center justify-center',
        children: [
          x.jsx('div', {
            className:
              'w-full lg:w-1/2 flex justify-center lg:justify-end lg:p-8',
            children: x.jsx(I.img, {
              src: 'profile.png',
              alt: 'profile photo',
              className: 'border border-stone-900 rounded-full w-4/6',
              initial: { x: 100, opacity: 0 },
              animate: { x: 0, opacity: 1 },
              transition: { duration: 1, delay: 1.5 }
            })
          }),
          x.jsxs(I.div, {
            className:
              'w-full lg:w-1/2 flex flex-col items-center lg:items-start mt-10',
            initial: 'hidden',
            animate: 'visible',
            variants: hw,
            children: [
              x.jsx(I.h2, {
                className: 'pb-2 text-4xl tracking-tighter lg:text-6xl',
                variants: ki,
                children: 'Suraj Jadhav'
              }),
              x.jsx(I.span, {
                className:
                  'bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent',
                variants: ki,
                children: 'Full Stack Developer'
              }),
              x.jsx(I.p, {
                className:
                  'my-2 max-w-lg py-6 sm:text-xl leading-relaxed tracking-tighter text-center lg:text-left',
                variants: ki,
                children:
                  'I’m a Java full-stack developer pursuing a Bachelor of Engineering at Savitribai Phule Pune University. I have experience with Spring, Spring Boot, microservices, Hibernate, REST APIs, and MySQL, and I’m passionate about building scalable backend solutions for impactful software applications.'
              }),
              x.jsx(I.a, {
                href: Hy,
                target: '_blank',
                rel: 'noopener noreferrer',
                download: !0,
                className:
                  'bg-white rounded-full p-4 text-sm text-stone-800 mb-10',
                variants: ki,
                children: 'Download Resume'
              })
            ]
          })
        ]
      })
    }),
  hn = e => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: e,
        ease: 'linear',
        repeat: 1 / 0,
        repeatType: 'reverse'
      }
    }
  }),
  mw = () =>
    x.jsxs('div', {
      className: 'pb-24 ',
      children: [
        x.jsx(I.h2, {
          whileInView: { opacity: 1, y: 0 },
          initial: { opacity: 0, y: -100 },
          transition: { duration: 1.5 },
          className: 'my-20 text-center text-4xl',
          children: 'Technologies'
        }),
        x.jsxs(I.div, {
          whileInView: { opacity: 1, x: 0 },
          initial: { opacity: 0, x: -100 },
          transition: { duration: 1.5 },
          className: 'flex flex-wrap items-center justify-center gap-14',
          children: [
            x.jsx(I.div, {
              initial: 'initial',
              animate: 'animate',
              variants: hn(2.5),
              className: 'lg:text-7xl text-5xl text-red-500',
              children: x.jsx('i', { class: 'fa-brands fa-java' })
            }),
            x.jsx(I.div, {
              initial: 'initial',
              animate: 'animate',
              variants: hn(3),
              className: 'lg:text-7xl text-5xl text-green-600',
              children: x.jsx('i', { className: 'fa-solid fa-leaf' })
            }),
            x.jsx(I.div, {
              initial: 'initial',
              animate: 'animate',
              variants: hn(5),
              className: 'lg:text-7xl text-5xl text-cyan-400 ',
              children: x.jsx('i', { className: 'fa-brands fa-react' })
            }),
            x.jsx(I.div, {
              initial: 'initial',
              animate: 'animate',
              variants: hn(2),
              className: 'lg:text-7xl text-5xl text-green-600',
              children: x.jsx('i', { class: 'fa-brands fa-node-js' })
            }),
            x.jsx(I.div, {
              initial: 'initial',
              animate: 'animate',
              variants: hn(6),
              className: 'lg:text-7xl text-5xl text-blue-900',
              children: x.jsx('i', { class: 'fa-solid fa-database' })
            }),
            x.jsx(I.div, {
              initial: 'initial',
              animate: 'animate',
              variants: hn(4),
              className: 'lg:text-7xl text-5xl text-purple-700',
              children: x.jsx('i', { class: 'fa-brands fa-bootstrap' })
            })
          ]
        })
      ]
    }),
  gw = () =>
    x.jsxs('div', {
      className: 'pb-4',
      children: [
        x.jsx(I.h2, {
          whileInView: { opacity: 1, y: 0 },
          initial: { opacity: 0, y: -100 },
          transition: { duration: 0.5 },
          className: 'my-20 text-center text-4xl',
          children: 'Projects'
        }),
        x.jsx('div', {
          className: '',
          children: x.jsxs('div', {
            className: 'mb-8 flex flex-wrap lg:justify-center',
            children: [
              x.jsx(I.div, {
                whileInView: { opacity: 1, x: 0 },
                initial: { opacity: 0, x: -100 },
                transition: { duration: 1.5 },
                className: 'w-full lg:w-4/12 mx-8',
                children: x.jsx('img', {
                  width: 610,
                  height: 610,
                  src: 'https://assets.techrepublic.com/uploads/2022/10/tr-what-is-data-migration.jpeg',
                  alt: '',
                  className: 'mb-6 rounded'
                })
              }),
              x.jsxs(I.div, {
                whileInView: { opacity: 1, x: 0 },
                initial: { opacity: 0, x: -100 },
                transition: { duration: 1 },
                className: 'w-full max-w-xl lg:w-3/4',
                children: [
                  x.jsxs('h3', {
                    className: 'mb-2 font-semibold text-2xl',
                    children: [
                      'Data Migration Tool ',
                      x.jsx('a', {
                        className: 'text-xl my-auto',
                        href: 'https://github.com/surajj04/DataMigrationTool.git',
                        target: '_blank',
                        children: x.jsx('i', {
                          className: 'fa-solid fa-arrow-up-right-from-square'
                        })
                      })
                    ]
                  }),
                  x.jsx('p', {
                    children:
                      'Data Migration Tool Developed a tool using Spring Batch to read customer data from CSV files, clean it, apply filters, and store it in a MySQL database. Ensured efficient data processing and maintained data integrity throughout the migration process.'
                  }),
                  x.jsxs('div', {
                    className: 'my-3',
                    children: [
                      x.jsx('span', {
                        className:
                          'mr-2 rounded bg-stone-800 p-2 text-sm font-medium text-stone-300',
                        children: 'SpringBoot'
                      }),
                      x.jsx('span', {
                        className:
                          'mr-2 rounded bg-stone-800 p-2 text-sm font-medium text-stone-300',
                        children: 'SpringDataJPA'
                      }),
                      x.jsx('span', {
                        className:
                          'mr-2 rounded bg-stone-800 p-2 text-sm font-medium text-stone-300',
                        children: 'SpringBatch'
                      }),
                      x.jsx('span', {
                        className:
                          'mr-2 rounded bg-stone-800 p-2 text-sm font-medium text-stone-300',
                        children: 'MySQL'
                      })
                    ]
                  })
                ]
              })
            ]
          })
        }),
        x.jsx('div', {
          className: '',
          children: x.jsxs('div', {
            className: 'mb-8 flex flex-wrap lg:justify-center',
            children: [
              x.jsx(I.div, {
                whileInView: { opacity: 1, x: 0 },
                initial: { opacity: 0, x: -100 },
                transition: { duration: 1 },
                className: 'w-full lg:w-4/12 mx-8',
                children: x.jsx('img', {
                  width: 610,
                  height: 610,
                  src: 'ScreenShots/expense-tracking.png',
                  alt: 'Pocket App Screenshot',
                  className: 'mb-6 rounded'
                })
              }),
              x.jsxs(I.div, {
                whileInView: { opacity: 1, x: 0 },
                initial: { opacity: 0, x: -100 },
                transition: { duration: 1 },
                className: 'w-full max-w-xl lg:w-3/4',
                children: [
                  x.jsxs('h3', {
                    className: 'mb-2 font-semibold text-2xl',
                    children: [
                      'Pocket (Expense Tracking Application)  ',
                      x.jsx('a', {
                        className: 'text-xl my-auto',
                        href: 'https://pocket-o89f.onrender.com/',
                        target: '_blank',
                        children: x.jsx('i', {
                          className: 'fa-solid fa-arrow-up-right-from-square'
                        })
                      })
                    ]
                  }),
                  x.jsx('p', {
                    children:
                      'Pocket is an intuitive and user-friendly Expense Tracking web application built with React.js and Spring Boot. It allows users to manage their budgets, add daily expenses, track spending, and generate monthly reports efficiently.'
                  }),
                  x.jsxs('div', {
                    className: 'my-3',
                    children: [
                      x.jsx('span', {
                        className:
                          'mr-2 rounded bg-stone-800 p-2 text-sm font-medium text-stone-300',
                        children: 'React.js'
                      }),
                      x.jsx('span', {
                        className:
                          'mr-2 rounded bg-stone-800 p-2 text-sm font-medium text-stone-300',
                        children: 'Spring Boot'
                      }),
                      x.jsx('span', {
                        className:
                          'mr-2 rounded bg-stone-800 p-2 text-sm font-medium text-stone-300',
                        children: 'MySQL'
                      }),
                      x.jsx('span', {
                        className:
                          'mr-2 rounded bg-stone-800 p-2 text-sm font-medium text-stone-300',
                        children: 'Bootstrap'
                      })
                    ]
                  })
                ]
              })
            ]
          })
        }),
        x.jsx('div', {
          className: '',
          children: x.jsxs('div', {
            className: 'mb-8 flex flex-wrap lg:justify-center',
            children: [
              x.jsx(I.div, {
                whileInView: { opacity: 1, x: 0 },
                initial: { opacity: 0, x: -100 },
                transition: { duration: 1 },
                className: 'w-full lg:w-4/12 mx-8',
                children: x.jsx('img', {
                  width: 610,
                  height: 610,
                  src: 'ScreenShots/attendance-app.png',
                  alt: '',
                  className: 'mb-6 rounded'
                })
              }),
              x.jsxs(I.div, {
                whileInView: { opacity: 1, x: 0 },
                initial: { opacity: 0, x: -100 },
                transition: { duration: 1 },
                className: 'w-full max-w-xl lg:w-3/4',
                children: [
                  x.jsxs('h3', {
                    className: 'mb-2 font-semibold text-2xl',
                    children: [
                      'Smart-Attend ',
                      x.jsx('a', {
                        className: 'text-xl my-auto',
                        href: 'https://smart-attend-beta.vercel.app/',
                        target: '_blank',
                        children: x.jsx('i', {
                          className: 'fa-solid fa-arrow-up-right-from-square'
                        })
                      })
                    ]
                  }),
                  x.jsx('p', {
                    children:
                      'Developed and implemented an Attendance Management System automated attendance tracking, reduced manual entry errors, and decreased processing time.Attendance Management System website, making attendance easier for schools / colleges improved record-keeping and reduced paperwork'
                  }),
                  x.jsxs('div', {
                    className: 'my-3',
                    children: [
                      x.jsx('span', {
                        className:
                          'mr-2 rounded bg-stone-800 p-2 text-sm font-medium text-stone-300',
                        children: 'Java'
                      }),
                      x.jsx('span', {
                        className:
                          'mr-2 rounded bg-stone-800 p-2 text-sm font-medium text-stone-300',
                        children: 'SpringBoot'
                      }),
                      x.jsx('span', {
                        className:
                          'mr-2 rounded bg-stone-800 p-2 text-sm font-medium text-stone-300',
                        children: 'MySql'
                      }),
                      x.jsx('span', {
                        className:
                          'mr-2 rounded bg-stone-800 p-2 text-sm font-medium text-stone-300',
                        children: 'Spring Data JPA'
                      }),
                      x.jsx('span', {
                        className:
                          'mr-2 rounded bg-stone-800 p-2 text-sm font-medium text-stone-300',
                        children: 'React JS'
                      })
                    ]
                  })
                ]
              })
            ]
          })
        }),
        x.jsx('div', {
          className: '',
          children: x.jsxs('div', {
            className: 'mb-8 flex flex-wrap lg:justify-center',
            children: [
              x.jsx(I.div, {
                whileInView: { opacity: 1, x: 0 },
                initial: { opacity: 0, x: -100 },
                transition: { duration: 1 },
                className: 'w-full lg:w-4/12 mx-8',
                children: x.jsx('img', {
                  width: 610,
                  height: 610,
                  src: 'ScreenShots/weather.png',
                  alt: '',
                  className: 'mb-6 rounded'
                })
              }),
              x.jsxs(I.div, {
                whileInView: { opacity: 1, x: 0 },
                initial: { opacity: 0, x: -100 },
                transition: { duration: 1 },
                className: 'w-full max-w-xl lg:w-3/4',
                children: [
                  x.jsxs('h3', {
                    className: 'mb-2 font-semibold text-2xl',
                    children: [
                      'Weather App ',
                      x.jsx('a', {
                        className: 'text-xl my-auto',
                        href: 'https://weather-app-04.netlify.app/',
                        target: '_blank',
                        children: x.jsx('i', {
                          className: 'fa-solid fa-arrow-up-right-from-square'
                        })
                      })
                    ]
                  }),
                  x.jsx('p', {
                    children:
                      "The Weather App fetches current weather data and forecasts worldwide using the OpenWeather API. It offers a simple interface for users to check temperature, humidity, and other essential information for different locations. Built with HTML, CSS, and JavaScript, it's user-friendly across devices."
                  }),
                  x.jsxs('div', {
                    className: 'my-3',
                    children: [
                      x.jsx('span', {
                        className:
                          'mr-2 rounded bg-stone-800 p-2 text-sm font-medium text-stone-300',
                        children: 'HTML'
                      }),
                      x.jsx('span', {
                        className:
                          'mr-2 rounded bg-stone-800 p-2 text-sm font-medium text-stone-300',
                        children: 'CSS'
                      }),
                      x.jsx('span', {
                        className:
                          'mr-2 rounded bg-stone-800 p-2 text-sm font-medium text-stone-300',
                        children: 'Javascript'
                      }),
                      x.jsx('span', {
                        className:
                          'mr-2 rounded bg-stone-800 p-2 text-sm font-medium text-stone-300',
                        children: 'OpenWeather API'
                      })
                    ]
                  })
                ]
              })
            ]
          })
        })
      ]
    }),
  yw = () =>
    x.jsxs('div', {
      className: 'pb-4',
      children: [
        x.jsx(I.h2, {
          whileInView: { opacity: 1, y: 0 },
          initial: { opacity: 0, y: -100 },
          transition: { duration: 0.5 },
          className: 'my-20 text-center text-4xl',
          children: 'Education'
        }),
        x.jsxs('div', {
          className: '',
          children: [
            x.jsxs('div', {
              className: 'mb-8 flex flex-wrap lg:justify-center',
              children: [
                x.jsx(I.div, {
                  whileInView: { opacity: 1, x: 0 },
                  initial: { opacity: 0, x: -100 },
                  transition: { duration: 1 },
                  className: 'w-full lg:w-1/4',
                  children: x.jsx('p', {
                    className: 'mb-2 text-sm text-stone-400',
                    children: '2021 - 2025'
                  })
                }),
                x.jsxs(I.div, {
                  whileInView: { opacity: 1, x: 0 },
                  initial: { opacity: 0, x: 100 },
                  transition: { duration: 1 },
                  className: 'w-full max-w-full lg:w-3/4',
                  children: [
                    x.jsxs('h3', {
                      className: 'mb-2 font-semibold',
                      children: [
                        'Parvatibai Genba Moze College of Engineering',
                        x.jsx('span', {
                          className: 'text-sm text-stone-400 italic',
                          children: '( Savitribai Phule Pune University )'
                        })
                      ]
                    }),
                    x.jsxs('p', {
                      className: 'mb-4 text-stone-400 italic',
                      children: [
                        '— Bachelor of Engineering in Computer Engineering',
                        ' '
                      ]
                    }),
                    x.jsx('div', {
                      className: '',
                      children: x.jsx('span', {
                        className:
                          'mr-2 rounded bg-stone-800 px-2 py-1 text-sm font-medium text-stone-300',
                        children: 'CGPA - 7.60'
                      })
                    })
                  ]
                })
              ]
            }),
            x.jsxs('div', {
              className: 'mb-8 flex flex-wrap lg:justify-center',
              children: [
                x.jsx(I.div, {
                  whileInView: { opacity: 1, x: 0 },
                  initial: { opacity: 0, x: -100 },
                  transition: { duration: 1 },
                  className: 'w-full lg:w-1/4',
                  children: x.jsx('p', {
                    className: 'mb-2 text-sm text-stone-400',
                    children: '2019 - 2021'
                  })
                }),
                x.jsxs(I.div, {
                  whileInView: { opacity: 1, x: 0 },
                  initial: { opacity: 0, x: 100 },
                  transition: { duration: 1 },
                  className: 'w-full max-w-full lg:w-3/4',
                  children: [
                    x.jsx('h3', {
                      className: 'mb-2 font-semibold',
                      children:
                        'Marathwada Mitra Mandal Collage of Commerce & Science  '
                    }),
                    x.jsx('p', {
                      className: 'mb-4 text-stone-400 italic',
                      children: '— Higher Secondary School Certificate (HSC)'
                    }),
                    x.jsx('div', {
                      className: '',
                      children: x.jsx('span', {
                        className:
                          'mr-2 rounded bg-stone-800 px-2 py-1 text-sm font-medium text-stone-300',
                        children: 'Percentage - 72.17%'
                      })
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    }),
  vw = () =>
    x.jsxs('div', {
      className: 'border-t border-stone-900 pb-20',
      children: [
        x.jsx(I.h2, {
          whileInView: { opacity: 1, y: 0 },
          initial: { opacity: 1, y: -100 },
          transition: { duration: 0.5 },
          className: 'my-10 text-center text-4xl',
          children: 'Get in Touch'
        }),
        x.jsx('div', {
          className: 'text-center tracking-tighter',
          children: x.jsx('a', {
            href: 'mailtp:surajjadhav04@outlook.com',
            className: 'border-b',
            children: 'surajjadhav04@outlook.com'
          })
        })
      ]
    }),
  xw = () =>
    x.jsxs('div', {
      className: 'overflow-x-hidden text-stone-300 antialiased',
      children: [
        x.jsx('div', {
          className: 'fixed inset-0 -z-10',
          children: x.jsx('div', {
            class:
              'absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'
          })
        }),
        x.jsxs('div', {
          className: 'container mx-auto px-8',
          children: [
            x.jsx(Wy, {}),
            x.jsx(pw, {}),
            x.jsx(yw, {}),
            x.jsx(mw, {}),
            x.jsx(gw, {}),
            x.jsx(vw, {})
          ]
        })
      ]
    })
Uh(document.getElementById('root')).render(
  x.jsx(D.StrictMode, { children: x.jsx(xw, {}) })
)
