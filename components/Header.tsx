import classNames from "classnames";
import Logo from "@/components/Logo";

type HeaderProps = {
  className?: string;
};

export default function Header({ className }: HeaderProps) {
  return (
    <header className={classNames("flex items-start justify-between", className)}>
      <Logo />
    </header>
  );
}
