export default function Mycomponent() {
  const styles = {
    container: {
      backgroundColor: "#f1a8a8",
      padding: "20px",
      borderRadius: "5px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },

    title: {
      color: "#333",
      fontSize: "24px",
      marginBottom: "10px",
    },

    paragraph: {
      color: "#666",
      fontSize: "16px",
    },
  };
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tittel</h1>
      <p style={styles.paragraph}>Dette er innholdet.</p>
    </div>
  );
}
