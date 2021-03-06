import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 's' | 'm';
    children: ReactNode;
    color?: 'ghost' | 'pink' | 'blue' | 'grey' | 'green';
    href?: string;
}

