interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <section className={`max-w-screen-xl mx-auto ${className}`} role="region">
      {children}
    </section>
  );
};

export default Container;
