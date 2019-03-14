/**
 * Create the type of element you pass in the parameters
 *
 * @param element
 * @returns {HTMLElement}
 */
export function createNode(element) {
	return document.createElement(element);
}

/**
 * Append the second parameter(element) to the first one
 *
 * @param parent
 * @param el
 * @returns {*|ActiveX.IXMLDOMNode}
 */
export function append(parent, el) {
	return parent.appendChild(el);
}
