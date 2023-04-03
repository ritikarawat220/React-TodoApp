import styles from "@/styles/Header.module.css";
const Header = () => {
    const headerStyle = {
        padding: '20px 0',
        lineHeight: '1.5em',
        color: '#aeadad',
        textAlign: 'center',
      };
      return (
        <header style={headerStyle} className={styles.header}>
        style={{
          padding: '20px 0',
          lineHeight: '1.5em',
          color: '#aeadad',
          textAlign: 'center',
        }}
        {/* ... */}
      </header>
    );
  };
  export default Header;
  