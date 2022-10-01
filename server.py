from flask import Flask
from flask_graphql import GraphQLView
import graphene

app = Flask(__name__)

states = []
class State(graphene.ObjectType):

    id = graphene.ID(description = "State ID")

    name = graphene.String(description = "State name")

create = lambda id,name:State(id=id,name=name)

states.append(create(1,"Alabama"))

class Query(graphene.ObjectType):

    states = graphene.List(State, description="list states")

    version = graphene.String(description="version")

    def resolve_states(self, info):
        return states

    def resolve_version(self, info):
        return "v0.1"

# Mutation
Name = ["Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Minor Outlying Islands", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "U.S. Virgin Islands", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
num = len (Name)

for names in Name:
    state = create(len(states) + 1, names)
    states.append(state)


class AddState(graphene.Mutation):

    Output = State

    class Arguments:
        name = graphene.String()

    def mutate(self, info, name):
        state = create(len(states) + 1, name)
        states.append(state)
        return state

class Mutation(graphene.ObjectType):

    add = AddState.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)

app.add_url_rule('/graphql', view_func=GraphQLView.as_view('graphql',
    schema=schema, graphiql=True))

app.run(port=4901, debug=True)
