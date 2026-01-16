import TopHeader from "./topHeader";
import StatCard from "./statCard";
import PersonalInfoCard from "./personalInfoCard";
import AccountDetailsCard from "./accountDetailsCard";

export default function ProfilePage({user}){
    return(
        <div className="layout">
        <TopHeader name={user.name} username={user.username} avatarImage={user.avatarImage}></TopHeader>

        <div className="statsGrid">
            <StatCard
            title="xp"
            bigValue={user.xp}
            footerText={`Last active: ${user.lastActive}`}>
            </StatCard>
            <StatCard
            title="Streak Days"
            bigValue={`${user.streakDays} days`}
            footerText={`longest Streak: ${user.longestStreak} days`}
            icon="🔥">
            </StatCard>
            <StatCard
            title="Recent Badges"
            bigValue=""
            footerText={user.recentBadgeText}
            icon="✨"></StatCard>
        </div>

        <div className="bottomGrid">
            <PersonalInfoCard info={user.personalInfo}></PersonalInfoCard>
            <AccountDetailsCard info={user.accountDetails}></AccountDetailsCard>
        </div>
        </div>

    );
}