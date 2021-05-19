import { capitalize } from "@material-ui/core";

export default function capitalizeSentence(sentence: string) {
    return sentence.split(' ').map(word => capitalize(word)).join(' ');
}