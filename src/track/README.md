Schema for board pool to load.
{
    id - unique identifier
    name - to show on ui
    tag - tag of this component
    connections - tags of other components allowed to connect
    description - show on hover, could be a image path
}

UI shape for components is decided by frontend code according to the tag assigned,
Schema is not fixed and may change 