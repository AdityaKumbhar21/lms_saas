import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import Cta from '@/components/CTA';
import CompanionsList from '@/components/CompanionList';
import { recentSessions } from '@/constants';

const Page = async () => {


  return (
    <main>
      <h1>Popular Companions</h1>

        <section className="home-section">
                <CompanionCard 
                    id="1"
                    name="Companion 1"
                    topic="Topic 1"
                    subject="Subject 1"
                    duration={30}
                    color="#f0f0f0"
                    bookmarked={false}
                />
                <CompanionCard 
                    id="1"
                    name="Companion 1"
                    topic="Topic 1"
                    subject="Subject 1"
                    duration={30}
                    color="#f0f0f0"
                    bookmarked={false}
                />
                <CompanionCard 
                    id="1"
                    name="Companion 1"
                    topic="Topic 1"
                    subject="Subject 1"
                    duration={30}
                    color="#f0f0f0"
                    bookmarked={false}
                />
            
        </section>
        <section className='home-section'>
          <CompanionsList title="Recently completed sessions" companions={recentSessions} />
          <Cta />
        </section>
    </main>
  )
}

export default Page