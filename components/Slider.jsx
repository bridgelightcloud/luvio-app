import React, { useRef, useEffect, useState } from 'react';
import { Animated } from 'react-native';

export default function Slider(props) {
  const {
    direction, initialSlide, currentSlide, children,
  } = props;

  const [current, setCurrent] = useState(initialSlide || '');

  useEffect(() => {
    if (!Array.isArray(children)) {
      // setCurrent(children[0].name);
    }
    // console.log(Array.isArray(children));
  }, [children]);

  return (
    <Animated.View>
      {children}
    </Animated.View>
  );
}
