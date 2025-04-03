import Image from 'next/image'

export default function Logo() {
  return (
    <div>
      <Image
        className="object-contain invert dark:hidden"
        width={250}
        height={125}
        src="/kca_room_booking.png"
        alt="kca-room-booking-logo"
      />
      <Image
        className="object-contain hidden dark:block"
        width={250}
        height={125}
        src="/kca_room_booking.png"
        alt="kca-room-booking-logo"
      />
    </div>
  )
}
