import React from "react";
import { ProfileMenu } from "./profileMenu";
import { Notifications } from "./notifications";

interface AuthenticatedMenuProps {
    notifications: any[];
    onEditProfile: () => void;
    onMyProfile: () => void;
    onSignOut: () => void;
}

export const AuthenticatedMenu: React.FC<AuthenticatedMenuProps> = ({
    notifications,
    onEditProfile,
    onMyProfile,
    onSignOut
}) => (
    <div className="flex gap-x-3">
        <li>
            <Notifications notifications={notifications} />
        </li>
        <li className="justify-items-end">
            <ProfileMenu
                onEditProfile={onEditProfile}
                onMyProfile={onMyProfile}
                onSignOut={onSignOut}
            />
        </li>
    </div>
)