import React from "react";
import PropTypes from "prop-types";
import { withNaming } from "@bem-react/classname";
import "./Typography.scss";

const Typography = ({
  tag,
  children,
  className,
  href,
  appearance: { color, size, weight, align } = {},
}) => {
  const VariantTag = getVariantTag(tag);
  const cn = withNaming({ e: "__", m: "_", v: "_" });
  const style = cn("text");

  return (
    <VariantTag className={style({ color, size, weight, align }, [className])}>
      {children}
    </VariantTag>
  );
};

export const variantTags = [
  "a",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "span",
];
const getVariantTag = (tag) => {
  return variantTags.includes(tag) ? tag : "p";
};

Typography.propTypes = {
  tag: PropTypes.oneOf(variantTags),
};

export default Typography;
