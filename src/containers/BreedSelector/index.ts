import { connect } from "react-redux";
import { fetchBreed} from "../../stores/breed/actions";
import { BreedSelectorContainer } from "./BreedSelector";

const mapStateToProps = (state: any) => {
    console.log(state)
    return ({
        selectedBreed: state?.breed?.selectedBreed as string ,
        selectedSubBreed: state?.breed?.selectedSubBreed as string,
        breedData: (state?.breed?.breedData || {}) as any,
        loading: state.breed.loading,
        error: state.breed.error,
        onlineStatus: state.global.onlineStatus
    })
}

const mapDispatchToProps = (dispatch: any) => ({
    fetchBreed: () => dispatch(fetchBreed())
})

export default connect(mapStateToProps, mapDispatchToProps)(BreedSelectorContainer as any)