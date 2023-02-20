import styled from 'styled-components'
import { CheckCircle2 } from 'lucide-react'

/*---> Component <---*/
export const HomeCompound = () => {
  return (
    <MainWrapper>
      <MainTitle>Choose the plan that's right for you.</MainTitle>
      <MainSubtitle>Make state & local government your friend.</MainSubtitle>
      <CardsWrapper>
        <NormalCard>
          <CardTitle>Follower</CardTitle>
          <CardPrice>$5.5/month</CardPrice>
          <FeatureWrapper>
            <CheckIcon />
            <FeatureText>Bla bla bla & bla</FeatureText>
          </FeatureWrapper>
          <FeatureWrapper>
            <CheckIcon />
            <FeatureText>Bla bla bla & bla</FeatureText>
          </FeatureWrapper>
          <FeatureWrapper>
            <CheckIcon />
            <FeatureText>Bla bla bla & bla</FeatureText>
          </FeatureWrapper>
          <SignupButton>Signup</SignupButton>
        </NormalCard>
        <NormalCard>
          <CardTitle>Groupie</CardTitle>
          <CardPrice>$10/month</CardPrice>
          <FeatureWrapper>
            <CheckIcon />
            <FeatureText>Bla bla bla & bla</FeatureText>
          </FeatureWrapper>
          <FeatureWrapper>
            <CheckIcon />
            <FeatureText>Bla bla bla & bla</FeatureText>
          </FeatureWrapper>
          <FeatureWrapper>
            <CheckIcon />
            <FeatureText>Bla bla bla & bla</FeatureText>
          </FeatureWrapper>
          <FeatureWrapper>
            <CheckIcon />
            <FeatureText>Bla bla bla & bla</FeatureText>
          </FeatureWrapper>
          <FeatureWrapper>
            <CheckIcon />
            <FeatureText>Bla bla bla & bla</FeatureText>
          </FeatureWrapper>
          <SignupButton>Signup</SignupButton>
        </NormalCard>
        <MostPopularCard>
          <MostPopularLabel>
            Most
            <br /> Popular
          </MostPopularLabel>
          <CardTitle>Insider</CardTitle>
          <CardPrice>$15/month</CardPrice>
          <FeatureWrapper>
            <CheckIcon />
            <FeatureText>Bla bla bla & bla</FeatureText>
          </FeatureWrapper>
          <FeatureWrapper>
            <CheckIcon />
            <FeatureText>Bla bla bla & bla</FeatureText>
          </FeatureWrapper>
          <FeatureWrapper>
            <CheckIcon />
            <FeatureText>Bla bla bla & bla</FeatureText>
          </FeatureWrapper>
          <FeatureWrapper>
            <CheckIcon />
            <FeatureText>Bla bla bla & bla</FeatureText>
          </FeatureWrapper>
          <FeatureWrapper>
            <CheckIcon />
            <FeatureText>Bla bla bla & bla</FeatureText>
          </FeatureWrapper>
          <SignupButton>Signup</SignupButton>
        </MostPopularCard>
        <NormalCard>
          <CardTitle>Data Seeker</CardTitle>
          <CardPrice>$95/month</CardPrice>
          <FeatureWrapper>
            <CheckIcon />
            <FeatureText>Bla bla bla & bla</FeatureText>
          </FeatureWrapper>
          <FeatureWrapper>
            <CheckIcon />
            <FeatureText>Bla bla bla & bla</FeatureText>
          </FeatureWrapper>
          <FeatureWrapper>
            <CheckIcon />
            <FeatureText>Bla bla bla & bla</FeatureText>
          </FeatureWrapper>
          <FeatureWrapper>
            <CheckIcon />
            <FeatureText>Bla bla bla & bla</FeatureText>
          </FeatureWrapper>
          <FeatureWrapper>
            <CheckIcon />
            <FeatureText>Bla bla bla & bla</FeatureText>
          </FeatureWrapper>
          <SignupButton>Signup</SignupButton>
        </NormalCard>
      </CardsWrapper>
    </MainWrapper>
  )
}

/*---> Styles <---*/
const MainWrapper = styled.div`
  padding: 75px 20px;
`

const MainTitle = styled.p`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
`

const MainSubtitle = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 50px;
`

const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`

const NormalCard = styled.div`
  background: white;
  padding: 50px 70px;
  min-width: 320px;
  height: 500px;
  border-radius: 10px;
  margin-top: 10px;
`

const CardTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
`

const CardPrice = styled.p`
  font-size: 30px;
  text-align: center;
  margin-bottom: 15px;
`

const FeatureWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`

const CheckIcon = styled(CheckCircle2)`
  width: 30px;
  height: 30px;
  fill: #54c841;
  color: white;
  margin-right: 5px;
`

const FeatureText = styled.p`
  font-size: 18px;
  text-align: center;
`

const SignupButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px 16px;
  background: #54c841;
  color: white;
  border: 1px solid #54c841;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  margin-top: 25px;
`

const MostPopularCard = styled.div`
  background: white;
  border: 3px solid #54c841;
  padding: 70px;
  min-width: 320px;
  height: 530px;
  border-radius: 10px;
  margin-top: 10px;
`

const MostPopularLabel = styled.div`
  background: #54c841;
  color: white;
  width: 140px;
  height: 60px;
  border-radius: 10px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: -90px;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
`