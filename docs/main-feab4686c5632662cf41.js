webpackJsonp([0],[,,,,,,,,,,function(e,t,a){"use strict";var n=a(45);a.d(t,"a",function(){return n.a});var r=a(43);a.d(t,"b",function(){return r.a})},,function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=a(0),c=a(48),l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=function(e){function t(){n(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),a=location.search.substring(1),o=new URLSearchParams(a);return e.state={params:o},e}return o(t,e),l(t,[{key:"render",value:function(){return i.default.createElement(c.a,{params:this.state.params})}}]),t}(i.Component);t.a=s},function(e,t){},,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";var n=a(0),r=a(2),o=a.n(r),i=a(3),c=a.n(i),l=function(e){var t=e.title,a=e.hide,r=c()("c-app-header",{"is-hidden":a});return n.default.createElement("header",{className:r},n.default.createElement("h1",{className:"c-app-header__title"},t))};l.propTypes={title:o.a.string,hide:o.a.bool},t.a=l},function(e,t,a){"use strict";var n=a(33);a.d(t,"a",function(){return n.a})},function(e,t,a){"use strict";var n=a(0),r=a(2),o=a.n(r),i=function(e){return e.params,n.default.createElement("div",{style:{textAlign:"center",padding:"32px"}},"You need to provide an ",n.default.createElement("strong",null,"user id")," as a parameter on URL (Eg.: ",n.default.createElement("strong",null,"http://url.com.br/?user=42"),").")};i.propTypes={params:o.a.any},t.a=i},function(e,t,a){"use strict";var n=a(35);a.d(t,"a",function(){return n.a})},function(e,t,a){"use strict";var n=a(0),r=a(2),o=a.n(r),i=function(e){var t=e.title,a=e.author,r=e.img,o=e.url;return n.default.createElement("div",{className:"c-book-card"},n.default.createElement("div",{className:"c-book-card__cover"},n.default.createElement("a",{href:o,target:"_blank"},n.default.createElement("div",{className:"c-book-card__book"},n.default.createElement("div",{className:"c-book-card__book-front"},n.default.createElement("img",{src:r,className:"c-book-card__img"})),n.default.createElement("div",{className:"c-book-card__book-back"}),n.default.createElement("div",{className:"c-book-card__book-side"})))),n.default.createElement("div",null,n.default.createElement("div",{className:"c-book-card__title"},t),n.default.createElement("div",{className:"c-book-card__author"},a)))};i.propTypes={title:o.a.oneOfType([o.a.string,o.a.number]),author:o.a.string,img:o.a.string},t.a=i},function(e,t,a){"use strict";var n=a(37);a.d(t,"a",function(){return n.a})},function(e,t,a){"use strict";var n=a(0),r=a(2),o=a.n(r),i=a(38),c=function(e){var t=e.books,a=t.map(function(e){return n.default.createElement(i.a,{title:e.edicao.titulo,author:e.edicao.autor,img:e.edicao.capa_media,url:"https://skoob.com.br"+e.edicao.url,key:e.id})});return n.default.createElement("div",{className:"c-bookshelf"},a)};c.propTypes={books:o.a.array},t.a=c},function(e,t,a){"use strict";var n=a(39);a.d(t,"a",function(){return n.a})},function(e,t,a){"use strict";var n=a(0),r=a(2),o=a.n(r),i=function(e){var t=e.pagination,a=e.loading,r=e.fetch,o=function(){t.next_page&&r(t.page+1)},i=a?"Loading...":"Load more";return n.default.createElement("div",{className:"c-paginator"},t.next_page&&n.default.createElement("button",{type:"button",disabled:!1,onClick:o,className:"c-paginator__button"},i),!t.next_page&&t.page>1&&n.default.createElement("div",null,"All items were loaded"))};i.propTypes={pagination:o.a.object,loading:o.a.bool,fetch:o.a.func},t.a=i},function(e,t,a){"use strict";var n=a(41);a.d(t,"a",function(){return n.a})},function(e,t,a){"use strict";var n=a(0),r=a(2),o=a.n(r),i=a(3),c=a.n(i),l=function(e){var t=(e.title,e.className),a=e.children,r=c()(t,"c-tab");return n.default.createElement("div",{className:r},a)};l.propTypes={title:o.a.string.isRequired,className:o.a.string,children:o.a.any},l.defaultProps={className:null,children:null},t.a=l},function(e,t,a){"use strict";var n=a(0),r=a(2),o=a.n(r),i=a(3),c=a.n(i),l=function(e){var t=e.tabs,a=e.onTabClick,r=e.currentTabIndex;return n.default.createElement("nav",{className:"c-tab-navigator"},n.default.createElement("div",{className:"c-tab-navigator__inner"},t.map(function(e,t){var o=c()("c-tab-navigator__item",{"is-active":r===t});return n.default.createElement("div",{key:t,onClick:function(){return a(t)},className:o},e)})))};l.propTypes={tabs:o.a.arrayOf(o.a.string).isRequired,onTabClick:o.a.func.isRequired,currentTabIndex:o.a.number},t.a=l},function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=a(0),c=a(2),l=a.n(c),s=a(3),u=a.n(s),d=a(44),f=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),p=function(e){function t(){n(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={currentTabIndex:0},e.extractTitles=e.extractTitles.bind(e),e.changeTabIndex=e.changeTabIndex.bind(e),e}return o(t,e),f(t,[{key:"componentWillMount",value:function(){this.changeTabIndex(this.props.initialTab)}},{key:"extractTitles",value:function(){return this.props.children.map(function(e){return e.props.title})}},{key:"changeTabIndex",value:function(e){void 0!==e&&this.setState({currentTabIndex:e})}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.className,n=this.state.currentTabIndex,r=this.extractTitles(),o=u()(a,"c-tabs");return i.default.createElement("div",{className:o},i.default.createElement(d.a,{tabs:r,onTabClick:this.changeTabIndex,currentTabIndex:n}),t[n])}}]),t}(i.Component);p.propTypes={initialTab:l.a.number,className:l.a.string,children:l.a.any},p.defaultProps={initialTab:0,className:null,children:null},t.a=p},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),r=a(0),o=a(14),i=(a.n(o),a(12)),c=a(13);(a.n(c),function(e){a.i(r.render)(n.default.createElement(o.AppContainer,null,n.default.createElement(e,null)),document.querySelector('[data-js="app"]'))})(i.a)},function(e,t,a){"use strict";var n=a(0),r=a(2),o=a.n(r),i=a(10),c=a(40),l=a(42),s=function(e){var t=e.title,a=e.properties,r=e.fetch,o=e.initialLoad;return n.default.createElement(i.b,{title:t},!o&&a.books&&a.books.length>0&&n.default.createElement("div",null,n.default.createElement(c.a,{books:a.books}),n.default.createElement(l.a,{fetch:r,pagination:a.pagination,loading:a.loading})),!o&&a.books&&0===a.books.length&&!a.error&&n.default.createElement("div",{style:{textAlign:"center",padding:"32px"}},"There is no books here ¯\\_(ツ)_/¯"),!o&&a.error&&n.default.createElement("div",{style:{textAlign:"center",padding:"32px"}},"Sorry, it was not possible to get this book list. Try again later |:"),o&&n.default.createElement("div",{className:"c-loading"},"Loading..."))};s.propTypes={title:o.a.string,properties:o.a.object,fetch:o.a.func,initialLoad:o.a.bool},s.defaultProps={title:"",properties:{},fetch:function(){},initialLoad:!1},t.a=s},function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=a(0),c=a(3),l=a.n(c),s=a(34),u=a(36),d=a(49),f=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),p=function(e){function t(){n(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e._handleScroll=function(t){e._shouldFixHeader(t)?e.setState({fixedHeader:!0}):e._shouldUnfixHeader(t)&&e.setState({fixedHeader:!1})},e._shouldFixHeader=function(t){return document.body.scrollTop>=e.contentOffsetTop&&!e.state.fixedHeader},e._shouldUnfixHeader=function(t){return document.body.scrollTop<e.contentOffsetTop&&e.state.fixedHeader},e.state={fixedHeader:!1,user:""},e.contentContainer=null,e.contentOffsetTop=null,e}return o(t,e),f(t,[{key:"componentWillMount",value:function(){var e=this.props.params.get("user");this.setState({user:e})}},{key:"componentDidMount",value:function(){this.contentOffsetTop=this.contentContainer.offsetTop,window.addEventListener("scroll",this._handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this._handleScroll)}},{key:"render",value:function(){var e=this,t=this.state,a=t.fixedHeader,n=t.user,r=l()("pg-home",{"is-header-fixed":a});return i.default.createElement("div",{className:r},i.default.createElement(s.a,{title:"My Bookshelf",hide:a}),i.default.createElement("div",{className:"pg-home__content",ref:function(t){e.contentContainer=t}},n&&i.default.createElement(d.a,{user:n}),!n&&i.default.createElement(u.a,null)))}}]),t}(i.Component);t.a=p},function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=a(0),c=a(2),l=a.n(c),s=a(47),u=a(50),d=a(10),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),b=function(e){function t(){n(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.fetchAlreadyRead=function(t){e.setState({alreadyRead:f({},e.state.alreadyRead,{loading:!0})}),u.a.fetchAlreadyRead(e.props.user,t).then(function(t){var a=e.state.alreadyRead.books,n=a.concat(t.data.response),r=t.data.paging||{},o={books:n,pagination:r,loading:!1};e.setState({alreadyRead:o}),e.setState({alreadyReadInitialLoad:!1})}).catch(function(t){e.setState({alreadyReadInitialLoad:!1}),e.setState({alreadyRead:f({},e.state.alreadyRead,{loading:!1,error:t})}),console.error(t)})},e.fetchReading=function(t){e.setState({reading:f({},e.state.reading,{loading:!0})}),u.a.fetchReading(e.props.user,t).then(function(t){var a=e.state.reading.books,n=a.concat(t.data.response),r=t.data.paging||{},o={books:n,pagination:r,loading:!1};e.setState({reading:o}),e.setState({readingInitialLoad:!1})}).catch(function(t){e.setState({readingInitialLoad:!1}),e.setState({reading:f({},e.state.reading,{loading:!1,error:t})}),console.error(t)})},e.fetchWantRead=function(t){e.setState({wantRead:f({},e.state.wantRead,{loading:!0})}),u.a.fetchWantRead(e.props.user,t).then(function(t){var a=e.state.wantRead.books,n=a.concat(t.data.response),r=t.data.paging||{},o={books:n,pagination:r,loading:!1};e.setState({wantRead:o}),e.setState({wantReadInitialLoad:!1})}).catch(function(t){e.setState({wantReadInitialLoad:!1}),e.setState({wantRead:f({},e.state.wantRead,{loading:!1,error:t})}),console.error(t)})},e.state={alreadyRead:{books:[],pagination:{},loading:!1,error:""},reading:{books:[],pagination:{},loading:!1,error:""},wantRead:{books:[],pagination:{},loading:!1,error:""},alreadyReadInitialLoad:!0,readingInitialLoad:!0,wantReadInitialLoad:!0},e}return o(t,e),p(t,[{key:"componentWillMount",value:function(){this.props.user?(this.fetchAlreadyRead(1),this.fetchReading(1),this.fetchWantRead(1)):(this.setState({alreadyReadInitialLoad:!1}),this.setState({readingInitialLoad:!1}),this.setState({wantReadInitialLoad:!1}))}},{key:"render",value:function(){var e=this.state,t=e.alreadyRead,a=e.reading,n=e.wantRead,r=e.alreadyReadInitialLoad,o=e.readingInitialLoad,c=e.wantReadInitialLoad,l=t.pagination?"Already read ("+(t.pagination.total||0)+")":"",u=a.pagination?"Reading ("+(a.pagination.total||0)+")":"",f=n.pagination?"Want to read ("+(n.pagination.total||0)+")":"";return i.default.createElement(d.a,{initialTab:1,className:"pg-custom-tabs"},i.default.createElement(s.a,{title:l,properties:t,fetch:this.fetchAlreadyRead,initialLoad:r}),i.default.createElement(s.a,{title:u,properties:a,fetch:this.fetchReading,initialLoad:o}),i.default.createElement(s.a,{title:f,properties:n,fetch:this.fetchWantRead,initialLoad:c}))}}]),t}(i.Component);b.propTypes={user:l.a.string},t.a=b},function(e,t,a){"use strict";function n(e,t){var a=i(e,t,1);return l.a.get(a)}function r(e,t){var a=i(e,t,2);return l.a.get(a)}function o(e,t){var a=i(e,t,3);return l.a.get(a)}function i(e,t,a){return u+"/"+d+"/"+e+"/shelf_id:"+a+"/page:"+t+"/limit:"+f+"/"}var c=a(15),l=a.n(c),s={fetchAlreadyRead:n,fetchReading:r,fetchWantRead:o},u="https://cors-anywhere.herokuapp.com",d="https://www.skoob.com.br/v1/bookcase/books",f=20;t.a=s}],[46]);