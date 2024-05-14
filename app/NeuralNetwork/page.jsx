import Header from '../components/Header'


const NeuralNetwork = () => {
    return (
      <div className='section text-white'>
        <Header btnText="AiTools"/>
        <h1 className='h1 pt-16'>Neural Network</h1>
        <div className='flex flex-col gap-4 max-w-4xl p-12'>
          <h3 className='h3'>Activation Functions</h3>
          <p>Activation functions are crucial in neural networks because they introduce non-linear properties to the system, which allows the network to learn complex data patterns effectively.</p>
          
          <h3 className='h3'>Sigmoid Function</h3>
          <p>The sigmoid function is given by the formula: σ(z) = 1 / (1 + e<sup>-z</sup>). This function takes any real-valued number and maps it into a value between 0 and 1, making it especially useful for models where you need to predict probabilities as outputs since the output of the sigmoid function can be interpreted as probabilities. It is commonly used in binary classification problems.</p>
  
          <h3 className='h3'>ReLU Function</h3>
          <p>The formula for ReLU is: ReLU(z) = max(0, z). This means if the input is positive, the output is that number; if the input is negative, the output is zero. ReLU is preferred in many neural networks because it accelerates the convergence of stochastic gradient descent compared to the sigmoid and tanh functions due to its linear, non-saturating form.</p>
          
          <h3 className='h3'>Neurons, Weights, and Biases</h3>
          <p>In a neural network, a neuron computes the weighted sum of its inputs, adds a bias, and then decides whether it should be activated or not using an activation function.</p>
          <ul>
            <li> - Neurons: Basic computational units of the brain or a neural network. In artificial networks, a neuron takes inputs, does some calculations, and produces an output.</li>
            <li> - Weights: These are parameters within the neural network that transform input data within the network's hidden layers. During the training of a neural network, the weights are adjusted to help the model learn optimally.</li>
            <li> - Biases: A bias value allows you to shift the activation function to the left or right, which may be critical for successful learning.</li>
          </ul>
  
          <h3 className='h3'>Learning: Weights and Biases Adjustment</h3>
          <p>The learning process in neural networks involves Forward Propagation, Loss Calculation, and Backpropagation to adjust the weights and biases to minimize the loss using an optimization technique like gradient descent.</p>
          
          <h3 className='h3'>Matrix and Vector Organization</h3>
          <p>Neural networks can be organized efficiently using matrices and vectors. Inputs, weights, and biases are arranged in matrices and vectors to facilitate operations and transformations across layers.</p>
          <ul>
            <li> - Input Data: Typically organized in vectors or matrices depending on the number of dimensions in the data.</li>
            <li> - Weights: Organized in matrices where each row represents the weights connecting to a neuron from the previous layer.</li>
            <li> - Biases: Typically organized in vectors, where each element is a bias associated with a neuron.</li>
          </ul>
          
          <h3 className='h3'>Further Learning</h3>
          <p>Explore topics like different types of neural networks (e.g., convolutional, recurrent), advanced activation functions (e.g., softmax, leaky ReLU), and techniques for optimizing neural networks.</p>
        </div>
      </div>
    )
  }
  
  export default NeuralNetwork;
  