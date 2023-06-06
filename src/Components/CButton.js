import { Button } from "native-base";
import React from "react";

function CButton({mt, bg, color, children, onPress, type, borderColor, borderWidth}) {
  return (
    <Button
      w="full"
      h={55}
      mt={mt}
      rounded="5"
      bg={bg}
      _text={{
        color: color,
        fontWeight: "extrabold",
        fontSize: "md"
      }}
      type = {type}
      borderColor = {borderColor}
      borderWidth = {borderWidth}
      _pressed={{ bg: bg }}
      onPress={onPress}
    >
      {children}
    </Button>
  );
}

export default CButton;
