(function (ELEMENT) {
	ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;

	ELEMENT.closest = ELEMENT.closest || function closest(selector) {
		var element = this;

		while (element && element instanceof Element) {
			if (element.matches(selector)) {
				break;
			}

			element = element.parentNode;
		}
		if (element !== document) {
			return element;
		}
	};
}(Element.prototype));
