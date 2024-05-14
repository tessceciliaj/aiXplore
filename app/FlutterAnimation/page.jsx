import React from 'react';
import Header from '../components/Header';

const FlutterAnimation = () => {
  return (
    <div className='section text-white'>
    <Header btnText="AiTools"/>
    <h1 className='h1 pt-16'>Introduction to Flutter Animations</h1>
    <div className='flex flex-col gap-4 max-w-4xl p-12'>
      <p>Flutter animations are a powerful way to create dynamic and visually appealing interfaces. Animations in Flutter can be implemented using various widgets and classes, primarily revolving around the <code>AnimationController</code>.</p>

      <h3 className='h3'>Understanding the Basics</h3>
      <ul>
        <li><strong>Coordinate System</strong>: In Flutter, the origin (0,0) is at the top-left corner of the screen. This system affects how animations and widgets are positioned and moved across the screen.</li>
      </ul>

      <h3 className='h3'>Drawing a Circle with a Specific Angle</h3>
      <p>To draw a circle segment at a 45-degree angle:</p>
      <ul>
        <li>Use trigonometric functions to calculate the coordinates:</li>
        <li><code>x = r × cos(45°)</code></li>
        <li><code>y = r × sin(45°)</code></li>
        <li>Here, <code>r</code> stands for radius, and the angle needs to be converted into radians if you are programming this calculation.</li>
      </ul>

      <h3 className='h3'>The Animation Controller</h3>
      <ul>
        <li><strong>Definition</strong>: An <code>AnimationController</code> manages Animation objects in Flutter. It’s especially useful for animations that progress linearly over a certain duration.</li>
        <li><strong>Usage</strong>:
          <ul>
            <li>The controller emits values from 0.0 to 1.0 (by default). These values can represent degrees of rotation, levels of opacity, or any other measurable attribute in an animation.</li>
            <li>Example:
              <ul>
                <li><code>0.0</code> could represent an unrotated state.</li>
                <li><code>0.5</code> could represent a half rotation (180 degrees).</li>
                <li><code>1.0</code> could complete the rotation cycle (360 degrees).</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>Lifecycle Management</strong>: It is typically used within a <code>StatefulWidget</code> because it needs to be disposed of when the widget is removed from the tree to prevent memory leaks.</li>
      </ul>

      <h3 className='h3'>Key Properties and Methods</h3>
      <ul>
        <li><strong>vsync</strong>: This property prevents off-screen animations from consuming unnecessary resources by syncing the animation with the display's refresh rate.</li>
        <li><strong>Tween</strong>: Represents a value between two endpoints. For instance, animating a color or scaling a size from a starting value to an ending value.</li>
        <li><strong>Transform Widget</strong>: Applies a transformation (like translation, rotation, or scaling) to its child widget.</li>
      </ul>
      <pre>{`Transform(
  alignment: Alignment.center,
  transform: Matrix4.identity()..rotateY(_animation.value),
);`}</pre>
      <li><strong>AnimatedBuilder</strong>: A widget that rebuilds itself on every tick of the controller. It separates the widget tree construction from the animation process, optimizing performance.</li>
      <pre>{`AnimatedBuilder(
  animation: _controller,
  builder: (context, child) {
    // Widget build logic here
  },
);`}</pre>

      <h3 className='h3'>Advanced Concepts</h3>
      <ul>
        <li><strong>SingleTickerProviderStateMixin</strong>: Used for providing a single <code>Ticker</code> that powers the animation. It is often mixed into the <code>State</code> of a <code>StatefulWidget</code> to make the <code>State</code> object a provider for a <code>Ticker</code>.</li>
        <li><strong>AnimationController.repeat()</strong>: Useful for looping animations, this method causes the animation to repeat indefinitely until stopped.</li>
      </ul>
    </div>
    </div>
  );
};

export default FlutterAnimation;
