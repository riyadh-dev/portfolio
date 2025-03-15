//cspell:disable

const ROOT_URL =
	'https://res.cloudinary.com/riyadh-main-cloud/image/upload/f_webp/q_auto:best/portfolio'

const imageSources = {
	logo: `${ROOT_URL}/skdcfiuvaaeyf3f6jqnm.png`,
	projects: {
		'social-media-app': [
			`${ROOT_URL}/social-media-app/y2eoxybmy8ddzb4wpkex.png`,
			`${ROOT_URL}/social-media-app/pinypeuw94437tb4rohk.png`,
			`${ROOT_URL}/social-media-app/eo3bvr2fn1dome3stuwi.png`,
			`${ROOT_URL}/social-media-app/xszpf7q5fe8zypvy4qe4.png`,
			`${ROOT_URL}/social-media-app/kujmfqdo30tjau0klxpr.png`,
			`${ROOT_URL}/social-media-app/jusj0mnwjt0zbqlanwco.png`,
			`${ROOT_URL}/social-media-app/yyyredq3mskaib5byked.png`,
			`${ROOT_URL}/social-media-app/aocyzqmnuewia07rut2w.png`,
			`${ROOT_URL}/social-media-app/ooqcb4s1qhhmuhsu4kza.png`,
			`${ROOT_URL}/social-media-app/v6j49xihqlsf0byq38s0.png`,
		],
		'e-commerce-app': [
			`${ROOT_URL}/e-commerce-app/dkdk9eyd9yo5j2hpe8j8.png`,
			`${ROOT_URL}/e-commerce-app/ikuzxyzuu15jmwiidhqw.png`,
			`${ROOT_URL}/e-commerce-app/zppmqwzrtfvcbswnrgnt.png`,
			`${ROOT_URL}/e-commerce-app/kva4sqggof0slihnffhj.png`,
			`${ROOT_URL}/e-commerce-app/ic969id0zmlwuwyhyr5x.png`,
			`${ROOT_URL}/e-commerce-app/d1jr7toqrtrb8tzicm7t.png`,
			`${ROOT_URL}/e-commerce-app/xzsijm1fjrsm34wrh0fa.png`,
			`${ROOT_URL}/e-commerce-app/xwzpihipn1euke4giv4l.png`,
			`${ROOT_URL}/e-commerce-app/ggsquanvs96fcifhffwk.png`,
		],
		'messaging-app': [
			`${ROOT_URL}/messaging-app/jgmfiw8rjxw0v5leuaro.png`,
			`${ROOT_URL}/messaging-app/ijjg9mqf5ptvaavmgge8.png`,
			`${ROOT_URL}/messaging-app/zx7kv89efgbmaxznnycq.png`,
			`${ROOT_URL}/messaging-app/hbjm7tfu7wtznenc4txz.png`,
			`${ROOT_URL}/messaging-app/fy6wpwfhlmw1nqp64thf.png`,
			`${ROOT_URL}/messaging-app/efzivhflwe1esckvm0fw.png`,
		],
		'dashboard-nextjs': [
			`${ROOT_URL}/dashboard-nextjs/hianz3g2gwzluzwzsdzs.png`,
			`${ROOT_URL}/dashboard-nextjs/h2haavotynjhvol9n0fv.png`,
			`${ROOT_URL}/dashboard-nextjs/uomhqzscnicrqgas9cqe.png`,
			`${ROOT_URL}/dashboard-nextjs/gdsx9j5lsshtcb1ghs6m.png`,
			`${ROOT_URL}/dashboard-nextjs/obbqxpp5a5qnktki6tfe.png`,
			`${ROOT_URL}/dashboard-nextjs/wwjaffr3oncdifn9ewoy.png`,
		],
		'airbnb-clone': [
			`${ROOT_URL}/airbnb-clone/py9evjofpt5dt4fs7gqx.png`,
			`${ROOT_URL}/airbnb-clone/uiq2xh71scdvmxg7rowz.png`,
			`${ROOT_URL}/airbnb-clone/hn4axdzmsnbbpzclin9x.png`,
			`${ROOT_URL}/airbnb-clone/wsa6phwmzeowj0lpl8nu.png`,
			`${ROOT_URL}/airbnb-clone/kw8opldkfbgkpmwjypxe.png`,
			`${ROOT_URL}/airbnb-clone/cwb9x201jntwjji5xvj3.png`,
			`${ROOT_URL}/airbnb-clone/liqvpva0bjmpyndejsj3.png`,
		],
		scms: [
			`${ROOT_URL}/scms/vicqsanxxrwuqyqk95pp.png`,
			`${ROOT_URL}/scms/elgxjskbht0pjrfvr9xb.png`,
			`${ROOT_URL}/scms/x55dpggtv6u4kx7q5yyl.png`,
			`${ROOT_URL}/scms/gcbqmhavatok0od1vkdr.png`,
			`${ROOT_URL}/scms/p0dwzeczfuzu9pn92rax.png`,
			`${ROOT_URL}/scms/lqc5ewmtfhgd4hh7ouhu.png`,
			`${ROOT_URL}/scms/xwok73kyuw9iy2ymsvy7.png`,
			`${ROOT_URL}/scms/l7lxpgpc23ozrcbm5nyl.png`,
			`${ROOT_URL}/scms/qlgtikux3utpzwosjjg0.png`,
			`${ROOT_URL}/scms/jsedhpnv3t0uaivuu4su.png`,
			`${ROOT_URL}/scms/nyzmwxgphmo1lyq0ka6w.png`,
			`${ROOT_URL}/scms/abw4tzzxu3jq9pyz2jji.png`,
			`${ROOT_URL}/scms/lqjitcgrizlfj502hr4t.png`,
		],
		'memory-matching-game': [
			`${ROOT_URL}/memory-matching-game/g8oedvqis0gorhvpzw0o.png`,
		],
		'portfolio-website-image': [
			`${ROOT_URL}/portfolio-website-image/yvtwxepnf71mfmvlskpd.png`,
			`${ROOT_URL}/portfolio-website-image/xjpf3rx1bmhczek4mtos.png`,
			`${ROOT_URL}/portfolio-website-image/hslqvsoh6uot95fbqtfm.png`,
			`${ROOT_URL}/portfolio-website-image/sqsxejx52ddxl8oryaqs.png`,
			`${ROOT_URL}/portfolio-website-image/h5ibfotuh7bjv4dzgrol.png`,
			`${ROOT_URL}/portfolio-website-image/zyxzxhsshp6znetedfga.png`,
			`${ROOT_URL}/portfolio-website-image/bubx14nmkuzxpkktxb7m.png`,
		],
		'authentication-demo': [
			`${ROOT_URL}/authentication-demo/c42srkwtzf5mojubrtbl.png`,
			`${ROOT_URL}/authentication-demo/stfwlhyw9e1cxw15t8zw.png`,
			`${ROOT_URL}/authentication-demo/rtaqxcnqzmvwutrtshvs.png`,
			`${ROOT_URL}/authentication-demo/pepax67vk68x67jrndoy.png`,
			`${ROOT_URL}/authentication-demo/eceafamnk0z2l9wjlsfd.png`,
		],
		'iec101-master-sim': [
			`${ROOT_URL}/iec101-master-sim/w0lkbddusxbjtasisdtp.png`,
			`${ROOT_URL}/iec101-master-sim/pzact7zpgiddgpprhdto.png`,
		],
		'snake-game': [`${ROOT_URL}/snake-game/bfsp9dk0kb6xjunatycx.png`],
		'cash-flow': [
			`${ROOT_URL}/cash-flow/tyqawt5itogdtd563xq3.png`,
			`${ROOT_URL}/cash-flow/dabhi13x8drvum434svj.png`,
			`${ROOT_URL}/cash-flow/uyke65ua9oq7c5q6hmbj.png`,
			`${ROOT_URL}/cash-flow/n1ebytua5jxl8giwbgf6.png`,
			`${ROOT_URL}/cash-flow/caolxpncpqjwxjszvda3.png`,
			`${ROOT_URL}/cash-flow/ldnd76l4sv1b1ckj7zbg.png`,
			`${ROOT_URL}/cash-flow/nskfougifycv7zdtcq1t.png`,
			`${ROOT_URL}/cash-flow/kcfqpcoopdj5gz1enh9k.png`,
		],
		'events-admin': [
			`${ROOT_URL}/events-admin/nhyn6hgde7ka36xn2nrg.png`,
			`${ROOT_URL}/events-admin/pcxvc0s1s47wybgwzlyj.png`,
			`${ROOT_URL}/events-admin/uhfvnkqzqkdpmxehmn60.png`,
			`${ROOT_URL}/events-admin/wka56xppnsdahqkq5zdk.png`,
			`${ROOT_URL}/events-admin/ndjb4ohu10h2ao2obm87.png`,
			`${ROOT_URL}/events-admin/eejec75mnupudz7mnfkn.png`,
		],
		'events-exhibit': [
			`${ROOT_URL}/events-exhibit/tvvwzq5jnzc2ucre0noz.png`,
			`${ROOT_URL}/events-exhibit/xqbqewjqxwatvm0xyka3.png`,
			`${ROOT_URL}/events-exhibit/vnddmmmcihgzzfwftmg3.png`,
			`${ROOT_URL}/events-exhibit/b2m9jgastyczv1cmszoj.png`,
			`${ROOT_URL}/events-exhibit/uszcdrlzwu2wzpid60ao.png`,
			`${ROOT_URL}/events-exhibit/nqxx8kz4tdk2l1hfjksk.png`,
			`${ROOT_URL}/events-exhibit/onrstazrja0wfpyb5iuu.png`,
		],
		bookdex: [
			`${ROOT_URL}/bookdex/yw3plcptoa5tgfbkkwb0.png`,
			`${ROOT_URL}/bookdex/umah7psu5qgykofdeyj7.png`,
			`${ROOT_URL}/bookdex/rpjuwqih5mangi4vmj2s.png`,
			`${ROOT_URL}/bookdex/fpvmhiwuukqedqc71wwv.png`,
			`${ROOT_URL}/bookdex/atfiucqoq7tabouz9bhw.png`,
			`${ROOT_URL}/bookdex/kgp8mveqhpesdfyeoosw.png`,
			`${ROOT_URL}/bookdex/vxeg6qnamiz61dblwjkb.png`,
			`${ROOT_URL}/bookdex/xfbua4eb643yodanw9ga.png`,
		],
		todo: [
			`${ROOT_URL}/todo/nprx3awfwfdqm0jfns4t.png`,
			`${ROOT_URL}/todo/yxdaw0teejkvua8yx5mu.png`,
			`${ROOT_URL}/todo/fnhzjg1zhjjt5andulzz.png`,
		],
		brainwave: [
			`${ROOT_URL}/brainwave/o3pgnafhcqqljwtytqkg.png`,
			`${ROOT_URL}/brainwave/lmjfiekvqkp9iuplpol6.png`,
			`${ROOT_URL}/brainwave/gv0pzkqbh1pqwderonnh.png`,
			`${ROOT_URL}/brainwave/e10aepichxsyglvhng2e.png`,
			`${ROOT_URL}/brainwave/lrxypoc7quwkjmqdsryq.png`,
			`${ROOT_URL}/brainwave/sdu6zgbvbb8oholabemz.png`,
		],
		'landing-pages': [
			`${ROOT_URL}/landing-pages/xkzrenfynsrkbhtacgza.png`,
			`${ROOT_URL}/landing-pages/jsrwhmiod8rvaya6xmha.png`,
			`${ROOT_URL}/landing-pages/jac6nxou5wncpaumlcyj.png`,
			`${ROOT_URL}/landing-pages/cquqqthvml2plz5xmqgg.png`,
			`${ROOT_URL}/landing-pages/hihuyttagfpnfmi0lnl9.png`,
		],
		'react-hono-turbo': [
			`${ROOT_URL}/react-hono-turbo/sv20bs8dadfufythx0xq.png`,
			`${ROOT_URL}/react-hono-turbo/lxjqrxqsd6g4xueix59w.png`,
			`${ROOT_URL}/react-hono-turbo/ill8fsbmxfju6vg6wumi.png`,
			`${ROOT_URL}/react-hono-turbo/onqwqbfxl83mtvudmuvc.png`,
		],
	},
}

export default imageSources
