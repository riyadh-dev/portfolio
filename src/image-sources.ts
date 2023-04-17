//cspell:disable

const ROOT_URL =
	'https://res.cloudinary.com/riyadh-demo-cloud/image/upload/f_webp/q_auto:best/portfolio';

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
			`${ROOT_URL}/airbnb-clone/fn48q3ntlz38mqbrotby.png`,
			`${ROOT_URL}/airbnb-clone/gwuikchs2ilikvrqvfxq.png`,
			`${ROOT_URL}/airbnb-clone/ht5y2nqbsa1txqjxwdgq.png`,
			`${ROOT_URL}/airbnb-clone/meikxjlraaglf138umjz.png`,
			`${ROOT_URL}/airbnb-clone/sggoqpzcccfh5dfqylh2.png`,
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
	},
};

export default imageSources;
