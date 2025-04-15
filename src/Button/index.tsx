import {cva, VariantProps} from 'class-variance-authority';

const button = cva('relative box-border inline-flex items-center justify-center transition-all duration-200 ease-in-out cursor-pointer', {
  variants: {
    size: {
      ['s']: 'h-8 rounded-md px-3 py-2 text-sm',
      ['m']: 'h-10 rounded-lg px-4 py-2 text-base',
    },
    variant: {
      ['primary']: 'bg-sky-600 text-white hover:bg-sky-700 disabled:bg-sky-300 disabled:text-sky-100',
      ['secondary']: 'bg-slate-500 text-slate-50 hover:bg-slate-200 disabled:bg-slate-50 disabled:text-slate-400',
      ['outlined']: 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 disabled:bg-white disabled:text-slate-300 disabled:border-slate-200',
      ['link']: 'text-sky-600 hover:text-sky-800 hover:underline disabled:text-sky-300 bg-transparent',
    },
    isLoading: {
      true: 'pointer-events-none opacity-80',
      false: '',
    },
    disabled: {
      true: 'pointer-events-none',
      false: '',
    },
  },
  compoundVariants: [
    {
      variant: ['primary', 'secondary', 'outlined'],
      class: 'font-medium',
    },
    {
      variant: 'link',
      class: 'font-normal',
    },
  ],
  defaultVariants: {
    size: 's',
    variant: 'primary',
    isLoading: false,
    disabled: false,
  },
});

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  disabled,
  size,
  variant,
  isLoading,
  children,
}) => (
  <button
    className={button({disabled, size, variant, isLoading})}
    disabled={disabled || undefined}
  >
    {children}
  </button>
);
