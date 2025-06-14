import PageContainer from "@/app/components/PageContainer"
import ConnectFourGame from "@/app/components/games/ConenctFourGame"

export default function ConnectFour() {
    return (
        <PageContainer title="Connect 4" githubLink="https://github.com/heeyeonl/the-website/blob/main/app/components/games/ConenctFourGame.tsx">
            <ConnectFourGame />
        </PageContainer>
    )
}