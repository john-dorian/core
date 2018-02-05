/* 
	❤️ JD's beautiful heart is what makes him special
 */

export const JD = {
	config: {}
};

if (document.body.dataset.jdConfig) {
	JD.config = JSON.parse(document.body.dataset.jdConfig);
}
