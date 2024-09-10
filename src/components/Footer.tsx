import "./css/footer.css";

export function Footer() {
  const fecha = new Date().getFullYear();
  return (
    <footer className="bg-primary text-center text-dark textFooter">
      <div className="text-center p-3 textFooter">
        {`© ${fecha} `}
        <a className="text-dark" href="https://github.com/AlbeiroZerpa">
          Albeiro Zerpa
        </a>
      </div>
    </footer>
  );
}
