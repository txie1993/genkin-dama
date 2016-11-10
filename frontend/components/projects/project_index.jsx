import React from 'react';
import Slider from 'react-slick';
import ProjectIndexItem from './project_index_item';
import ProjectForm from './project_form';

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
            pauseOnHover: true,
            autoplay: true,
            autoplaySpeed: 5000
        };
        const features = this.props.projects.filter(project => project.num_backers > 10);
        const nonfeatures = this.props.projects.filter(project => project.num_backers <= 10);
        return (
            <div className="project-index">
                <div className='slideshow-banner'>
                    <Slider {...settings}>
                      {features.map(feature =>
                        (<div className="slideshow-item">
                            <div className="slide-text">
                                <h1>{feature.title}</h1>
                                <p>{feature.description}</p>
                            </div>
                          <img src={feature.image_url}/></div>)
                        )}

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
                                <h1>SAMPLE POOP</h1>
                            </div><img src='http://i.imgur.com/fsltUVA.jpg'/></div>
                    </Slider>
                </div>
                <ul>
                    {nonfeatures.map(project => (<ProjectIndexItem key={project.id} deleteProject={this.props.deleteProject} project={project}/>))
}
                </ul>
            </div>
        );
    }
}

export default ProjectIndex;
