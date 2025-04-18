import type { SvgIconProps } from '@mui/material/SvgIcon';
import SvgIcon from '@mui/material/SvgIcon';

const CheckIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path d="M337.468 823.993c-27.95 0-54.652-9.835-76.016-28.169l-4.372-3.752L77.071 560.13c-19.292-24.858-14.78-60.648 10.077-79.939s60.648-14.78 79.939 10.078l170.565 219.773q.135-.002.283-.012c1.309-.1 1.903-.73 2.121-.982L760.61 215.949c20.421-23.942 56.379-26.796 80.32-6.377 23.94 20.418 26.796 56.378 6.377 80.319l-420.754 493.33c-20.323 23.683-48.715 38.039-79.945 40.423-3.057.234-6.107.349-9.14.349" />
      </svg>
    </SvgIcon>
  );
};
export default CheckIcon;
