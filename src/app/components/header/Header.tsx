import Button from "../button/Button";

export default function Header() {
  return (
    <header className="w-full">
      <div className="flex h-16 items-center justify-end gap-6 bg-blue-100 pr-10 font-bold">
        <Button href="/auth/login" variant="white" size="sm">
          Login
        </Button>

        <Button href="/auth/signup" variant="DarkBlue" size="sm">
          Sign Up
        </Button>
      </div>
    </header>
  );
}
