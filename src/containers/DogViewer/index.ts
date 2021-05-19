import { connect } from "react-redux";
import { fetchBreedImage } from '../../stores/dog/actions';
import { DogViewerContainer } from "./DogViewer";

const mapStateToProps = (state: any) => {
    return ({
        loading: state.dog.loading,
        src: state.dog.src,
        onlineStatus: state.global.onlineStatus,
        error: state.dog.error
    })
}

const mapDispatchToProps = (dispatch: any) => ({
    fetchBreedImage: (breed: string, subBreed?: string) => dispatch(fetchBreedImage(breed, subBreed))
})

export default connect(mapStateToProps, mapDispatchToProps)(DogViewerContainer as any)