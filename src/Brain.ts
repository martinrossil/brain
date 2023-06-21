import * as brain from 'brain.js';

export default class Brain extends HTMLElement {
	public constructor() {
		super();
		console.log('Brain()');

		const config: brain.INeuralNetworkOptions = {
			binaryThresh: 0.5,
			hiddenLayers: [3], // array of ints for the sizes of the hidden layers in the network
			activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
			leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
		};

		const network = new brain.NeuralNetwork(config);

		network.train([
			{ input: [0, 0], output: [0] },
			{ input: [0, 1], output: [1] },
			{ input: [1, 0], output: [1] },
			{ input: [1, 1], output: [0] },
		]);

		const output = network.run([1, 0]); // [0.987]

		console.log(output);
	}
}
customElements.define('brain-app', Brain);
