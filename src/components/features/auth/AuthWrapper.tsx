import React, { PropsWithChildren } from 'react'

interface AuthWrapperProps {}

export default function AuthWrapper({
	children
}: PropsWithChildren<AuthWrapperProps>) {
	return <div>{children}</div>
}
