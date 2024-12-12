import { Character, simpleEpisodie } from '../../characters'
import { getEpisodies } from '../../api/services'

export function GetEpisodies(character: Character) {

    const { episode } = character;
    const ids: Array<string> = []
    episode?.map((epi) => {
        ids.push(epi.split('/').at(-1))
    })
    console.log("ids: ", ids.toString());
    if (ids.length > 0) {
        getEpisodies(ids.toString())
            .then((episodie: simpleEpisodie[]) => {
                console.info('episodie <<<>>>', episodie);
                return episodie
            });
    }
}
