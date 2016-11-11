import React from 'react';
import Slider from 'react-slick';
import ProjectIndexItem from './project_index_item';
import ProjectForm from './project_form';
import {Link, hashHistory} from 'react-router';

const projectLink = id => {
    return (e) => {
        e.preventDefault();
        const url = `/projects/${id}`;
        hashHistory.push(url);
    };
};

class ProjectIndex extends React.Component {

    componentDidMount() {
        this.props.fetchProjects();
    }

    render() {
        const settings = {
            dots: true,
            className: "slideshow-main",
            fade: true,
            draggable: false,
            centerMode: false,
            autoplay: true,
            autoplaySpeed: 10000
        };
        const gridSettings = {
            dots: false,
            className: "slideshow-second",
            draggable: true,
            centerMode: true,
            arrows: false,
            infinite: true,
            focusOnSelect: true,
            slidesToShow: 3
        };
        const features = this.props.projects.filter(project => project.num_backers > 10);
        const nonfeatures = this.props.projects.filter(project => project.num_backers <= 10);
        return (
            <div className="project-index">
                <div className='slideshow-banner'>
                    <Slider {...settings}>
                        {features.map(feature => (
                            <div key={`projectfeat${feature.id}`} className="slideshow-item">
                                <div className="slide-text" onClick={projectLink(feature.id)}>
                                    <h1>{feature.title}</h1>
                                    <p>{feature.description}</p>
                                </div>
                                <img src={feature.image_url}/></div>
                        ))}
                        <div className="slideshow-item">
                            <div className="slide-text">
                                <h1>SAMPLE TEXT</h1>
                                <p>sup kdsajfosdjfldksajfklsadjflk;sadjflksadjflksdajflsk;djf</p>
                            </div>
                            <img src='http://i.imgur.com/DfaOJRB.jpg'/></div>
                        <div className="slideshow-item">
                            <div className="slide-text">
                                <h1>SAMPLE WEW</h1>
                            </div><img src='http://i.imgur.com/Utt3tVN.jpg'/></div>
                        <div className="slideshow-item">
                            <div className="slide-text">
                                <h1>SAMPLE TEXT THE THRD</h1>
                            </div><img src='http://i.imgur.com/iUFImpS.jpg'/></div>
                        <div className="slideshow-item">
                            <div className="slide-text">
                                <h1>SAMPLE KJLKFJ</h1>
                            </div><img src='http://i.imgur.com/fsltUVA.jpg'/></div>

                    </Slider>
                    <div>
                        <h1>Browse more projects...</h1>

                    </div>
                </div>
                <div className='nonfeature-grid'>
                    {nonfeatures.map(project => (<ProjectIndexItem key={`grid${project.id}`} project={project}/>))}
                </div>

            </div>
        );
    }
}

export default ProjectIndex;
