import styles from "./Container.module.css";

const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;

// props.children sa hm parent k traf sa wala value access karenga/
//sara value hm parent sa la raha han or hm props.children k help sa use karenga
// This line imports a CSS module named Container.module.css. CSS modules are a way to locally scope styles in React, allowing you to use unique class names for each component.
// This declares a functional component named Container. It takes a single prop, children, which represents the content that will be placed inside the container. The {} syntax is used for destructuring the children prop.
// The component returns a <div> element with the container class applied. The styles.container syntax is specific to CSS modules and is used to reference the locally scoped class defined in the imported CSS module (Container.module.css).
// The {children} part renders the content passed as children within the <div>. This is a common pattern in React for creating reusable container components that can wrap other elements.
// This line exports the Container component, making it available for use in other parts of the application.
// In summary, the Container component is a reusable container with locally scoped styles. It takes a children prop, which represents the content to be placed inside the container. The styling is applied using a CSS module, allowing for better encapsulation of styles and avoiding global style conflicts.