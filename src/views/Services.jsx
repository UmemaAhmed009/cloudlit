import * as React from "react";
import styles from '../styles/Services.module.css'
import awsIcon from '../assets/aws-icon.png'
import azureIcon from '../assets/azure icon.webp'
import gcp from '../assets/google-cloud-platform.png'


const Services = () => {
  const isMobile = window.innerWidth <= 766; // Adjust the breakpoint as needed
  return (
        <div id="services">
        <div className={styles.Services}>
            <div className ={styles["content-container"]}>
                <h1 className ={styles["headingOne"]}>Tools and Technologies We Use</h1>
                <p className ={styles["contentOne"]}>Let us help you optimize your business success with an arsenal of
                well-proven tools and technologies.</p>
            </div>
            <div className={styles.container}>
                {/* First box */}
                <div className={styles.box}>
                    <div className ={styles.boxContent}>
                        <h1 className ={styles.headingTwo}>Cloud Providers</h1>
                        <p className ={styles.contentTwo}>Amazon AWS, GCP, Microsoft Azure, Any PrivateCloud and other...</p>
                        <div className={styles.boxContainer}>
                            <div className={styles.smallBox}>
                                <img
                                src={awsIcon}
                                alt="AWS Icon"
                                />
                            </div>
                            <div className={styles.smallBox}>
                                <img
                                src={azureIcon}
                                alt="Azure Icon"
                                />
                            </div>
                            <div className={styles.smallBox}>
                                <img
                                src={gcp}
                                alt="GCP Icon"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Second box */}
                <div className={styles.box}>
                    <div className ={styles.boxContent}>
                        <h1 className ={styles.headingTwo}>Databases</h1>
                        <p className ={styles.contentTwo}>MySql, MongoDB, Amazon Aurora, PostgresSQL, Percona, Scylla DB, Clickhouse MariaDB, Oracle, MS SQL, InnoDB and other...</p>
                        <div className={styles.boxContainer}>
                            <div className={styles.smallBox}>
                                <img
                                src={awsIcon}
                                alt="AWS Icon"
                                />
                            </div>
                            <div className={styles.smallBox}>
                                <img
                                src={azureIcon}
                                alt="Azure Icon"
                                />
                            </div>
                            <div className={styles.smallBox}>
                                <img
                                src={gcp}
                                alt="GCP Icon"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Third box */}
                <div className={styles.box}>
                    <div className ={styles.boxContent}>
                        <h1 className ={styles.headingTwo}>Containers & Orchestration</h1>
                        <p className ={styles.contentTwo}>Docker, Compose, Kubernetes and other...</p>
                        <div className={styles.boxContainer}>
                            <div className={styles.smallBox}>
                                <img
                                src={awsIcon}
                                alt="AWS Icon"
                                />
                            </div>
                            <div className={styles.smallBox}>
                                <img
                                src={azureIcon}
                                alt="Azure Icon"
                                />
                            </div>
                            <div className={styles.smallBox}>
                                <img
                                src={gcp}
                                alt="GCP Icon"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Fourth box */}
                <div className={styles.box}>
                    <div className ={styles.boxContent}>
                        <h1 className ={styles.headingTwo}>Service</h1>
                        <p className ={styles.contentTwo}>RabbitMQ, Apache Kafka, Apache Cassandra, Redis, ELK stack, Istio, MinIO, Memcached, Kiali and other...</p>
                        <div className={styles.boxContainer}>
                            <div className={styles.smallBox}>
                                <img
                                src={awsIcon}
                                alt="AWS Icon"
                                />
                            </div>
                            <div className={styles.smallBox}>
                                <img
                                src={azureIcon}
                                alt="Azure Icon"
                                />
                            </div>
                            <div className={styles.smallBox}>
                                <img
                                src={gcp}
                                alt="GCP Icon"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Fifth box */}
                <div className={styles.box}>
                    <div className ={styles.boxContent}>
                        <h1 className ={styles.headingTwo}>CI/CD</h1>
                        <p className ={styles.contentTwo}>Jenkins, GitLab, GitHub, Teamcity, CircleCI, Travis CI, Bitbucket pipelines, DroneCI, Flux, ArgoCD and other...</p>
                        <div className={styles.boxContainer}>
                            <div className={styles.smallBox}>
                                <img
                                src={awsIcon}
                                alt="AWS Icon"
                                />
                            </div>
                            <div className={styles.smallBox}>
                                <img
                                src={azureIcon}
                                alt="Azure Icon"
                                />
                            </div>
                            <div className={styles.smallBox}>
                                <img
                                src={gcp}
                                alt="GCP Icon"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Sixth box */}
                <div className={styles.box}>
                    <div className ={styles.boxContent}>
                        <h1 className ={styles.headingTwo}>Monitoring</h1>
                        <p className ={styles.contentTwo}>Promethus, Datadog, Sentry, Grafana, PagerDuty, InfluxDB, Azure Monitor, Google Stackdriver, Amazon Cloudwatch and other...</p>
                        <div className={styles.boxContainer}>
                            <div className={styles.smallBox}>
                                <img
                                src={awsIcon}
                                alt="AWS Icon"
                                />
                            </div>
                            <div className={styles.smallBox}>
                                <img
                                src={azureIcon}
                                alt="Azure Icon"
                                />
                            </div>
                            <div className={styles.smallBox}>
                                <img
                                src={gcp}
                                alt="GCP Icon"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Seventh box */}
                <div className={styles.box}>
                    <div className ={styles.boxContent}>
                        <h1 className ={styles.headingTwo}>Configuration management</h1>
                        <p className ={styles.contentTwo}>Ansible, Chef, puppet and other...</p>
                        <div className={styles.boxContainer}>
                            <div className={styles.smallBox}>
                                <img
                                src={awsIcon}
                                alt="AWS Icon"
                                />
                            </div>
                            <div className={styles.smallBox}>
                                <img
                                src={azureIcon}
                                alt="Azure Icon"
                                />
                            </div>
                            <div className={styles.smallBox}>
                                <img
                                src={gcp}
                                alt="GCP Icon"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Eigth box */}
                <div className={styles.box}>
                    <div className ={styles.boxContent}>
                        <h1 className ={styles.headingTwo}>Infrastructure provisioning</h1>
                        <p className ={styles.contentTwo}>Terraform, Pulumi, AWS CloudFormation and other...</p>
                        <div className={styles.boxContainer}>
                            <div className={styles.smallBox}>
                                <img
                                src={awsIcon}
                                alt="AWS Icon"
                                />
                            </div>
                            <div className={styles.smallBox}>
                                <img
                                src={azureIcon}
                                alt="Azure Icon"
                                />
                            </div>
                            <div className={styles.smallBox}>
                                <img
                                src={gcp}
                                alt="GCP Icon"
                                />
                            </div>
                        </div>{/* box-container */}
                    </div>{/* box-content */}
                </div>{/* box */}
            </div>{/* container */}
{ /*Services */}</div> 
</div>
    );
};

export default Services;