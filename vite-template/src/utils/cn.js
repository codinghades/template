import { cn } from './utils/cn';

function Button({ variant, isActive }) {
  return (
    <button
      className={cn(
        'px-4 py-2',
        variant === 'primary' && 'bg-blue-500',
        isActive && 'ring-2'
      )}
    >
      Click me
    </button>
  );
}