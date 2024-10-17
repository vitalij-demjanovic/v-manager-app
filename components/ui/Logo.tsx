import Image from 'next/image';

export default function Logo() {
  return (
    <div>
      <Image
        width={180}
        height={80}
        src='/images/logo-v-manager-dark.svg'
        alt='logo'
      />
    </div>
  );
}
