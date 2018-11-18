/** *** */ (function (modules) { // webpackBootstrap
/** *** */ 	// The module cache
/** *** */ 	const installedModules = {};
  /** *** */
  /** *** */ 	// The require function
  /** *** */ 	function __webpack_require__(moduleId) {
    /** *** */
    /** *** */ 		// Check if module is in cache
    /** *** */ 		if (installedModules[moduleId]) {
      /** *** */ 			return installedModules[moduleId].exports;
      /** *** */ 		}
    /** *** */ 		// Create a new module (and put it into the cache)
    /** *** */ 		const module = installedModules[moduleId] = {
      /** *** */ 			i: moduleId,
      /** *** */ 			l: false,
      /** *** */ 			exports: {},
      /** *** */ 		};
    /** *** */
    /** *** */ 		// Execute the module function
    /** *** */ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /** *** */
    /** *** */ 		// Flag the module as loaded
    /** *** */ 		module.l = true;
    /** *** */
    /** *** */ 		// Return the exports of the module
    /** *** */ 		return module.exports;
    /** *** */ 	}
  /** *** */
  /** *** */
  /** *** */ 	// expose the modules object (__webpack_modules__)
  /** *** */ 	__webpack_require__.m = modules;
  /** *** */
  /** *** */ 	// expose the module cache
  /** *** */ 	__webpack_require__.c = installedModules;
  /** *** */
  /** *** */ 	// define getter function for harmony exports
  /** *** */ 	__webpack_require__.d = function (exports, name, getter) {
    /** *** */ 		if (!__webpack_require__.o(exports, name)) {
      /** *** */ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /** *** */ 		}
    /** *** */ 	};
  /** *** */
  /** *** */ 	// define __esModule on exports
  /** *** */ 	__webpack_require__.r = function (exports) {
    /** *** */ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /** *** */ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /** *** */ 		}
    /** *** */ 		Object.defineProperty(exports, '__esModule', { value: true });
    /** *** */ 	};
  /** *** */
  /** *** */ 	// create a fake namespace object
  /** *** */ 	// mode & 1: value is a module id, require it
  /** *** */ 	// mode & 2: merge all properties of value into the ns
  /** *** */ 	// mode & 4: return value when already ns object
  /** *** */ 	// mode & 8|1: behave like require
  /** *** */ 	__webpack_require__.t = function (value, mode) {
    /** *** */ 		if (mode & 1) value = __webpack_require__(value);
    /** *** */ 		if (mode & 8) return value;
    /** *** */ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    /** *** */ 		const ns = Object.create(null);
    /** *** */ 		__webpack_require__.r(ns);
    /** *** */ 		Object.defineProperty(ns, 'default', { enumerable: true, value });
    /** *** */ 		if (mode & 2 && typeof value !== 'string') for (const key in value) __webpack_require__.d(ns, key, (key => value[key]).bind(null, key));
    /** *** */ 		return ns;
    /** *** */ 	};
  /** *** */
  /** *** */ 	// getDefaultExport function for compatibility with non-harmony modules
  /** *** */ 	__webpack_require__.n = function (module) {
    /** *** */ 		const getter = module && module.__esModule ?
      /** *** */ 			function getDefault() { return module.default; } :
      /** *** */ 			function getModuleExports() { return module; };
    /** *** */ 		__webpack_require__.d(getter, 'a', getter);
    /** *** */ 		return getter;
    /** *** */ 	};
  /** *** */
  /** *** */ 	// Object.prototype.hasOwnProperty.call
  /** *** */ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  /** *** */
  /** *** */ 	// __webpack_public_path__
  /** *** */ 	__webpack_require__.p = '';
  /** *** */
  /** *** */
  /** *** */ 	// Load entry module and return exports
  /** *** */ 	return __webpack_require__(__webpack_require__.s = '5a74');
/** *** */ }({

/** */ 2350(module, exports) {
    /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
    // css base code, injected by the css-loader
    module.exports = function (useSourceMap) {
      const list = [];

      // return the list of modules as css string
      list.toString = function toString() {
        return this.map((item) => {
          const content = cssWithMappingToString(item, useSourceMap);
          if (item[2]) {
            return `@media ${item[2]}{${content}}`;
          }
          return content;
        }).join('');
      };

      // import a list of modules into the list
      list.i = function (modules, mediaQuery) {
        if (typeof modules === 'string') { modules = [[null, modules, '']]; }
        const alreadyImportedModules = {};
        for (var i = 0; i < this.length; i++) {
          const id = this[i][0];
          if (typeof id === 'number') { alreadyImportedModules[id] = true; }
        }
        for (i = 0; i < modules.length; i++) {
          const item = modules[i];
          // skip already imported module
          // this implementation is not 100% perfect for weird media query combinations
          //  when a module is imported multiple times with different media queries.
          //  I hope this will never occur (Hey this way we have smaller bundles)
          if (typeof item[0] !== 'number' || !alreadyImportedModules[item[0]]) {
            if (mediaQuery && !item[2]) {
              item[2] = mediaQuery;
            } else if (mediaQuery) {
              item[2] = `(${item[2]}) and (${mediaQuery})`;
            }
            list.push(item);
          }
        }
      };
      return list;
    };

    function cssWithMappingToString(item, useSourceMap) {
      const content = item[1] || '';
      const cssMapping = item[3];
      if (!cssMapping) {
        return content;
      }

      if (useSourceMap && typeof btoa === 'function') {
        const sourceMapping = toComment(cssMapping);
        const sourceURLs = cssMapping.sources.map(source => `/*# sourceURL=${cssMapping.sourceRoot}${source} */`);

        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
      }

      return [content].join('\n');
    }

    // Adapted from convert-source-map (MIT)
    function toComment(sourceMap) {
      // eslint-disable-next-line no-undef
      const base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
      const data = `sourceMappingURL=data:application/json;charset=utf-8;base64,${base64}`;

      return `/*# ${data} */`;
    }
    /** */ },

  /** */ '5a74':
  /** */ (function (module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);

    // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
    // This file is imported into lib/wc client bundles.

    if (typeof window !== 'undefined') {
      let i;
      if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
      }
    }

    // Indicate to webpack that this file can be concatenated
    /* harmony default export */ const setPublicPath = (null);

    // EXTERNAL MODULE: external "Vue"
    const external_Vue_ = __webpack_require__('8bbf');
    const external_Vue_default = /* #__PURE__ */__webpack_require__.n(external_Vue_);

    // CONCATENATED MODULE: ./node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
    const camelizeRE = /-(\w)/g;
    const camelize = str => str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));

    const hyphenateRE = /\B([A-Z])/g;
    const hyphenate = str => str.replace(hyphenateRE, '-$1').toLowerCase();

    function getInitialProps(propsList) {
      const res = {};
      propsList.forEach((key) => {
        res[key] = undefined;
      });
      return res;
    }

    function injectHook(options, key, hook) {
      options[key] = [].concat(options[key] || []);
      options[key].unshift(hook);
    }

    function callHooks(vm, hook) {
      if (vm) {
        const hooks = vm.$options[hook] || [];
        hooks.forEach((hook) => {
          hook.call(vm);
        });
      }
    }

    function createCustomEvent(name, args) {
      return new CustomEvent(name, {
        bubbles: false,
        cancelable: false,
        detail: args,
      });
    }

    const isBoolean = val => /function Boolean/.test(String(val));
    const isNumber = val => /function Number/.test(String(val));

    function convertAttributeValue(value, name, { type } = {}) {
      if (isBoolean(type)) {
        if (value === 'true' || value === 'false') {
          return value === 'true';
        }
        if (value === '' || value === name) {
          return true;
        }
        return value != null;
      } else if (isNumber(type)) {
        const parsed = parseFloat(value, 10);
        return isNaN(parsed) ? value : parsed;
      }
      return value;
    }

    function toVNodes(h, children) {
      const res = [];
      for (let i = 0, l = children.length; i < l; i++) {
        res.push(toVNode(h, children[i]));
      }
      return res;
    }

    function toVNode(h, node) {
      if (node.nodeType === 3) {
        return node.data.trim() ? node.data : null;
      } else if (node.nodeType === 1) {
        const data = {
          attrs: getAttributes(node),
          domProps: {
            innerHTML: node.innerHTML,
          },
        };
        if (data.attrs.slot) {
          data.slot = data.attrs.slot;
          delete data.attrs.slot;
        }
        return h(node.tagName, data);
      }
      return null;
    }

    function getAttributes(node) {
      const res = {};
      for (let i = 0, l = node.attributes.length; i < l; i++) {
        const attr = node.attributes[i];
        res[attr.nodeName] = attr.nodeValue;
      }
      return res;
    }

    function wrap(Vue, Component) {
      const isAsync = typeof Component === 'function' && !Component.cid;
      let isInitialized = false;
      let hyphenatedPropsList;
      let camelizedPropsList;
      let camelizedPropsMap;

      function initialize(Component) {
        if (isInitialized) return;

        const options = typeof Component === 'function'
          ? Component.options
          : Component;

        // extract props info
        const propsList = Array.isArray(options.props)
          ? options.props
          : Object.keys(options.props || {});
        hyphenatedPropsList = propsList.map(hyphenate);
        camelizedPropsList = propsList.map(camelize);
        const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
        camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
          map[key] = originalPropsAsObject[propsList[i]];
          return map;
        }, {});

        // proxy $emit to native DOM events
        injectHook(options, 'beforeCreate', function () {
          const emit = this.$emit;
          this.$emit = (name, ...args) => {
            this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
            return emit.call(this, name, ...args);
          };
        });

        injectHook(options, 'created', function () {
          // sync default props values to wrapper on created
          camelizedPropsList.forEach((key) => {
            this.$root.props[key] = this[key];
          });
        });

        // proxy props as Element properties
        camelizedPropsList.forEach((key) => {
          Object.defineProperty(CustomElement.prototype, key, {
            get() {
              return this._wrapper.props[key];
            },
            set(newVal) {
              this._wrapper.props[key] = newVal;
            },
            enumerable: false,
            configurable: true,
          });
        });

        isInitialized = true;
      }

      function syncAttribute(el, key) {
        const camelized = camelize(key);
        const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
        el._wrapper.props[camelized] = convertAttributeValue(
          value,
          key,
          camelizedPropsMap[camelized],
        );
      }

      class CustomElement extends HTMLElement {
        constructor() {
          super();
          this.attachShadow({ mode: 'open' });

          const wrapper = this._wrapper = new Vue({
            name: 'shadow-root',
            customElement: this,
            shadowRoot: this.shadowRoot,
            data() {
              return {
                props: {},
                slotChildren: [],
              };
            },
            render(h) {
              return h(Component, {
                ref: 'inner',
                props: this.props,
              }, this.slotChildren);
            },
          });

          // Use MutationObserver to react to future attribute & slot content change
          const observer = new MutationObserver((mutations) => {
            let hasChildrenChange = false;
            for (let i = 0; i < mutations.length; i++) {
              const m = mutations[i];
              if (isInitialized && m.type === 'attributes' && m.target === this) {
                syncAttribute(this, m.attributeName);
              } else {
                hasChildrenChange = true;
              }
            }
            if (hasChildrenChange) {
              wrapper.slotChildren = Object.freeze(toVNodes(
                wrapper.$createElement,
                this.childNodes,
              ));
            }
          });
          observer.observe(this, {
            childList: true,
            subtree: true,
            characterData: true,
            attributes: true,
          });
        }

        get vueComponent() {
          return this._wrapper.$refs.inner;
        }

        connectedCallback() {
          const wrapper = this._wrapper;
          if (!wrapper._isMounted) {
            // initialize attributes
            const syncInitialAttributes = () => {
              wrapper.props = getInitialProps(camelizedPropsList);
              hyphenatedPropsList.forEach((key) => {
                syncAttribute(this, key);
              });
            };

            if (isInitialized) {
              syncInitialAttributes();
            } else {
              // async & unresolved
              Component().then((resolved) => {
                if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
                  resolved = resolved.default;
                }
                initialize(resolved);
                syncInitialAttributes();
              });
            }
            // initialize children
            wrapper.slotChildren = Object.freeze(toVNodes(
              wrapper.$createElement,
              this.childNodes,
            ));
            wrapper.$mount();
            this.shadowRoot.appendChild(wrapper.$el);
          } else {
            callHooks(this.vueComponent, 'activated');
          }
        }

        disconnectedCallback() {
          callHooks(this.vueComponent, 'deactivated');
        }
      }

      if (!isAsync) {
        initialize(Component);
      }

      return CustomElement;
    }

    /* harmony default export */ const vue_wc_wrapper = (wrap);

    // EXTERNAL MODULE: ./node_modules/css-loader/lib/css-base.js
    const css_base = __webpack_require__('2350');

    // CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
    /**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
    function listToStyles(parentId, list) {
      const styles = [];
      const newStyles = {};
      for (let i = 0; i < list.length; i++) {
        const item = list[i];
        const id = item[0];
        const css = item[1];
        const media = item[2];
        const sourceMap = item[3];
        const part = {
          id: `${parentId}:${i}`,
          css,
          media,
          sourceMap,
        };
        if (!newStyles[id]) {
          styles.push(newStyles[id] = { id, parts: [part] });
        } else {
          newStyles[id].parts.push(part);
        }
      }
      return styles;
    }

    // CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js


    function addStylesToShadowDOM(parentId, list, shadowRoot) {
      const styles = listToStyles(parentId, list);
      addStyles(styles, shadowRoot);
    }

    /*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

    function addStyles(styles /* Array<StyleObject> */, shadowRoot) {
      const injectedStyles =
    shadowRoot._injectedStyles ||
    (shadowRoot._injectedStyles = {});
      for (let i = 0; i < styles.length; i++) {
        const item = styles[i];
        const style = injectedStyles[item.id];
        if (!style) {
          for (let j = 0; j < item.parts.length; j++) {
            addStyle(item.parts[j], shadowRoot);
          }
          injectedStyles[item.id] = true;
        }
      }
    }

    function createStyleElement(shadowRoot) {
      const styleElement = document.createElement('style');
      styleElement.type = 'text/css';
      shadowRoot.appendChild(styleElement);
      return styleElement;
    }

    function addStyle(obj /* StyleObjectPart */, shadowRoot) {
      const styleElement = createStyleElement(shadowRoot);
      let css = obj.css;
      const media = obj.media;
      const sourceMap = obj.sourceMap;

      if (media) {
        styleElement.setAttribute('media', media);
      }

      if (sourceMap) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        css += `\n/*# sourceURL=${sourceMap.sources[0]} */`;
        // http://stackoverflow.com/a/26603875
        css += `\n/*# sourceMappingURL=data:application/json;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))} */`;
      }

      if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText = css;
      } else {
        while (styleElement.firstChild) {
          styleElement.removeChild(styleElement.firstChild);
        }
        styleElement.appendChild(document.createTextNode(css));
      }
    }

    // CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
    /* globals __VUE_SSR_CONTEXT__ */

    // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
    // This module is a runtime utility for cleaner component module output and will
    // be included in the final webpack user bundle.

    function normalizeComponent(
      scriptExports,
      render,
      staticRenderFns,
      functionalTemplate,
      injectStyles,
      scopeId,
      moduleIdentifier, /* server only */
      shadowMode, /* vue-cli only */
    ) {
      // Vue.extend constructor export interop
      const options = typeof scriptExports === 'function'
        ? scriptExports.options
        : scriptExports;

      // render functions
      if (render) {
        options.render = render;
        options.staticRenderFns = staticRenderFns;
        options._compiled = true;
      }

      // functional template
      if (functionalTemplate) {
        options.functional = true;
      }

      // scopedId
      if (scopeId) {
        options._scopeId = `data-v-${scopeId}`;
      }

      let hook;
      if (moduleIdentifier) { // server build
        hook = function (context) {
          // 2.3 injection
          context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
          // 2.2 with runInNewContext: true
          if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
            context = __VUE_SSR_CONTEXT__;
          }
          // inject component styles
          if (injectStyles) {
            injectStyles.call(this, context);
          }
          // register component module identifier for async chunk inferrence
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
      } else if (injectStyles) {
        hook = shadowMode
          ? function () { injectStyles.call(this, this.$root.$options.shadowRoot); }
          : injectStyles;
      }

      if (hook) {
        if (options.functional) {
          // for template-only hot-reload because in that case the render fn doesn't
          // go through the normalizer
          options._injectStyles = hook;
          // register for functioal component in vue file
          const originalRender = options.render;
          options.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = options.beforeCreate;
          options.beforeCreate = existing
            ? [].concat(existing, hook)
            : [hook];
        }
      }

      return {
        exports: scriptExports,
        options,
      };
    }

    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53bde044-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Card.vue?vue&type=template&id=7e0f7383&shadow
    const render = function () {
      const _vm = this; const _h = _vm.$createElement; const _c = _vm._self._c || _h; return _c('v-flex', {
        attrs: {
          'my-3': '', xs12: '', md4: '', 'offset-md4': '', sm4: '', 'offset-sm4': '',
        },
      }, [_c('v-card', {
        attrs: {
          dark: _vm.dark, light: _vm.light, color: _vm.color, raised: _vm.raised, ripple: _vm.ripple, to: _vm.to,
        },
      }, [_vm._t('image'), _c('v-card-title', { attrs: { 'primary-title': '' } }, [_c('div', [(_vm.title) ? _c('div', { staticClass: 'headline' }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), (_vm.subtitle) ? _c('span', { staticClass: 'grey--text' }, [_vm._v(_vm._s(_vm.subtitle)), _c('br'), _c('br')]) : _c('br'), _vm._t('default')], 2)]), (_vm.extend || this.$slots.actions) ? _c('v-card-actions', [_vm._t('actions'), (_vm.extend) ? [_c('v-spacer'), _c('v-btn', { attrs: { icon: '' }, on: { click($event) { _vm.show = !_vm.show; } } }, [_c('v-icon', [_vm._v(_vm._s(_vm.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up'))])], 1)] : _vm._e()], 2) : _vm._e(), (_vm.extend) ? _c('v-slide-y-transition', [(_vm.show) ? _c('v-card-text', [_vm._v(_vm._s(_vm.extend))]) : _vm._e()], 1) : _vm._e()], 2)], 1);
    };
    const staticRenderFns = [];


    // CONCATENATED MODULE: ./src/components/Card.vue?vue&type=template&id=7e0f7383&shadow

    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--11-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Card.vue?vue&type=script&lang=js&shadow
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    /* harmony default export */ const Cardvue_type_script_lang_js_shadow = ({
      props: {
        title: String,
        subtitle: String,
        color: String,
        dark: Boolean,
        light: Boolean,
        ripple: Boolean,
        raised: Boolean,
        extend: Boolean,
        to: String,
      },
      data: function data() {
        return {
          show: false,
        };
      },
    });
    // CONCATENATED MODULE: ./src/components/Card.vue?vue&type=script&lang=js&shadow
    /* harmony default export */ const components_Cardvue_type_script_lang_js_shadow = (Cardvue_type_script_lang_js_shadow);
    // CONCATENATED MODULE: ./src/components/Card.vue?shadow


    /* normalize component */

    const component = normalizeComponent(
      components_Cardvue_type_script_lang_js_shadow,
      render,
      staticRenderFns,
      false,
      null,
      null,
      null
      , true,
    );

    component.options.__file = 'Card.vue';
    /* harmony default export */ const Cardshadow = (component.exports);
    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53bde044-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ExpansionPanel.vue?vue&type=template&id=26a3cee0&shadow
    const ExpansionPanelvue_type_template_id_26a3cee0_shadow_render = function () {
      const _vm = this; const _h = _vm.$createElement; const _c = _vm._self._c || _h; return _c('v-expansion-panel', {
        attrs: {
          dark: _vm.dark, light: _vm.light, disabled: _vm.disabled, expand: _vm.expand, focusable: _vm.focusable, inset: _vm.inset, popout: _vm.popout, readonly: _vm.readonly,
        },
      }, _vm._l((_vm.items), (item, i) => _c('v-expansion-panel-content', { key: i }, [_c('div', { attrs: { slot: 'header' }, slot: 'header' }, [_vm._v(_vm._s(item.header))]), _c('v-card', [_c('v-card-text', [_vm._v(_vm._s(item.content))])], 1)], 1)));
    };
    const ExpansionPanelvue_type_template_id_26a3cee0_shadow_staticRenderFns = [];


    // CONCATENATED MODULE: ./src/components/ExpansionPanel.vue?vue&type=template&id=26a3cee0&shadow

    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--11-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ExpansionPanel.vue?vue&type=script&lang=js&shadow
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    /* harmony default export */ const ExpansionPanelvue_type_script_lang_js_shadow = ({
      props: {
        items: {
          type: Array,
          default: function _default() {
            return [{
              header: 'One',
              content: 'Content One',
            }, {
              header: 'Two',
              content: 'Content Two',
            }, {
              header: 'Three',
              content: 'Content Three',
            }, {
              header: 'Four',
              content: 'Content Four',
            }, {
              header: 'Five',
              content: 'Content Five',
            }];
          },
        },
        dark: Boolean,
        light: Boolean,
        disabled: Boolean,
        expand: Boolean,
        focusable: Boolean,
        inset: Boolean,
        popout: Boolean,
        readonly: Boolean,
        icon: Boolean,
      },
    });
    // CONCATENATED MODULE: ./src/components/ExpansionPanel.vue?vue&type=script&lang=js&shadow
    /* harmony default export */ const components_ExpansionPanelvue_type_script_lang_js_shadow = (ExpansionPanelvue_type_script_lang_js_shadow);
    // CONCATENATED MODULE: ./src/components/ExpansionPanel.vue?shadow


    /* normalize component */

    const ExpansionPanelshadow_component = normalizeComponent(
      components_ExpansionPanelvue_type_script_lang_js_shadow,
      ExpansionPanelvue_type_template_id_26a3cee0_shadow_render,
      ExpansionPanelvue_type_template_id_26a3cee0_shadow_staticRenderFns,
      false,
      null,
      null,
      null
      , true,
    );

    ExpansionPanelshadow_component.options.__file = 'ExpansionPanel.vue';
    /* harmony default export */ const ExpansionPanelshadow = (ExpansionPanelshadow_component.exports);
    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53bde044-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Footer.vue?vue&type=template&id=3f00d1cb&shadow
    const Footervue_type_template_id_3f00d1cb_shadow_render = function () {
      const _vm = this; const _h = _vm.$createElement; const _c = _vm._self._c || _h; return _c('v-footer', { attrs: { height: 'auto', color: _vm.tabColor } }, [_c('v-layout', { attrs: { 'justify-center': '', row: '', wrap: '' } }, [_vm._l((_vm.links), link => _c('v-btn', { key: link, attrs: { color: 'white', flat: '', round: '' } }, [_vm._v(`\n      ${_vm._s(link)}\n    `)])), _c('v-flex', {
        attrs: {
          primary: '', 'lighten-2': '', 'py-3': '', 'text-xs-center': '', 'white--text': '', xs12: '',
        },
      }, [_vm._v('\n      ©2018 — '), _c('strong', [_vm._v(_vm._s(_vm.copyright))])])], 2)], 1);
    };
    const Footervue_type_template_id_3f00d1cb_shadow_staticRenderFns = [];


    // CONCATENATED MODULE: ./src/components/Footer.vue?vue&type=template&id=3f00d1cb&shadow

    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--11-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Footer.vue?vue&type=script&lang=js&shadow
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    /* harmony default export */ const Footervue_type_script_lang_js_shadow = ({
      props: {
        tabColor: {
          type: String,
          default: 'primary lighten-1',
        },
        copyright: {
          type: String,
          default: 'Your Organisation',
        },
        links: {
          type: Array,
          default: function _default() {
            return ['Default 1', 'Default 2', 'Default 3'];
          },
        },
      },
    });
    // CONCATENATED MODULE: ./src/components/Footer.vue?vue&type=script&lang=js&shadow
    /* harmony default export */ const components_Footervue_type_script_lang_js_shadow = (Footervue_type_script_lang_js_shadow);
    // CONCATENATED MODULE: ./src/components/Footer.vue?shadow


    /* normalize component */

    const Footershadow_component = normalizeComponent(
      components_Footervue_type_script_lang_js_shadow,
      Footervue_type_template_id_3f00d1cb_shadow_render,
      Footervue_type_template_id_3f00d1cb_shadow_staticRenderFns,
      false,
      null,
      null,
      null
      , true,
    );

    Footershadow_component.options.__file = 'Footer.vue';
    /* harmony default export */ const Footershadow = (Footershadow_component.exports);
    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53bde044-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navbar.vue?vue&type=template&id=4340c301&shadow
    const Navbarvue_type_template_id_4340c301_shadow_render = function () {
      const _vm = this; const _h = _vm.$createElement; const _c = _vm._self._c || _h; return _c('v-toolbar', {
        attrs: {
          dark: _vm.dark, light: _vm.light, color: _vm.color, dense: _vm.dense, flat: _vm.flat,
        },
      }, [(_vm.sidebar) ? _c('v-toolbar-side-icon') : _vm._e(), _c('v-toolbar-title', { staticClass: 'white--text' }, [_vm._v(_vm._s(_vm.title))]), _c('v-spacer'), _vm._t('default', [_c('v-btn', { attrs: { flat: '' } }, [_vm._v('Link One')]), _c('v-btn', { attrs: { flat: '' } }, [_vm._v('Link Two')]), _c('v-btn', { attrs: { flat: '' } }, [_vm._v('Link Three')]), _c('v-btn', { attrs: { icon: '' } }, [_c('v-icon', [_vm._v('search')])], 1), _c('v-btn', { attrs: { icon: '' } }, [_c('v-icon', [_vm._v('apps')])], 1), _c('v-btn', { attrs: { icon: '' } }, [_c('v-icon', [_vm._v('refresh')])], 1), _c('v-btn', { attrs: { icon: '' } }, [_c('v-icon', [_vm._v('more_vert')])], 1)])], 2);
    };
    const Navbarvue_type_template_id_4340c301_shadow_staticRenderFns = [];


    // CONCATENATED MODULE: ./src/components/Navbar.vue?vue&type=template&id=4340c301&shadow

    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--11-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navbar.vue?vue&type=script&lang=js&shadow
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    /* harmony default export */ const Navbarvue_type_script_lang_js_shadow = ({
      props: {
        title: {
          type: String,
          default: 'Example Title',
        },
        dark: {
          type: Boolean,
          default: true,
        },
        light: Boolean,
        color: {
          type: String,
          default: 'primary',
        },
        dense: Boolean,
        flat: Boolean,
        sidebar: Boolean,
      },
    });
    // CONCATENATED MODULE: ./src/components/Navbar.vue?vue&type=script&lang=js&shadow
    /* harmony default export */ const components_Navbarvue_type_script_lang_js_shadow = (Navbarvue_type_script_lang_js_shadow);
    // CONCATENATED MODULE: ./src/components/Navbar.vue?shadow


    /* normalize component */

    const Navbarshadow_component = normalizeComponent(
      components_Navbarvue_type_script_lang_js_shadow,
      Navbarvue_type_template_id_4340c301_shadow_render,
      Navbarvue_type_template_id_4340c301_shadow_staticRenderFns,
      false,
      null,
      null,
      null
      , true,
    );

    Navbarshadow_component.options.__file = 'Navbar.vue';
    /* harmony default export */ const Navbarshadow = (Navbarshadow_component.exports);
    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53bde044-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Snackbar.vue?vue&type=template&id=90d66fe4&shadow
    const Snackbarvue_type_template_id_90d66fe4_shadow_render = function () {
      const _vm = this; const _h = _vm.$createElement; const _c = _vm._self._c || _h; return _c('v-snackbar', {
        attrs: {
          bottom: _vm.y === 'bottom', left: _vm.x === 'left', 'multi-line': _vm.mode === 'multi-line', right: _vm.x === 'right', timeout: 0, top: _vm.y === 'top', vertical: _vm.mode === 'vertical',
        },
        model: { value: (_vm.visible), callback($$v) { _vm.visible = $$v; }, expression: 'visible' },
      }, [_vm._t('default'), _c('v-btn', { attrs: { flat: '', color: 'pink' }, on: { click: _vm.resetSnackbar } }, [_vm._t('close', [_vm._v('Close')])], 2)], 2);
    };
    const Snackbarvue_type_template_id_90d66fe4_shadow_staticRenderFns = [];


    // CONCATENATED MODULE: ./src/components/Snackbar.vue?vue&type=template&id=90d66fe4&shadow

    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--11-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Snackbar.vue?vue&type=script&lang=js&shadow
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    /* harmony default export */ const Snackbarvue_type_script_lang_js_shadow = ({
      props: {
        visible: {
          type: Boolean,
          default: false,
        },
        y: {
          type: String,
          default: 'bottom',
        },
        x: String,
        mode: String,
      },
      methods: {
        resetSnackbar: function resetSnackbar() {
          this.visible = false;
          this.$emit('closed');
        },
      },
    });
    // CONCATENATED MODULE: ./src/components/Snackbar.vue?vue&type=script&lang=js&shadow
    /* harmony default export */ const components_Snackbarvue_type_script_lang_js_shadow = (Snackbarvue_type_script_lang_js_shadow);
    // CONCATENATED MODULE: ./src/components/Snackbar.vue?shadow


    /* normalize component */

    const Snackbarshadow_component = normalizeComponent(
      components_Snackbarvue_type_script_lang_js_shadow,
      Snackbarvue_type_template_id_90d66fe4_shadow_render,
      Snackbarvue_type_template_id_90d66fe4_shadow_staticRenderFns,
      false,
      null,
      null,
      null
      , true,
    );

    Snackbarshadow_component.options.__file = 'Snackbar.vue';
    /* harmony default export */ const Snackbarshadow = (Snackbarshadow_component.exports);
    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53bde044-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Table.vue?vue&type=template&id=ecc59e0a&shadow
    const Tablevue_type_template_id_ecc59e0a_shadow_render = function () {
      const _vm = this; const _h = _vm.$createElement; const _c = _vm._self._c || _h; return _c('v-card', [(_vm.hasTitle) ? [_c('v-card-title', [_vm._t('default'), (_vm.search) ? [_c('v-spacer'), _c('v-text-field', { attrs: { 'append-icon': 'search', label: 'Search', 'hide-details': '' }, model: { value: (_vm.query), callback($$v) { _vm.query = $$v; }, expression: 'query' } })] : _vm._e()], 2)] : _vm._e(), _c('v-data-table', {
        attrs: { headers: _vm.headers, items: _vm.items, search: _vm.query },
        scopedSlots: _vm._u([{
          key: 'items',
          fn(ref) {
            const item = ref.item;
            return _vm._l((_vm.headers), (header, i) => _c('td', { key: i, class: header.align ? `text-md-${header.align}` : '' }, [_vm._v(`\n        ${_vm._s(item[header.value])}\n      `)]));
          },
        }]),
      }, [_c('v-alert', {
        attrs: {
          slot: 'no-results', value: true, color: 'error', icon: 'warning',
        },
        slot: 'no-results',
      }, [_vm._v(`\n      Your search for "${_vm._s(_vm.query)}" found no results.\n    `)])], 1)], 2);
    };
    const Tablevue_type_template_id_ecc59e0a_shadow_staticRenderFns = [];


    // CONCATENATED MODULE: ./src/components/Table.vue?vue&type=template&id=ecc59e0a&shadow

    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--11-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Table.vue?vue&type=script&lang=js&shadow
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    /* harmony default export */ const Tablevue_type_script_lang_js_shadow = ({
      props: {
        headers: {
          type: Array,
          default: function _default() {
            return [{
              text: 'Dessert (100g serving)',
              align: 'left',
              value: 'name',
            }, {
              text: 'Calories',
              align: 'center',
              value: 'calories',
            }, {
              text: 'Fat (g)',
              align: 'center',
              value: 'fat',
            }, {
              text: 'Carbs (g)',
              align: 'center',
              value: 'carbs',
            }, {
              text: 'Protein (g)',
              align: 'center',
              value: 'protein',
            }, {
              text: 'Iron (%)',
              align: 'center',
              value: 'iron',
            }];
          },
        },
        items: {
          type: Array,
          default: function _default() {
            return [{
              value: false,
              name: 'Frozen Yogurt',
              calories: 159,
              fat: 6.0,
              carbs: 24,
              protein: 4.0,
              iron: '1%',
            }, {
              value: false,
              name: 'Ice cream sandwich',
              calories: 237,
              fat: 9.0,
              carbs: 37,
              protein: 4.3,
              iron: '1%',
            }, {
              value: false,
              name: 'Eclair',
              calories: 262,
              fat: 16.0,
              carbs: 23,
              protein: 6.0,
              iron: '7%',
            }, {
              value: false,
              name: 'Cupcake',
              calories: 305,
              fat: 3.7,
              carbs: 67,
              protein: 4.3,
              iron: '8%',
            }, {
              value: false,
              name: 'Gingerbread',
              calories: 356,
              fat: 16.0,
              carbs: 49,
              protein: 3.9,
              iron: '16%',
            }, {
              value: false,
              name: 'Jelly bean',
              calories: 375,
              fat: 0.0,
              carbs: 94,
              protein: 0.0,
              iron: '0%',
            }];
          },
        },
        search: Boolean,
      },
      computed: {
        hasTitle: function hasTitle() {
          return this.$slots.default;
        },
      },
      data: function data() {
        return {
          query: '',
        };
      },
    });
    // CONCATENATED MODULE: ./src/components/Table.vue?vue&type=script&lang=js&shadow
    /* harmony default export */ const components_Tablevue_type_script_lang_js_shadow = (Tablevue_type_script_lang_js_shadow);
    // CONCATENATED MODULE: ./src/components/Table.vue?shadow


    /* normalize component */

    const Tableshadow_component = normalizeComponent(
      components_Tablevue_type_script_lang_js_shadow,
      Tablevue_type_template_id_ecc59e0a_shadow_render,
      Tablevue_type_template_id_ecc59e0a_shadow_staticRenderFns,
      false,
      null,
      null,
      null
      , true,
    );

    Tableshadow_component.options.__file = 'Table.vue';
    /* harmony default export */ const Tableshadow = (Tableshadow_component.exports);
    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"53bde044-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Timeline.vue?vue&type=template&id=37d64c6a&shadow
    const Timelinevue_type_template_id_37d64c6a_shadow_render = function () { const _vm = this; const _h = _vm.$createElement; const _c = _vm._self._c || _h; return _c('v-timeline', { attrs: { light: _vm.light, dark: _vm.dark, dense: _vm.dense } }, _vm._l((4), n => _c('v-timeline-item', { key: n, attrs: { color: 'red lighten-2', large: '' } }, [_c('span', { attrs: { slot: 'opposite' }, slot: 'opposite' }, [_vm._v('Tus eu perfecto')]), _c('v-card', { staticClass: 'elevation-2' }, [_c('v-card-title', { staticClass: 'headline' }, [_vm._v('Lorem ipsum')]), _c('v-card-text', [_vm._v('\n        Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.\n      ')])], 1)], 1))); };
    const Timelinevue_type_template_id_37d64c6a_shadow_staticRenderFns = [];


    // CONCATENATED MODULE: ./src/components/Timeline.vue?vue&type=template&id=37d64c6a&shadow

    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--11-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Timeline.vue?vue&type=script&lang=js&shadow
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    /* harmony default export */ const Timelinevue_type_script_lang_js_shadow = ({
      props: {
        light: Boolean,
        dark: {
          type: Boolean,
          default: true,
        },
        dense: Boolean,
      },
    });
    // CONCATENATED MODULE: ./src/components/Timeline.vue?vue&type=script&lang=js&shadow
    /* harmony default export */ const components_Timelinevue_type_script_lang_js_shadow = (Timelinevue_type_script_lang_js_shadow);
    // CONCATENATED MODULE: ./src/components/Timeline.vue?shadow


    /* normalize component */

    const Timelineshadow_component = normalizeComponent(
      components_Timelinevue_type_script_lang_js_shadow,
      Timelinevue_type_template_id_37d64c6a_shadow_render,
      Timelinevue_type_template_id_37d64c6a_shadow_staticRenderFns,
      false,
      null,
      null,
      null
      , true,
    );

    Timelineshadow_component.options.__file = 'Timeline.vue';
    /* harmony default export */ const Timelineshadow = (Timelineshadow_component.exports);
    // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js


    // runtime shared by every component chunk


    window.customElements.define('vuetify-abstractified-card', vue_wc_wrapper(external_Vue_default.a, Cardshadow));


    window.customElements.define('vuetify-abstractified-expansion-panel', vue_wc_wrapper(external_Vue_default.a, ExpansionPanelshadow));


    window.customElements.define('vuetify-abstractified-footer', vue_wc_wrapper(external_Vue_default.a, Footershadow));


    window.customElements.define('vuetify-abstractified-navbar', vue_wc_wrapper(external_Vue_default.a, Navbarshadow));


    window.customElements.define('vuetify-abstractified-snackbar', vue_wc_wrapper(external_Vue_default.a, Snackbarshadow));


    window.customElements.define('vuetify-abstractified-table', vue_wc_wrapper(external_Vue_default.a, Tableshadow));


    window.customElements.define('vuetify-abstractified-timeline', vue_wc_wrapper(external_Vue_default.a, Timelineshadow));
    /** */ }),

  /** */ '8bbf':
  /** */ (function (module, exports) {
    module.exports = Vue;
    /** */ }),

/** *** */ }));
// # sourceMappingURL=vuetify-abstractified.js.map
