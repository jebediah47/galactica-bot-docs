import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to set-up',
    Svg: require('../../static/img/SetUp_Cogs.svg').default,
    description: (
      <>
        Galactica is built from the ground up to be easily installed and
        used to get your Discord™ server up and running quickly.
      </>
    ),
  },
  {
    title: 'Free and open-source',
    Svg: require('../../static/img/OSS_Logo.svg').default,
    description: (
      <>
        Galactica is fully OSS which means that you can see it's source code and
        there are no paid plans, just free ones!
      </>
    ),
  },
  {
    title: 'Powered by Discord.js',
    Svg: require('../../static/img/js_discord-icon.svg').default,
    description: (
      <>
        Extend or customize galactica with Discord.js. Galactica can
        be modified while reusing the same command handler and framework
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
