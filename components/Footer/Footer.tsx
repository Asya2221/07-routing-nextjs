import css from "@/components/Footer/Footer.module.css"

const Footer = () => {
  return (
    <footer className={css.footer}>
  <div className={css.container }>
    <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
    <div className={css.wrap}>
      <p>Developer: Anastasia Sukhai</p>
      <p>
        Contact us:
        <a href="asyasyka@gmail.com">asyasyka@gmail.com</a>
      </p>
    </div>
  </div>
</footer>
  );
};

export default Footer;