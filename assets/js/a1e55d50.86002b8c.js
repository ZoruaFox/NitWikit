"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[3783],{55199:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=o(74848),t=o(28453);const s={title:"config.yml\u6c49\u5316",sidebar_position:3},i="config.yml",a={id:"advance/cross-server/build-up/BungeeCord/config.yml",title:"config.yml\u6c49\u5316",description:"",source:"@site/docs-java/advance/cross-server/build-up/BungeeCord/config.yml.md",sourceDirName:"advance/cross-server/build-up/BungeeCord",slug:"/advance/cross-server/build-up/BungeeCord/config.yml",permalink:"/NitWikit/Java/advance/cross-server/build-up/BungeeCord/config.yml",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/advance/cross-server/build-up/BungeeCord/config.yml.md",tags:[],version:"current",lastUpdatedBy:"\u9a7f\u7ad9",lastUpdatedAt:1722728809e3,sidebarPosition:3,frontMatter:{title:"config.yml\u6c49\u5316",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u642d\u5efa",permalink:"/NitWikit/Java/advance/cross-server/build-up/BungeeCord/build-up"},next:{title:"Velocity \u7aef",permalink:"/NitWikit/Java/velocity"}},d={},c=[];function l(e){const n={code:"code",h1:"h1",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"configyml",children:"config.yml"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# forgeMOD\u652f\u6301\uff0c\u5982\u679c\u4f60\u7684\u670d\u52a1\u5668\u4e2d\u6709MOD\u670d\u52a1\u5668\uff0c\u8bf7\u6253\u5f00\u8fd9\u4e2a\u9009\u9879\nforge_support: false\n# \u73a9\u5bb6\u771f\u5b9e\u9650\u5236\uff0c\u5b83\u5c06\u9650\u5236\u6574\u4e2a\u670d\u52a1\u5668\u7684\u73a9\u5bb6\u4eba\u6570\uff0c-1\u4e3a\u4e0d\u9650\nplayer_limit: -1\n# BC\u670d\u52a1\u5668\u6743\u9650\u7ec4 \u4e0d\u5efa\u8bae\u7528\u8fd9\u4e1c\u897f\u800c\u662f\u4f7f\u7528bc\u7248luckperms\npermissions:\n  default:\n  - bungeecord.command.server\n  - bungeecord.command.list\n  admin:\n  - bungeecord.command.alert\n  - bungeecord.command.end\n  - bungeecord.command.ip\n  - bungeecord.command.reload\n# \u5f53\u73a9\u5bb6\u5728BC\u4e2d\u65e0\u54cd\u5e94\u591a\u957f\u65f6\u95f4\uff0cBC\u624d\u4f1a\u5c06\u4ed6\u8e22\u51fa\u53bb\uff0c\u5728\u8fd9\u91cc\u662f\u6beb\u79d2\uff0c\u4e00\u79d2\u7b49\u4e8e1000\u6beb\u79d2\uff0c30000=30\u79d2\ntimeout: 30000\n# \u6b63\u7248\u9a8c\u8bc1\uff0c\u5982\u679c\u662f\u76d7\u7248\u670d\u8bf7\u5173\u95ed\uff0c\u5426\u5219\u4f1a\u8c03\u7528API\u8fdb\u884c\u9a8c\u8bc1\nlog_commands: false\nonline_mode: true\n# \u8fd9\u91cc\u662f\u670d\u52a1\u5668\u7981\u6b62\u7684\u6307\u4ee4\uff0c\u4f8b\u5982\u6211\u586b- help\u670d\u52a1\u5668\u5c31\u4f1a\u7981\u7528/help\u6307\u4ee4\ndisabled_commands:\n- disabledcommandhere\nservers:\n  lobby:\n    # \u670d\u52a1\u5668\u6807\u8bed (\u4e0d\u7528\u8bbe\u7f6e\uff0c\u5efa\u8bae\u7528\u63d2\u4ef6\u800c\u4e0d\u662f\u8fd9\u73a9\u610f)\n    motd: '&1Just another BungeeCord - Forced Host'\n    # \u670d\u52a1\u5668\u5730\u5740\n    address: localhost:25565\n    restricted: false\n# \u8fd9\u662f\u5b50\u670d\u52a1\u5668\u7684\u5217\u8868\uff0c\u5728\u4e0b\u9762\u6211\u4f1a\u8bb2\u89e3\nlisteners:\n  # \u76d1\u542c\u67e5\u8be2\u7aef\u53e3\uff0c\u7aef\u53e3\u4e0d\u80fd\u548chost\u9879\u7684\u76f8\u540c\u3002\n- query_port: 25577\n  # BC\u7684\u6807\u8bed\uff0c\u652f\u6301\u5f69\u8272\uff08\u4e5f\u4e0d\u7528\u8bbe\u7f6e\uff09\n  motd: '&1Another Bungee server'\n  tab_list: GLOBAL_PING\n  # \u662f\u5426\u5f00\u542f\u76d1\u542c\u67e5\u8be2\n  query_enabled: false\n  proxy_protocol: false\n  forced_hosts:\n    pvp.md-5.net: pvp\n  ping_passthrough: false\n  # \u4f18\u5148\u670d\u52a1\u5668\u5217\u8868 \u73a9\u5bb6\u5c06\u4f18\u5148\u52a0\u5165\u9760\u4e0a\u8bbe\u7f6e\u7684\u5b50\u670d\uff0c\u8fdb\u4e0d\u53bb\u4f1a\u5c1d\u8bd5\u4e0b\u4e00\u4e2a\u5b50\u670d\n  priorities:\n  - lobby\n  bind_local_address: true\n  # BC\u7684IP\u5730\u5740\uff0c\u5f00\u542f\u540e\u8bbf\u95ee\u5b83\u5c31\u80fd\u8fdb\u5165\u670d\u52a1\u5668\n  host: 0.0.0.0:25577\n  # \u670d\u52a1\u5668\u663e\u793a\u7684\u6700\u5927\u4eba\u6570\uff0c\u5982\u8981\u8bbe\u7f6e\u771f\u5b9e\u7684\u4eba\u6570\u8bf7\u627e\u5230player_limit\u9009\u9879\u586b\u5199\n  max_players: 1\n  tab_size: 60\n  force_default_server: false\n# \u4e00\u5b9a\u8981\u6253\u5f00\uff0c\u5426\u5219\u4f1a\u88ab\u62d2\u7edd\nip_forward: false\n# BC op\u8bbe\u7f6e\uff0c\u8fd9\u4e5f\u662f\u6f0f\u6d1e\u4e4b\u4e00\uff0c\u5f85\u4f1a\u4fee\u6539\nnetwork_compression_threshold: 256\ngroups:\n  md_5:\n  - admin\n# \u8fde\u63a5\u95f4\u9694\uff0c\u5f53\u73a9\u5bb6\u9000\u51fa\u540e\u591a\u5c31\u80fd\u52a0\u5165\uff0c\u5728\u8fd9\u91cc\u4e00\u79d2\u7b49\u4e8e1000\uff0c4000=4\u79d2\nconnection_throttle: 4000\n# \u673a\u5668\u7801\uff0c\u8bf7\u4e0d\u8981\u4fee\u6539\uff0c\u4fee\u6539\u4e4b\u540e\u5c31\u4f1aduang\u7684\u6ca1\u7528\nstats: c86020bc-ddf6-467e-84d9-90974afcf90e\nprevent_proxy_connections: false\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var r=o(96540);const t={},s=r.createContext(t);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);