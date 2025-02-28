import { Avatar, AvatarFallback, AvatarImage } from '../ui/common/Avatar'

export default function Profile() {
	return (
		<Avatar>
			<AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	)
}
