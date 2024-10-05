interface ProviderButtonProps {
  handle: () => Promise<void>;
  disabled: boolean;
}

export function ProviderButton({ handle, disabled }: ProviderButtonProps) {
  return (
    <button onClick={handle} disabled={disabled}>
      Sign In with Google
    </button>
  );
}
