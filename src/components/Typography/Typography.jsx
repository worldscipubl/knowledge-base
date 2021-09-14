import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Typography.module.scss";

const Typography = ({ tag, size, children, className }) => {
  const VariantTag = getVariantTag(tag);
  const style = classNames(styles.text, className, {});

  return <VariantTag className={style}>{children}</VariantTag>;
};

export const variantTags = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"];
const getVariantTag = (tag) => {
  return variantTags.includes(tag) ? tag : "p";
};

Typography.propTypes = {
  tag: PropTypes.oneOf(variantTags),
};

export default Typography;
