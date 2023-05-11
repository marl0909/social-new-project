import React from "react";
import "../../../../../../../../WebstormProjects/social-new-project/app/src/components/Profile/ProfileInfo/ProfileInfo.css";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

export const ProfileInfo = (props) => {
    return (
            <div className="personal-profile-card">
                <div className="background-card-photo">
                    <img src={"https://share.america.gov/wp-content/uploads/2018/06/international-waters-freedom-of-navigation-DY8ERP.jpg"} alt="image"/>
                </div>
                <div className="description">
                    <figure className="description__avatar">
                        <img src={props.avatar} className="description__avatar-photo"/>
                    </figure>
                    <h4 className="description__person-info">{props.name}
                        <span className="description__person-mail"> {props.description} </span>
                    </h4>

                    <div className="social-media-area">
                        {Object.getOwnPropertyNames(props.contacts).map((m) =>
                            <a className={`social-media-area__item ${m}`} href={'https://www.' + props.contacts[m]} target='_blank'> </a>)}
                    </div>

                    <div className="job-info-area">
                        <div className="job-info-area__status">
                            <p>{`I${props.islookingJob ? `'m looking for a job!` : ' have a job'}`}</p>
                        </div>

                        <div className="job-info-area__skills">
                            <h2>Skills:</h2>
                            <p>{props.skills}</p>
                        </div>
                    </div>


                </div>
            </div>
    );
};
